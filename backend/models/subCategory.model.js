const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please Enter Admin Id"],
      ref: "Admin",
    },

    categoryId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please Enter Category Id"],
      ref: "Category",
    },

    slug: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: [true, "please Enter Sub Category Name"],
      unique: [true, "Sub Category should be unique"],
      max: [50, "Sub Category Name can not exceed 50 character"],
      min: [4, "Sub Category Name should have greater than 4 character"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);
