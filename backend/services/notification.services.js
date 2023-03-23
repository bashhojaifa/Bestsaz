// Internal library import
const { Notification } = require("../models");

/**
 * @desc Create notification
 * @access admin
 * @request post
 * @route /api/v1/create/notification
 */
exports.createNotification = async (data) => {
  const notification = Notification.create(data);
  return notification;
};