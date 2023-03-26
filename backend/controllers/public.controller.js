// External library import
const httpStatus = require("http-status");

// Internal library import
const asyncErrors = require("../middleware/asyncErrors");
const { publicServices } = require("../services");

/**
 * @desc product list
 * @access public
 * @request get
 * @route /api/v1/products
 */
exports.getProductList = asyncErrors(async (req, res) => {
  const products = await publicServices.getProductList();
  res.status(httpStatus.OK).send(products);
});

/**
 * @desc product details
 * @access public
 * @request get
 * @route /api/v1/products/:titleSlug
 * @params titleSlug
 */
exports.productDetails = asyncErrors(async (req, res) => {
  const productDetails = await publicServices.productDetails(
    req.params.titleSlug
  );
  res.status(httpStatus.OK).send(productDetails);
});

/**
 * @desc home slider list
 * @access public
 * @request get
 * @route /api/v1/homeSlider/homeSliderList
 */
exports.homeSliderList = asyncErrors(async (req, res) => {
  const homeSliderList = await publicServices.homeSliderList();
  res.status(httpStatus.OK).send(homeSliderList);
});

/**
 * @desc Category List
 * @access public
 * @request get
 * @route /api/v1/category/categoryList/:categoryId
 */
exports.categoryList = asyncErrors(async (req, res) => {
  const categoryList = await publicServices.categoryList();
  res.status(httpStatus.OK).send(categoryList);
});

/**
 * @desc Notification List
 * @access public
 * @request get
 * @route /api/v1/notification/notificationList
 */
exports.notificationList = asyncErrors(async (req, res) => {
  const notificationList = await publicServices.notificationList();
  res.status(httpStatus.OK).send(notificationList);
});

/**
 * @desc Site Info List
 * @access public
 * @request get
 * @route /api/v1/siteInfo/siteInfoList
 */
exports.siteInfoList = asyncErrors(async (req, res) => {
  const siteInfoList = await publicServices.siteInfoList();
  res.status(httpStatus.OK).send(siteInfoList);
});
