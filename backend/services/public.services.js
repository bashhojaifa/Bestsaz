// Internal library import
const { Category, Notification, HomeSlider, SiteInfo } = require("../models");

/**
 * @desc home slider list
 * @access public
 * @request get
 * @route /api/v1/homeSlider/homeSliderList
 */
exports.homeSliderList = async () => {
  const homeSlider = await HomeSlider.find();
  return homeSlider;
};

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

/**
 * @desc Site Info List
 * @access public
 * @request get
 * @route /api/v1/siteInfo/siteInfoList
 */
exports.siteInfoList = async () => {
  const siteInfo = await SiteInfo.aggregate([{ $sort: { _id: -1 } }]);
  return siteInfo;
};
