import "./db";
import dotenv from "dotenv";
import app from "./app";
import "./models/Video";
import "./models/Comment";
import "./models/User";

import "./passport";

const https = require("https");
const fs = require("fs");

dotenv.config();

const options = {
  key: fs.readFileSync("./server.key"),
  cert: fs.readFileSync("./server.crt")
};
const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: https://localhost:${PORT}`);

https.createServer(options, app).listen(PORT, handleListening);
