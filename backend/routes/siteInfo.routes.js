// External library import
const express = require("express");
const router = express.Router();

// Internal library import
const auth = require("../middleware/auth");
const { createSiteInfo } = require("../controllers/siteInfo.controller");

// routes
router.post("/create/siteInfo", auth(["admin"]), createSiteInfo);

module.exports = router;
