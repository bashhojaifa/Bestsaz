//External Lib Import
const mongoose = require("mongoose");

const siteInfoSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Admin",
    },
    storeUserName: {
      type: String,
    },
    deliveryCharge: {
      type: Number,
    },
    about: {
      type: String,
    },
    storeName: {
      type: String,
    },
    storeLogo: {
      type: Object,
    },
    mobile: {
      type: String,
      validate(value) {
        if (!value.match("^(?:\\+88|88)?(01[3-9]\\d{8})$")) {
          throw new Error("Please enter the correct number");
        }
      },
    },
    email: {
      type: String,
      validate(value) {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          throw new Error("Please enter the correct email");
        }
      },
    },
    address: {
      type: String,
    },
    deliveryNotice: {
      type: String,
    },
    purchaseGuide: {
      type: String,
    },
    specialOffer: {
      type: String,
    },
    terms: {
      type: String,
    },
    aboutCompany: {
      type: String,
    },
    policy: {
      type: String,
    },
    socialLink: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SiteInfo", siteInfoSchema);
