// External library import
const express = require("express");
const router = express.Router();

// Internal library import
const { createNotification } = require("../controllers/notification.control");

// routes
router.post("/create/notification", createNotification);

module.exports = router;
