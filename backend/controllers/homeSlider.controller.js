// External library import
const httpStatus = require("http-status");

// Internal library import
const asyncErrors = require("../middleware/asyncErrors");
const fileSaveToDB = require("../utils/fileSaveToDB");
const { homeSliderServices } = require("../services");

/**
 * @desc create home slider
 * @access admin
 * @request post
 * @route /api/v1/create/homeSlider
 */
exports.createHomeSlider = asyncErrors(async (req, res) => {
  const image = await fileSaveToDB(req, "slider");
  req.body.image = image;
  const homeSlider = await homeSliderServices.createHomeSlider(req.body);
  res.status(httpStatus.CREATED).json({
    message: "Home Slider created successfully",
    homeSlider,
  });
});
