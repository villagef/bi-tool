import { TableDataProps } from "components/Table/types";

export interface DatasetProps {
  columns: string[];
  data: TableDataProps[];
  fileType: string;
  id: string;
  lastModifiedDate: Date | string;
  location: string;
  name: string;
  owner: string;
  size: number;
  uploadDate: Date | string;
}
