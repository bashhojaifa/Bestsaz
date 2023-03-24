// External library import
const express = require("express");
const router = express.Router();

// Internal library import
const { createOrder } = require("../controllers/order.controller");

// routes
router.post("/create/order", createOrder);

module.exports = router;
