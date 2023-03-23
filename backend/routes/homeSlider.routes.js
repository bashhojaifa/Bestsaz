const express = require("express");
const { createHomeSlider } = require("../controllers/homeSlider.controller");
const { imageUpload, resizeImg } = require("../middleware/uploadPhoto");
const router = express.Router();

// routes
router.post(
  "/create/homeSlider",
  imageUpload.single("image"),
  resizeImg,
  createHomeSlider
);

module.exports = router;
