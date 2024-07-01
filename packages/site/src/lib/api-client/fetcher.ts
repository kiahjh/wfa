import { error } from "types/utils";
import type { ApiResponse } from "types";

const apiUrl = import.meta.env.PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error(`PUBLIC_API_URL is not set`);
}

const fetcher = {
  get: async (path: string): Promise<ApiResponse<unknown>> => {
    const res = await fetch(`${apiUrl}${path}`);
    let json = await res.json();

    if (typeof json.success !== `boolean` || typeof json.status !== `number`) {
      return error(
        `Malformed response`,
        `5da1f77d-3486-4560-8faa-825db207e6d8`,
        500,
      );
    }

    if (
      (json.success === true && json.data === undefined) ||
      (json.success === false && json.error === undefined)
    ) {
      return error(
        `Malformed response`,
        `2f0b914f-041b-4ff3-af23-559ad5a92036`,
        500,
      );
    }

    json = json as ApiResponse<unknown>;

    return json;
  },

  post: async (path: string, data: any): Promise<ApiResponse<unknown>> => {
    const res = await fetch(`${apiUrl}${path}`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(data),
    });
    let json = await res.json();

    if (typeof json.success !== `boolean` || typeof json.status !== `number`) {
      return error(
        `Malformed response`,
        `0457310e-9f82-42e9-8f61-529abeed5f49`,
        500,
      );
    }

    if (
      (json.success === true && json.data === undefined) ||
      (json.success === false && json.error === undefined)
    ) {
      return error(
        `Malformed response`,
        `9eeb4c8a-07ba-4a74-a878-ba35d51ba3d9`,
        500,
      );
    }

    json = json as ApiResponse<unknown>;

    return json;
  },
};

export default fetcher;
