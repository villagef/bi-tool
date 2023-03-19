import ContentBox from "components/ContentBox";
import ModalComponent from "components/Modal";
import TableComponent from "components/Table";
import { TableDataProps } from "components/Table/types";
import UploadComponent from "components/Upload";
import { useState } from "react";

const DatabasePage = () => {
  const [parsedData, setParsedData] =
    useState<Papa.ParseResult<unknown> | null>(null);

  const tableColumns = (parsedData?.meta.fields as string[])?.map(
    (el: string) => {
      return { title: el, dataIndex: el };
    }
  );
  const data = parsedData ? (parsedData.data as TableDataProps[]) : [];

  return (
    <>
      <ContentBox>
        {parsedData && (
          <ModalComponent
            open={true}
            title="Uploaded data"
            closable={true}
            onOk={() => setParsedData(null)}
            onCancel={() => setParsedData(null)}
          >
            <TableComponent
              columns={tableColumns}
              data={data}
              loading={data ? false : true}
            />
          </ModalComponent>
        )}
        <div>
          <UploadComponent setParsedData={setParsedData} />
        </div>
        <div>database list</div>
      </ContentBox>
    </>
  );
};

export default DatabasePage;
