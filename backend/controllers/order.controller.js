// External library import
const httpStatus = require("http-status");

// Internal library import
const asyncErrors = require("../middleware/asyncErrors");
const { orderServices } = require("../services");

/**
 * @desc create order
 * @access private -> customer, admin
 * @request post
 * @route /api/v1/create/order
 */
exports.createOrder = asyncErrors(async (req, res) => {
  const order = await orderServices.createOrder(req.body);

  res.status(httpStatus.CREATED).json({
    message: "Order created successfully",
    order,
  });
});

/**
 * @desc get orders
 * @access private -> admin,
 * @request get,
 * @route /api/v1/orders
 */
exports.getOrders = asyncErrors(async (req, res) => {
  const orders = await orderServices.getOrders();

  res.status(httpStatus.OK).send(orders);
});
