import type { ApiResponse } from "types";

export function error<T>(
  message: string,
  code: string,
  status?: number,
): ApiResponse<T> {
  return {
    success: false,
    error: {
      message,
      code,
    },
    status: status || 500,
  };
}

export function ok<T>(data: T, status?: number): ApiResponse<T> {
  return {
    success: true,
    data,
    status: status || 200,
  };
}
