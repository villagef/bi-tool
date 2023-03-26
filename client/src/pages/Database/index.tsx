import { useState } from "react";
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
import useFetchData, { QueryKeys } from "hooks/useFetchData";

const DatabasePage = () => {
  const [uploadResult, setUploadResult] = useState<Partial<DatasetProps>>(null);
  const [viewDetailsId, setViewDetailsId] = useState<string>(null);
  const { data, isLoading, refetch } = useFetchData<DatasetProps[]>(
    QueryKeys.datasets
  );

  async function removeData(id: string): Promise<void> {
    try {
      await request<DatasetProps[]>("delete", `${id}`);
      refetch();
    } catch (error) {
      message.error(`${error.message}`);
    }
  }

  const handleViewDetails = (id: string) => {
    setViewDetailsId(id);
  };

  const handleRemoveDataset = (id: string) => {
    removeData(id);
  };

  return (
    <>
      <ContentBox>
        {uploadResult && (
          <UploadResult
            uploadResult={uploadResult}
            setUploadResult={setUploadResult}
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
            data={data}
            title="Database"
            loading={isLoading}
          />
        </div>
      </ContentBox>
    </>
  );
};

export default DatabasePage;
