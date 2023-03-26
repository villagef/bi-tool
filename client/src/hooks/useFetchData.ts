import { QueryKey, useQuery, UseQueryResult } from "@tanstack/react-query";
import { DatasetProps } from "pages/Database/types";
import { request } from "utils/request";

export const QueryKeys: { [key: string]: string } = {
  dataset: "/datasets:id",
  datasets: "/datasets",
};

const fetchData = async (endpoint?: string): Promise<unknown> => {
  const response = await request<DatasetProps[]>("get", endpoint);
  return response?.data;
};

const useFetchData = <T>(
  queryKey: string,
  endpoint?: string,
  isInterval?: boolean
): UseQueryResult<T> => {
  return useQuery([queryKey] as QueryKey, () => fetchData(endpoint), {
    refetchInterval: isInterval && 60000,
  });
};

export default useFetchData;
