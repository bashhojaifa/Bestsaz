// External library import
const express = require("express");
const router = express.Router();

// Internal library import
const { createSiteInfo } = require("../controllers/siteInfo.controller");

// routes
router.post("/create/siteInfo", createSiteInfo);

module.exports = router;
