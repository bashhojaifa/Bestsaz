// Internal library import
const { HomeSlider } = require("../models");

/**
 * @desc create home slider
 * @access private
 * @request post
 * @route /api/v1/create/homeSlider
 */
exports.createHomeSlider = async (data, image) => {
  data.image = image;
  const homeSlider = HomeSlider.create(data);
  return homeSlider;
};
