const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const route = require("./router/route");
const connectDB = require("./db/connection");

app.use(cors());
app.use(express.json());
app.use(route);
connectDB();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
