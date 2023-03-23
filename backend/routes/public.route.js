// External library import
const express = require("express");
const router = express.Router();

// Internal Library import
const {
  categoryList,
  notificationList,
} = require("../controllers/public.controller");

// category list get route
router.get("/category/categoryList", categoryList);

// notification list get route
router.get("/notification/notificationList", notificationList);

module.exports = router;
