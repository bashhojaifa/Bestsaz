// Internal library import
const { SiteInfo } = require("../models");

/**
 * @desc home slider list
 * @access private
 * @request post
 * @route /api/v1/homeSlider/homeSliderList
 */
exports.createSiteInfo = async (data) => {
  const siteInfo = await SiteInfo.create(data);
  return siteInfo;
};
