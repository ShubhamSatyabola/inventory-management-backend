const express = require("express");

const {createUser , checkUser } = require("../controllers/authController")

const router = express.Router();


router.post("/signup", createUser);

router.post("/login", checkUser);

module.exports = router;
