import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import router from "./router.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/posts", router);

export default app;
