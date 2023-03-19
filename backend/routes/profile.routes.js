const express = require("express");
const router = express.Router();
const { profile } = require("../controllers/profile.controller");

// get profile route
router.get("/user/profile/:userId", profile);

module.exports = router;
