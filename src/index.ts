import express from "express";
import * as dotenv from "dotenv";
import db from "../src/db";
import router from "./routes";
import cors from "cors";
import path from "path";

dotenv.config();
const port = process.env.PORT || 3000;

// const corsConfig: object = {
//   origin: "https://circle-app-amber.vercel.app",
// };

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("./src/uploads"));
app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));

// app.use(cors(corsConfig));
app.use(
  cors({
    origin: "https://circle-app-amber.vercel.app", // Domain Vercel Anda tanpa trailing slash
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use("/api/v1", router);

app.listen(port, async () => {
  await db.$connect();
  console.log(`Example app listening at ${port}`);
});
