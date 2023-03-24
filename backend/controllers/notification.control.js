// External library import
const httpStatus = require("http-status");

// Internal library import
const asyncErrors = require("../middleware/asyncErrors");
const { notificationServices } = require("../services");

/**
 * @desc Create notification
 * @access private
 * @request post
 * @route /api/v1/create/notification
 */
exports.createNotification = asyncErrors(async (req, res) => {
  const notification = await notificationServices.createNotification(req.body);
  res
    .status(httpStatus.CREATED)
    .json({ message: "Notification created successfully", notification });
});
