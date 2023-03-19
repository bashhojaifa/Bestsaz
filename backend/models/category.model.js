const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please Enter Admin Id"],
      ref: "Admin",
    },

    name: {
      type: String,
      required: [true, "Please Enter Category Name!"],
      unique: [true, "Category should be unique"],
      max: [50, "Category name can not exceed 50 character"],
      min: [4, "Category Name should have greater than 4 character"],
    },

    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
