const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

  admin: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Admin",
  },

  adminId: {
    type: mongoose.Types.ObjectId,
    required: [true, "Please Enter Admin Id"],
    ref: "Admin",
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
});

module.exports = mongoose.model("Author", AuthorSchema);
