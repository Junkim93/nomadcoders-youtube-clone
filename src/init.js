import "@babel/polyfill";
import dotenv from "dotenv";
import "./db";
import app from "./app";
import "./models/Video";
import "./models/Comment";
import "./models/User";

import "./passport";

// https local test option
// const https = require("https");
// const fs = require("fs");

dotenv.config();

// https local test option
// const options = {
//   key: fs.readFileSync("./server.key"),
//   cert: fs.readFileSync("./server.crt")
// };

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// https local test option
// https.createServer(options, app).listen(PORT, handleListening);
