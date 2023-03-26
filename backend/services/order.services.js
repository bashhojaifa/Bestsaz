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

/**
 * @desc get orders
 * @access private -> admin,
 * @request get,
 * @route /api/v1/orders
 */
exports.getOrders = async () => {
  const orders = await Order.find().sort({ _id: -1 });
  return orders;
};
