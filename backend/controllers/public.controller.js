// Internal library import
const httpStatus = require("http-status");
const asyncErrors = require("../middleware/asyncErrors");
const { publicServices } = require("../services");

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
 * @route /api/v1/notification/notificationList
 */

exports.notificationList = asyncErrors(async (req, res) => {
  const notificationList = await publicServices.notificationList();
  res.status(httpStatus.OK).send(notificationList);
});
