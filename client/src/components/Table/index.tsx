import { Table } from "antd";
import { TableProps } from "components/Table/types";
import "components/Table/index.css";

const TableComponent = ({
  data,
  columns,
  rowKey,
  title,
  size = "small",
  loading,
  onRowClick,
}: TableProps) => {
  return (
    <>
      {title && <h1>{title}</h1>}
      <Table
        className="table-component"
        columns={columns}
        rowKey={rowKey ?? "id"}
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
