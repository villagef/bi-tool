import ContentBox from "components/ContentBox";
import ModalComponent from "components/Modal";
import UploadComponent from "components/Upload";
import { useState } from "react";

const DatabasePage = () => {
  const [parsedData, setParsedData] =
    useState<Papa.ParseResult<unknown> | null>(null);
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
            <div>somedata</div>
            <div>somedata</div>
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
