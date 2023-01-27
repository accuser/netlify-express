// import { builder, type BuilderHandler } from "@netlify/functions";
import ServerlessHttp from "serverless-http";
import app from "./app.js";

// Without On-Demand Builder
export const handler = ServerlessHttp(app, { binary: ["image/*"] });

// With On-Demand Builder
// export const handler = builder(
//   ServerlessHttp(app, { binary: ["image/*"] }) as unknown as BuilderHandler
// );
