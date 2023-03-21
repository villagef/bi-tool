import { prettyDateTime } from "utils/prettyDataTime";
import {
  SearchOutlined,
  DeleteOutlined,
  FileExcelFilled,
  FireOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { TableColumnProps } from "components/Table/types";

export const CONFIG: TableColumnProps[] = [
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
    render: () => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button style={{ margin: "0px 5px" }} type="text">
          <SearchOutlined />
        </Button>
        <Button
          style={{ margin: "0px 10px", background: "#eb3627" }}
          type="primary"
        >
          <DeleteOutlined />
        </Button>
      </div>
    ),
  },
];
