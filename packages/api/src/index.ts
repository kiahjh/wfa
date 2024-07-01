import { Hono } from "hono";
import { cors } from "hono/cors";

import run from "./lib/run";
import signup from "./route-responders/signup";

const app = new Hono();
app.use(cors());

app.post(`/signup`, async (c) => {
  const res = await run(signup, { json: await c.req.json() });
  return c.json(res);
});

export default app;
