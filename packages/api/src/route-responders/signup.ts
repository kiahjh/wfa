import { v4 as uuid } from "uuid";
import { type Signup } from "types/routes/signup";
import { error } from "types/utils";
import type { RouteResponder } from "../lib/types";
import { db } from "../db";
import { usersTable } from "../db/schema";

const signup: RouteResponder<Signup.Out> = async (c) => {
  if (
    typeof c.json !== `object` ||
    typeof c.json.email !== `string` ||
    typeof c.json.password !== `string`
  ) {
    return error(
      `Invalid request`,
      `33759840-f0cf-402b-9a73-3bbfa39d8fa3`,
      400,
    );
  }
  const input = c.json as Signup.In;

  const res = await db.insert(usersTable).values({
    password: input.password, // TODO: hash password
    email: input.email,
  });

  const sessionToken = uuid();

  return error(
    `Ok we tried, check postico`,
    `6bbed534-e685-45aa-b215-7a6565e47312`,
    501,
  );
};

export default signup;
