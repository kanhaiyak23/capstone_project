const express = require("express");
const { signup, login, getUser } = require("../controllers/auth");

const authRoutes = express.Router();
authRoutes.post("/login", login);
authRoutes.post("/signup", signup);
authRoutes.get("/getUser", getUser);
module.exports = { authRoutes };