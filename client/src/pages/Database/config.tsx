import { prettyDateTime } from "utils/prettyDataTime";
import {
  SearchOutlined,
  DeleteOutlined,
  FileExcelFilled,
  FireOutlined,
} from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { DatasetProps } from "./types";

export const CONFIG = (handleViewDetails: (el: string) => void) => {
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
          <FileExcelFilled style={{ color: "#34a853" }} />
        ) : (
          <FireOutlined style={{ color: "#fbbc04" }} />
        ),
    },
    {
      title: " ",
      dataIndex: "action",
      key: "action",
      render: (_: unknown, record: Partial<DatasetProps>) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Tooltip placement="top" title={"View details"}>
            <Button
              style={{ margin: "0px 5px" }}
              type="text"
              onClick={() => handleViewDetails(record?.id)}
            >
              <SearchOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title={"Remove dataset"}>
            <Button
              style={{ margin: "0px 10px", background: "#eb3627" }}
              type="primary"
            >
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];
};
