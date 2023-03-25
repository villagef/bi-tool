import { useEffect, useState } from "react";
import ModalComponent from "components/Modal";
import TableComponent from "components/Table";
import { DatasetProps } from "pages/Database/types";
import { request } from "utils/request";
import { message } from "antd";
import { handleColumns } from "utils/handleColumns";

interface Props {
  id: string;
  setId: (el: string) => void;
}

const DatasetDetails = ({ id, setId }: Props) => {
  const [dataset, setDataset] = useState<any>(null);

  async function fetchData(): Promise<void> {
    try {
      const response = await request<DatasetProps>("get", `${id}`);
      setDataset(response.data);
    } catch (error) {
      message.error(`${error.message}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    !!dataset && (
      <ModalComponent
        open={!!dataset}
        title={dataset.name}
        closable={true}
        onCancel={() => setId(null)}
      >
        <TableComponent
          columns={handleColumns(dataset.columns)}
          data={dataset.data}
          rowKey={handleColumns(dataset.columns)[0].dataIndex}
        />
      </ModalComponent>
    )
  );
};

export default DatasetDetails;
