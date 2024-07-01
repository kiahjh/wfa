import { error } from "types/utils";
import type { RouteClient } from "@/lib/types";
import type { Signup } from "types/routes/signup";
import type { ApiResponse } from "types";
import fetcher from "../fetcher";

const signup: RouteClient<Signup.In, Signup.Out> = async (input) => {
  const res = await fetcher.post(`/signup`, input);
  if (!res.success) {
    return res;
  }

  const resData = res.data as any;

  if (typeof resData.token !== `string`) {
    return error(
      `Malformed response`,
      `f96be65c-8a3a-4eba-8e68-2a767e8eef81`,
      500,
    );
  }

  return res as ApiResponse<Signup.Out>;
};

export default signup;
