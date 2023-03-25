import { useEffect, useState } from "react";
import { message } from "antd";
import ContentBox from "components/ContentBox";
import TableComponent from "components/Table";
import UploadComponent from "components/Upload";
import { request } from "utils/request";
import { CONFIG } from "./config";
import { DatasetProps } from "./types";
import UploadResult from "components/UploadResult";
import DatasetDetails from "components/DatasetDetails";

const DatabasePage = () => {
  const [datasets, setDatasets] = useState<DatasetProps[]>([]);
  const [uploadResult, setUploadResult] = useState<Partial<DatasetProps>>(null);
  const [selectedDataset, setSelectedDataset] = useState<string>(null);

  async function fetchData(): Promise<void> {
    try {
      const response = await request<DatasetProps[]>();
      setDatasets(response.data);
    } catch (error) {
      message.error(`${error.message}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewDetails = (id: string) => {
    setSelectedDataset(id);
  };

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
        {selectedDataset && (
          <DatasetDetails id={selectedDataset} setId={setSelectedDataset} />
        )}
        <div style={{ width: "100%", height: "30%", margin: "6px 0px" }}>
          <UploadComponent setUploadResult={setUploadResult} />
        </div>
        <div
          id="database-table-section"
          style={{
            width: "100%",
            height: "68%",
            margin: "12px 0px",
          }}
        >
          <TableComponent
            columns={CONFIG(handleViewDetails)}
            data={datasets}
            title="Database"
          />
        </div>
      </ContentBox>
    </>
  );
};

export default DatabasePage;
