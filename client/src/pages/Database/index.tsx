import { useState } from "react";
import ContentBox from "components/ContentBox";
import TableComponent from "components/Table";
import UploadComponent from "components/Upload";
import { CONFIG } from "./config";
import { DatasetProps } from "./types";
import DatasetDetails from "components/DatasetDetails";
import useFetchData, { QueryKeys } from "hooks/useFetchData";
import useDeleteData from "hooks/useDeleteData";

const DatabasePage = () => {
  const [viewDetailsId, setViewDetailsId] = useState<string>(null);
  const { data, isLoading, refetch } = useFetchData<
    Omit<DatasetProps[], "columns" | "data">
  >(QueryKeys.datasets);

  const handleViewDetails = (id: string) => {
    setViewDetailsId(id);
  };

  const HandleRemoveDataset = (id: string) => useDeleteData(id, refetch);

  return (
    <>
      <ContentBox>
        {viewDetailsId && (
          <DatasetDetails id={viewDetailsId} setId={setViewDetailsId} />
        )}
        <div className="mx-0 my-1.5 h-1/3 w-full">
          <UploadComponent />
        </div>
        <div className="mx-0 my-3 h-2/3 w-full">
          <TableComponent
            columns={CONFIG(handleViewDetails, HandleRemoveDataset)}
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
