import { builder, type BuilderHandler } from "@netlify/functions";
import ServerlessHttp from "serverless-http";
import app from "./app.js";

export const handler = builder(
  ServerlessHttp(app, { binary: ["image/*"] }) as unknown as BuilderHandler
);
