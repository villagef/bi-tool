import { message } from "antd";
import ModalComponent from "components/Modal";
import TableComponent from "components/Table";
import { TableDataProps } from "components/Table/types";
import useFetchData, { QueryKeys } from "hooks/useFetchData";
import { DatasetProps } from "pages/Database/types";
import { handleColumns } from "utils/handleColumns";
import { idInjector } from "utils/idInjector";
import { request } from "utils/request";

const UploadResult = ({ uploadResult, setUploadResult }) => {
  const { refetch } = useFetchData(QueryKeys.datasets);
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
      refetch();
    } catch (error) {
      message.error(`${error.message}`);
    }
  }

  return (
    <ModalComponent
      open={true}
      title="Uploaded data"
      closable={true}
      onOk={postDataset}
      onCancel={() => setUploadResult(null)}
    >
      <TableComponent
        columns={handleColumns(uploadResult?.columns)}
        data={idInjector<TableDataProps>(uploadResult?.data)}
        rowKey={"customId"}
        loading={uploadResult ? false : true}
      />
    </ModalComponent>
  );
};

export default UploadResult;
