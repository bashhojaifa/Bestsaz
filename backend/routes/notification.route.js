// External library import
const express = require("express");
const router = express.Router();

// Internal library import
const auth = require("../middleware/auth");
const { createNotification } = require("../controllers/notification.control");

// routes
router.post("/create/notification", auth(["admin"]), createNotification);

module.exports = router;
