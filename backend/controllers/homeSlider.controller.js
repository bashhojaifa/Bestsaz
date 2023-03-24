// External library import
const httpStatus = require("http-status");

// Internal library import
const asyncErrors = require("../middleware/asyncErrors");
const { singleImage } = require("../utils/fileSaveToDB");
const { homeSliderServices } = require("../services");

/**
 * @desc create home slider
 * @access private
 * @request post
 * @route /api/v1/create/homeSlider
 */
exports.createHomeSlider = asyncErrors(async (req, res) => {
  const image = await singleImage(req, "slider");
  const homeSlider = await homeSliderServices.createHomeSlider(req.body, image);

  res.status(httpStatus.CREATED).json({
    message: "Home Slider created successfully",
    homeSlider,
  });
});
