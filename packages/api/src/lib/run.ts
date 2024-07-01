import { error } from "types/utils";
import type { ApiResponse } from "types";
import type { RouteResponder, RouteResponderInput } from "./types";

export default async function run<T>(
  fn: RouteResponder<T>,
  input: RouteResponderInput,
): Promise<ApiResponse<T>> {
  try {
    return await fn(input);
  } catch (e) {
    return error(
      `Internal server error`,
      `8266227d-d01a-438b-b6c4-18e86133188d`,
      500,
    );
  }
}
