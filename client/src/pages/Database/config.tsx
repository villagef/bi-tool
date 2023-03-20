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
    title: "Upload date",
    dataIndex: "uploadDate",
    key: "uploadDate",
    ellipsis: true,
    render: (tag: string) => prettyDateTime(tag),
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    ellipsis: true,
    render: (tag: string) =>
      tag === "csv" ? (
        <FileExcelFilled style={{ color: "#34a853" }} />
      ) : (
        <FireOutlined style={{ color: "#fbbc04" }} />
      ),
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
    ellipsis: true,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    ellipsis: true,
  },
  {
    title: " ",
    dataIndex: "action",
    key: "action",
    render: () => (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ margin: "0px 5px" }} type="text">
          <SearchOutlined />
        </Button>
        <Button
          style={{ margin: "0px 5px", background: "#eb3627" }}
          type="primary"
        >
          <DeleteOutlined />
        </Button>
      </div>
    ),
  },
];
