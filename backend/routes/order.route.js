// External library import
const express = require("express");
const router = express.Router();

// Internal library import
const { createOrder, getOrders } = require("../controllers/order.controller");
const auth = require("../middleware/auth");

// routes
router.post("/create/order", auth(["admin", "customer"]), createOrder);
router.get("/orders", auth(["admin"]), getOrders);

module.exports = router;
