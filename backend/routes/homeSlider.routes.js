// External library import
const express = require("express");
const router = express.Router();

// Internal library import
const { createHomeSlider } = require("../controllers/homeSlider.controller");
const auth = require("../middleware/auth");
const { imageUpload, resizeImg } = require("../middleware/uploadPhoto");

// routes
router.post(
  "/create/homeSlider",
  auth(["admin"]),
  imageUpload.single("image"),
  resizeImg,
  createHomeSlider
);

module.exports = router;
