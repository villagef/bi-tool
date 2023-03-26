import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { request } from "utils/request";

const postData = async <T>(object: T, endpoint?: string): Promise<unknown> => {
  return await request<T>("post", endpoint, object);
};

const usePostData = <T>(endpoint?: string): UseMutationResult => {
  return useMutation({
    mutationFn: (object: T) => {
      return postData<T>(object, endpoint);
    },
  });
};

export default usePostData;
