import { useEffect, useState } from "react";
import { message } from "antd";
import ContentBox from "components/ContentBox";
import ModalComponent from "components/Modal";
import TableComponent from "components/Table";
import UploadComponent from "components/Upload";
import { request } from "utils/request";
import { CONFIG } from "./config";
import { DatasetProps } from "./types";

const DatabasePage = () => {
  const [datasets, setDatasets] = useState<DatasetProps[]>([]);
  const [uploadResult, setUploadResult] = useState<Partial<DatasetProps>>(null);
  const uploadTableColumns = uploadResult?.columns?.map((el: string) => {
    return { title: el, dataIndex: el };
  });

  async function fetchData(): Promise<void> {
    try {
      const response = await request<DatasetProps[]>();
      setDatasets(response.data);
    } catch (error) {
      message.error(`${error.message}`);
    }
  }

  async function postDataset(): Promise<void> {
    const object = {
      owner: "John Doe",
      location: "My Workspace",
      ...uploadResult,
    };

    try {
      const response = await request<DatasetProps[]>("post", "", object);
      message.success(`${response.data}`);
      setUploadResult(null);
      fetchData();
    } catch (error) {
      message.error(`${error.message}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ContentBox>
        {uploadResult && (
          <ModalComponent
            open={true}
            title="Uploaded data"
            closable={true}
            onOk={postDataset}
            onCancel={() => setUploadResult(null)}
          >
            <TableComponent
              columns={uploadTableColumns}
              data={uploadResult.data}
              rowKey={uploadTableColumns[0].dataIndex}
              loading={uploadResult ? false : true}
            />
          </ModalComponent>
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
          <TableComponent columns={CONFIG} data={datasets} title="Database" />
        </div>
      </ContentBox>
    </>
  );
};

export default DatabasePage;
