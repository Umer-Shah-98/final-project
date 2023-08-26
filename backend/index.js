const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const cors = require("cors")
const mongoDB = require("./db");
mongoDB();
app.use(cors({
  origin:["https://64e942355e3821614de87d5a--comfy-lokum-8e7426.netlify.app/"],
  methods :["POST" ,"GET" ],
  credentials : "true"
}))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./routes/CreateUser"));
app.use("/api", require("./routes/DisplayData"));
app.use("/api", require("./routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
