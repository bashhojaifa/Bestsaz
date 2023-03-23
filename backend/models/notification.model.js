const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: "Admin",
    },

    storeUserName: {
      type: String,
      ref: "Store",
    },

    title: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
