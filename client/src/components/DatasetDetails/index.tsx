import ModalComponent from "components/Modal";
import TableComponent from "components/Table";
import { DatasetProps } from "pages/Database/types";
import { handleColumns } from "utils/handleColumns";
import useFetchData, { QueryKeys } from "hooks/useFetchData";

interface Props {
  id: string;
  setId: (el: string) => void;
}

const DatasetDetails = ({ id, setId }: Props) => {
  const { isSuccess, data, isLoading } = useFetchData<DatasetProps>(
    QueryKeys.dataset,
    `${id}`
  );

  return (
    <ModalComponent
      open={isSuccess}
      title={data.name}
      closable={true}
      onCancel={() => setId(null)}
    >
      <TableComponent
        columns={handleColumns(data.columns)}
        data={data.data}
        rowKey={handleColumns(data.columns)[0].dataIndex}
        loading={isLoading}
      />
    </ModalComponent>
  );
};

export default DatasetDetails;
