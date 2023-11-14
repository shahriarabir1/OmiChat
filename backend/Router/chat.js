const express = require("express");
const { allchat, chatIndividual } = require("./Controller/chatController");
const router = express.Router();

router.get("/", allchat);
router.get("/:id", chatIndividual);
module.exports = router;
