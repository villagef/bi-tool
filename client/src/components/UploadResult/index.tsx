import { message } from "antd";
import ModalComponent from "components/Modal";
import TableComponent from "components/Table";
import { TableDataProps } from "components/Table/types";
import useFetchData, { QueryKeys } from "hooks/useFetchData";
import usePostData from "hooks/usePostData";
import { DatasetProps } from "pages/Database/types";
import { handleColumns } from "utils/handleColumns";
import { idInjector } from "utils/idInjector";

const UploadResult = ({ uploadResult, setUploadResult }) => {
  const { mutateAsync, isLoading } = usePostData<DatasetProps>();
  const { refetch } = useFetchData<DatasetProps[]>(QueryKeys.datasets);

  function handleSubmit() {
    const object = {
      owner: "John Doe",
      location: "My Workspace",
      ...uploadResult,
    };
    mutateAsync(object)
      .then((response: { data: string; status: number }) => {
        refetch();
        setUploadResult(null);
        message.success(`${response.data}`);
      })
      .catch((error) => message.error(`${error.message}`));
  }

  return (
    <ModalComponent
      open={true}
      title="Uploaded data"
      closable={true}
      onOk={handleSubmit}
      onCancel={() => setUploadResult(null)}
    >
      <TableComponent
        columns={handleColumns(uploadResult?.columns)}
        data={idInjector<TableDataProps>(uploadResult?.data)}
        rowKey={"customId"}
        loading={isLoading}
      />
    </ModalComponent>
  );
};

export default UploadResult;
