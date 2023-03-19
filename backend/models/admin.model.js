const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

  name: {
    type: String,
    required: [true, "Please Enter Your name"],
    max: [30, "Name can not exceed 50 characters"],
    min: [4, "Name should have greater than 4 characters"],
    trim: true,
  },

  mobile: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    max: 11,
    validate(value) {
      if (!value.match(/^01[3456789][\d]{8}/)) {
        throw new Error("Invalid phone Number");
      }
    },
  },

  address: {
    type: String,
    max: [100, "Address can not exceed 100 characters"],
    required: [true, "Enter Your Address"],
    trim: true,
  },

  nid: {
    type: String,
    required: [true, "Enter Your NID Number"],
    max: [16, "NID Number can not exceed 16 Number"],
    min: [8, "NID Number should have greater than 8 Number"],
    unique: true,
  },

  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  manager: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Manager",
  },

  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author",
  },
});

/**
 * Check if mobile is taken
 * @param {string} mobile - The user's mobile
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */

adminSchema.statics.isMobileTaken = async function (mobile, excludeAdminId) {
  const admin = await this.findOne({
    mobile,
    _id: { $ne: excludeAdminId },
  });
  return !!admin;
};

module.exports = mongoose.model("Admin", adminSchema);
