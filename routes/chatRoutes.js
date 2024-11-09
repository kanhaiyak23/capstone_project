const express = require("express");
const prisma = require('../config/db');
const {
  getAllMessages,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/chatControllers");

const chatRoutes = express.Router();

chatRoutes.get("/messages", getAllMessages);
chatRoutes.post("/messages", createMessage);
chatRoutes.put("/messages/:id",  updateMessage);
chatRoutes.delete("/messages/:id", deleteMessage);

module.exports = { chatRoutes };