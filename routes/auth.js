const express = require("express");
const auth = express.Router();
const Users = require("../models/User");
const { register, login } = require("../controllers/userController");

auth.post("/register", register).post("/login", login);
// auth.get("logout",logout);

module.exports = auth;
