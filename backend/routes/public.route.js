// External library import
const express = require("express");
const router = express.Router();

// Internal Library import
const {
  categoryList,
  notificationList,
  homeSliderList,
  siteInfoList,
} = require("../controllers/public.controller");

// home slider list get route
router.get("/homeSlider/homeSliderList", homeSliderList);

// category list get route
router.get("/category/categoryList", categoryList);

// notification list get route
router.get("/notification/notificationList", notificationList);

// site info list get route
router.get("/siteInfo/siteInfoList", siteInfoList);

module.exports = router;
