const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const environment = require("./Environment/environment");
const chat = require("./Router/chat");

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGODB_CON)
  .then(() => {
    console.log("Connect To DB");
  })
  .catch((err) => {
    console.log(`There is a database connection err ${err}`);
  });


app.use("/chat", chat);

app.listen(environment.port, () => {
  console.log(`Server is runnig at port ${environment.port}`);
});
