// External library import

// Internal library import
const { Order } = require("../models");
const orderCode = require("../utils/orderCodeIdentifier");

/**
 * @desc create order
 * @access private -> customer, admin
 * @request post
 * @route /api/v1/create/order
 */
exports.createOrder = async (data) => {
  data.orderCode = await orderCode(data.adminId);
  const order = await Order.create(data);
  return order;
};
