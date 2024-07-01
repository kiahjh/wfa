import type { ApiResponse } from "types";

export type RouteResponder<T> = (
  c: RouteResponderInput,
) => Promise<ApiResponse<T>>;

export type RouteResponderInput = { json?: any; token?: string };
