import ContentBox from "components/ContentBox";
import ModalComponent from "components/Modal";
import TableComponent from "components/Table";
import { TableDataProps } from "components/Table/types";
import UploadComponent from "components/Upload";
import { useState } from "react";
import { CONFIG } from "./config";
import { mock_data } from "./mock_data";

const DatabasePage = () => {
  const [uploadResult, setUploadResult] =
    useState<Papa.ParseResult<unknown> | null>(null);
  const uploadData = uploadResult
    ? (uploadResult.data as TableDataProps[])
    : [];
  const uploadTableColumns = (uploadResult?.meta.fields as string[])?.map(
    (el: string) => {
      return { title: el, dataIndex: el };
    }
  );

  const handleConfirmUpload = () => {
    fetch("http://localhost:8080/api", {
      headers: {
        authorization: "",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ data: uploadData }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setUploadResult(null);
  };

  return (
    <>
      <ContentBox>
        {uploadResult && (
          <ModalComponent
            open={true}
            title="Uploaded data"
            closable={true}
            onOk={handleConfirmUpload}
            onCancel={() => setUploadResult(null)}
          >
            <TableComponent
              columns={uploadTableColumns}
              data={uploadData}
              rowKey={uploadTableColumns[0].dataIndex}
              loading={uploadData ? false : true}
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
          <TableComponent columns={CONFIG} data={mock_data} title="Database" />
        </div>
      </ContentBox>
    </>
  );
};

export default DatabasePage;
