import ContentBox from "components/ContentBox";
import UploadComponent from "components/Upload";
import { useState } from "react";

const DatabasePage = () => {
  const [parsedData, setParsedData] =
    useState<Papa.ParseResult<unknown> | null>(null);
  return (
    <>
      <ContentBox>
        <div>
          <UploadComponent setParsedData={setParsedData} />
        </div>
        <div>database list</div>
      </ContentBox>
    </>
  );
};

export default DatabasePage;
