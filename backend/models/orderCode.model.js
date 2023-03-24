const mongoose = require("mongoose");

const orderCodeSchema = mongoose.Schema(
  {
    adminId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
      index: true,
    },

    orderCount: {
      type: Number,
      default: 1000,
    },
  },
  {
    timestamps: true,
  }
);

const OrderCode = mongoose.model("OrderCode", orderCodeSchema);

module.exports = OrderCode;
