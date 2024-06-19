export type ApiResponse<T> = (
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: ApiError;
    }
) & {
  status: number;
};

export type ApiError = {
  message: string;
  code: string;
};

