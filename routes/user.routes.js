const express = require("express");
const { registerUser, loginUser, getUser } = require("../controllers/user.controller");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken,getUser);

module.exports = router;