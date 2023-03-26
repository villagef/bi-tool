import { message } from "antd";
import { DatasetProps } from "pages/Database/types";
import { request } from "utils/request";

const useDeleteData = async (
  endpoint: string,
  callback?: () => void
): Promise<any> => {
  try {
    await request<DatasetProps[]>("delete", `${endpoint}`);
    message.success("Removed successfully");
    callback();
  } catch (error) {
    message.error(`${error.message}`);
  }
};

export default useDeleteData;
