// External library import
const httpStatus = require("http-status");

// Internal library import
const asyncErrors = require("../middleware/asyncErrors");
const { siteInfoServices } = require("../services");

/**
 * @desc create site info
 * @access private
 * @request get
 * @route /api/v1/create/siteInfo
 */
exports.createSiteInfo = asyncErrors(async (req, res) => {
  const siteInfo = await siteInfoServices.createSiteInfo(req.body);
  res.status(httpStatus.CREATED).json({
    message: "Site Info created successfully",
    siteInfo,
  });
});
