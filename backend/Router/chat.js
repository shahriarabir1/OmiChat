const express = require("express");
const { chatController } = require("./Controller/chatController");
const router = express.Router();

router.get("/", chatController);

module.exports = router;
