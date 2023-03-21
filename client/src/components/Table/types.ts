import { DatasetProps } from "pages/Database/types";
import { ReactElement } from "react";

export interface TableDataProps {
  [key: string]: string | number | Date;
}

export interface TableColumnProps {
  title: string;
  dataIndex: string;
  key?: string;
  ellipsis?: boolean;
  width?: string;
  render?: (
    tag: string,
    record?: string,
    index?: number
  ) => ReactElement | undefined | string;
}

export interface TableProps {
  data: TableDataProps[] | Partial<DatasetProps[]>;
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
