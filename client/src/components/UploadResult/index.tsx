import { message } from "antd";
import ModalComponent from "components/Modal";
import TableComponent from "components/Table";
import { DatasetProps } from "pages/Database/types";
import { handleColumns } from "utils/handleColumns";
import { request } from "utils/request";

const UploadResult = ({ uploadResult, setUploadResult, fetchData }) => {
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
        data={uploadResult.data}
        rowKey={handleColumns(uploadResult?.columns)[0].dataIndex}
        loading={uploadResult ? false : true}
      />
    </ModalComponent>
  );
};

export default UploadResult;
