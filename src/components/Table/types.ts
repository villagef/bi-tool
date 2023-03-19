import { ReactElement } from "react";

export interface TableDataProps {
  [key: string]: string | number | Date;
}

export interface TableColumnProps {
  title: string;
  dataIndex: string;
  render?: (
    tag: unknown,
    record: unknown,
    index: number
  ) => ReactElement | undefined;
}

export interface TableProps {
  data: TableDataProps[];
  columns: TableColumnProps[];
  size?: "small" | "middle" | "large";
  loading?: boolean;
  onRowClick?: (record: { [key: string]: string }, index: number) => void;
}
