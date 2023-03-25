export const handleColumns = (columns: string[]) => {
  return columns?.map((el: string) => {
    return { title: el, dataIndex: el };
  });
};
