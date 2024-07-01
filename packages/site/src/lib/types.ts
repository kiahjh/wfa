import type { ApiResponse } from "types";

export type RouteClient<In, Out> = (input: In) => Promise<ApiResponse<Out>>;
