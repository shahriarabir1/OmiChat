const express = require("express");
const chat=require("./Router/chat")
const app = express();

app.use("/chat", chat);
