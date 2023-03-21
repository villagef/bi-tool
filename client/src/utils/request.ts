import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiResponse<T> {
  data: T;
  status: number;
}

export interface ApiError {
  message: string;
  status?: number;
}

export async function request<T>(
  method: string = "get",
  endpoint: string = "",
  data?: Record<string, unknown>,
  headers?: Record<string, string>
): Promise<ApiResponse<T>> {
  const url = `http://localhost:8080/api/${endpoint}`;
  const config: AxiosRequestConfig = {
    method,
    url,
    headers,
    data,
  };

  let response: AxiosResponse<T>;

  try {
    response = await axios(config);
  } catch (error) {
    if (error.response) {
      const apiError: ApiError = {
        message: error.response.data.message ?? error.response.statusText,
        status: error.response.status,
      };
      throw apiError;
    } else if (error.request) {
      const apiError: ApiError = {
        message: "No response from server.",
      };
      throw apiError;
    } else {
      const apiError: ApiError = {
        message: error.message,
      };
      throw apiError;
    }
  }

  const apiResponse: ApiResponse<T> = {
    data: response.data,
    status: response.status,
  };

  return apiResponse;
}
