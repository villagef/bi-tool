import { Table } from "antd";
import { TableProps } from "components/Table/types";
import "components/Table/index.css";

const TableComponent = ({
  data,
  columns,
  size = "small",
  loading,
  onRowClick,
}: TableProps) => {
  return (
    <>
      <Table
        className="table-component"
        columns={columns}
        dataSource={data}
        pagination={false}
        size={size}
        loading={loading}
        onRow={
          onRowClick &&
          ((record, rowIndex) => {
            return {
              onClick: (event) => {
                event.stopPropagation();
                onRowClick(record, rowIndex);
              },
            };
          })
        }
      />
    </>
  );
};

export default TableComponent;
