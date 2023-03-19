const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
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
    required: [true, "Please Enter Mobile Number"],
    unique: [true, "Mobile Number should be unique"],
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
    required: [true, "Enter Your Address"],
    max: [100, "Address can not exceed 100 characters"],
    trim: true,
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
});

/**
 * Check if mobile is taken
 * @param {string} mobile - The user's mobile
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */

customerSchema.statics.isMobileTaken = async function (
  mobile,
  excludeCustomerId
) {
  const customer = await this.findOne({
    mobile,
    _id: { $ne: excludeCustomerId },
  });
  return !!customer;
};

module.exports = mongoose.model("Customer", customerSchema);
