import { ReactElement } from "react";

export interface TableDataProps {
  [key: string]: string | number | Date;
}

export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key?: string;
  ellipsis?: boolean;
  render?: (
    tag: string,
    record?: string,
    index?: number
  ) => ReactElement | undefined | string;
}

export interface TableProps {
  data: TableDataProps[];
  columns: TableColumnProps[];
  rowKey?: string;
  title?: string;
  bodyHeight?: string;
  size?: "small" | "middle" | "large";
  loading?: boolean;
  onRowClick?: (
    record: { [key: string]: string },
    index: number | undefined
  ) => void;
}
