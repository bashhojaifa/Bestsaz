const { OrderCode } = require("../models");

const orderCode = async (adminId) => {
  const counter = await OrderCode.findOneAndUpdate(
    { adminId: adminId },
    { $inc: { orderCount: 1 } },
    { new: true }
  );

  const orderCode = `BZr#${counter.orderCount}`;
  return orderCode;
};

module.exports = orderCode;
