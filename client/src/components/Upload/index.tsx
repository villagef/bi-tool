import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import Papa from "papaparse";
import "components/Upload/index.css";
import { TableDataProps } from "components/Table/types";
import { DatasetProps } from "pages/Database/types";

interface Props {
  setUploadResult: (e: Partial<DatasetProps>) => void;
}

const { Dragger } = Upload;

const UploadComponent = ({ setUploadResult }: Props) => {
  const props: UploadProps = {
    name: "file",
    multiple: false,
    accept: ".csv",
    beforeUpload(file) {
      setUploadResult(null);
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const result = e.target?.result as string;
        const papaParsed = Papa.parse(result, { header: true });
        const object = {
          name: file.name,
          lastModifiedDate: file.lastModifiedDate,
          size: file.size,
          fileType: file.type,
          data: papaParsed.data as TableDataProps[],
          columns: papaParsed.meta.fields,
        };
        setUploadResult(object);
      };
      reader.onloadend = () => {
        message.success("File uploaded successfully.");
      };
      reader.onerror = () => {
        message.error("File upload error.");
      };

      return false;
    },
  };
  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined style={{ color: "#1677ff" }} />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single upload from .csv.
        </p>
      </Dragger>
    </>
  );
};

export default UploadComponent;
