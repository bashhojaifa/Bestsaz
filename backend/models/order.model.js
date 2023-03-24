//External Lib Import
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Types.ObjectId,
      ref: "Admin",
      required: true,
    },

    customerId: {
      type: mongoose.Types.ObjectId,
      ref: "ECCustomer",
      required: true,
    },

    storeUserName: {
      type: String,
    },

    orderCode: {
      type: String,
      required: true,
    },

    taxPrice: {
      type: Number,
      default: 0,
      required: true,
    },

    shippingCost: {
      type: Number,
      default: 0,
      required: true,
    },

    otherCost: {
      type: Number,
      default: 0,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
      enum: ["cashOnDelivery", "localPickup"],
      default: "cashOnDelivery",
    },

    note: {
      type: String,
      max: 300,
    },

    orderStatus: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "courier",
        "processing",
        "completed",
        "cancelled",
        "rejected",
      ],
      default: "pending",
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },

    shippingInfo: {
      name: {
        type: String,
        max: 30,
        required: true,
      },
      city: {
        type: String,
        max: 30,
        required: true,
      },
      mobile: {
        type: String,
        required: true,
        validate(value) {
          if (!value.match("^(?:\\+88|88)?(01[3-9]\\d{8})$")) {
            throw new Error("Please enter the correct String");
          }
        },
      },
      address: {
        type: String,
        max: 100,
        required: true,
      },
    },

    orderItems: [
      {
        productId: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
