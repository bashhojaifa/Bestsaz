// Internal library import
const { Category, Notification } = require("../models");

/**
 * @desc Category List
 * @access public
 * @request get
 * @route /api/v1/category/categoryList/:categoryId
 */

exports.categoryList = async () => {
  const joinStage = {
    $lookup: {
      from: "subcategories",
      localField: "_id",
      foreignField: "categoryId",
      as: "subCategories",
    },
  };

  const projection = {
    $project: {
      _id: 0,
      name: 1,
      slug: 1,
      subCategories: {
        name: 1,
        slug: 1,
      },
    },
  };

  const data = await Category.aggregate([joinStage, projection]);
  return data;
};

/**
 * @desc Notification List
 * @access public
 * @request get
 * @route /api/v1/notification/notificationList
 */
exports.notificationList = async () => {
  const notificationList = await Notification.find();
  return notificationList;
};
