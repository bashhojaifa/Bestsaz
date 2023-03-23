// External library import
const mongoose = require("mongoose");

const homeSliderSchema = new mongoose.Schema(
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

    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },

    bgColor: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    titleColor: {
      type: String,
      required: true,
    },

    subTitle: {
      type: String,
      required: true,
    },

    subTitleColor: {
      type: String,
      required: true,
    },

    productLink: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HomeSlider", homeSliderSchema);
