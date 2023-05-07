import { prettyDateTime } from "utils/prettyDataTime";
import {
  SearchOutlined,
  DeleteOutlined,
  FileExcelFilled,
  FireOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, Tooltip } from "antd";
import { DatasetProps } from "./types";

type Props = (el: string) => void;

export const CONFIG = (
  handleViewDetails: Props,
  handleRemoveDataset: Props
) => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      ellipsis: true,
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
      ellipsis: true,
    },
    {
      title: "Upload date",
      dataIndex: "uploadDate",
      key: "uploadDate",
      ellipsis: true,
      render: (tag: string) => prettyDateTime(tag),
    },
    {
      title: "Last modified date",
      dataIndex: "lastModifiedDate",
      key: "lastModifiedDate",
      ellipsis: true,
      render: (tag: string) => prettyDateTime(tag),
    },
    {
      title: "Type",
      dataIndex: "fileType",
      key: "fileType",
      ellipsis: true,
      width: "60px",
      render: (tag: string) =>
        tag === "text/csv" ? (
          <FileExcelFilled className="text-green" />
        ) : (
          <FireOutlined className="text-yellow" />
        ),
    },
    {
      title: " ",
      dataIndex: "action",
      key: "action",
      render: (_: unknown, record: Partial<DatasetProps>) => (
        <div className="flex justify-center">
          <Tooltip placement="left" title={"View details"}>
            <Button
              className="mx-1.5 my-0 flex items-center justify-center"
              onClick={() => handleViewDetails(record?.id)}
            >
              <SearchOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="left" title={"Remove dataset"}>
            <Popconfirm
              title="Delete the dataset"
              description="Are you sure to delete this dataset?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => handleRemoveDataset(record?.id)}
            >
              <Button
                className="mx-3 my-0 flex items-center justify-center bg-red"
                type="primary"
              >
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Tooltip>
        </div>
      ),
    },
  ];
};
