import { useEffect, useState } from "react";
import { message } from "antd";
import ContentBox from "components/ContentBox";
import TableComponent from "components/Table";
import UploadComponent from "components/Upload";
import { request } from "utils/request";
import { CONFIG } from "./config";
import { DatasetProps } from "./types";
import "./index.css";
import UploadResult from "components/UploadResult";
import DatasetDetails from "components/DatasetDetails";

const DatabasePage = () => {
  const [datasets, setDatasets] = useState<DatasetProps[]>([]);
  const [uploadResult, setUploadResult] = useState<Partial<DatasetProps>>(null);
  const [viewDetailsId, setViewDetailsId] = useState<string>(null);
  const [reload, setReload] = useState(true);

  async function fetchData(): Promise<void> {
    try {
      const response = await request<DatasetProps[]>();
      setDatasets(response.data);
    } catch (error) {
      message.error(`${error.message}`);
    }
  }

  async function removeData(id: string): Promise<void> {
    try {
      await request<DatasetProps[]>("delete", `${id}`);
    } catch (error) {
      message.error(`${error.message}`);
    }
  }

  const handleViewDetails = (id: string) => {
    setViewDetailsId(id);
  };

  const handleRemoveDataset = (id: string) => {
    removeData(id);
    setReload((prev) => !prev);
  };

  useEffect(() => {
    fetchData();
  }, [reload]);

  return (
    <>
      <ContentBox>
        {uploadResult && (
          <UploadResult
            uploadResult={uploadResult}
            setUploadResult={setUploadResult}
            fetchData={fetchData}
          />
        )}
        {viewDetailsId && (
          <DatasetDetails id={viewDetailsId} setId={setViewDetailsId} />
        )}
        <div className="database-upload-section">
          <UploadComponent setUploadResult={setUploadResult} />
        </div>
        <div className="database-table-section">
          <TableComponent
            columns={CONFIG(handleViewDetails, handleRemoveDataset)}
            data={datasets}
            title="Database"
          />
        </div>
      </ContentBox>
    </>
  );
};

export default DatabasePage;
