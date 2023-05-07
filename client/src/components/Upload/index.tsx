import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import Papa from "papaparse";
import "components/Upload/index.css";
import { TableDataProps } from "components/Table/types";
import UploadResult from "components/UploadResult";
import { DatasetProps } from "pages/Database/types";

const { Dragger } = Upload;

const UploadComponent = () => {
  const [uploadResult, setUploadResult] =
    useState<Omit<DatasetProps, "id" | "location" | "owner" | "uploadDate">>(
      null
    );
  const props: UploadProps = {
    name: "file",
    multiple: false,
    accept: ".csv",
    beforeUpload(file) {
      setUploadResult(null);
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const result = String(e.target?.result);
        const papaParsed = Papa.parse<TableDataProps>(result, { header: true });
        const object = {
          name: file.name,
          lastModifiedDate: file.lastModifiedDate,
          size: file.size,
          fileType: file.type,
          data: papaParsed.data,
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
        <p>
          <InboxOutlined className="text-4xl text-mainLight" />
        </p>
        <p>Click or drag file to this area to upload</p>
        <p>Support for a single upload from .csv</p>
      </Dragger>
      {uploadResult && (
        <UploadResult
          uploadResult={uploadResult}
          setUploadResult={setUploadResult}
        />
      )}
    </>
  );
};

export default UploadComponent;
