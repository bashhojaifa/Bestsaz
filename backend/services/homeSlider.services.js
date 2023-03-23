// Internal library import
const { HomeSlider } = require("../models");

/**
 * @desc create home slider
 * @access main
 * @request post
 * @route /api/v1/create/homeSlider
 */
exports.createHomeSlider = async (data) => {
  const homeSlider = HomeSlider.create(data);
  return homeSlider;
};
