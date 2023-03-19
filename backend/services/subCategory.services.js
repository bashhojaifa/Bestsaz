const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { SubCategory, Product } = require("../models");

// get categories
exports.getSubCategories = async () => {
  const subCategories = await SubCategory.find().sort({ createdAt: -1 });

  return subCategories;
};

// create sub category
exports.createSubCategory = async (subCategoryData) => {
  // make slug
  subCategoryData.slug = subCategoryData.name
    .split(" ")
    .join("-")
    .toLowerCase();

  const subCategory = await SubCategory.create(subCategoryData);
  return subCategory;
};

// update sub category
exports.updateSubCategory = async (subCategoryId, updateSubCategoryData) => {
  let updateSubCategory = await SubCategory.findById(subCategoryId);

  if (!updateSubCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "Sub Category not found");
  }

  updateSubCategory = await SubCategory.findByIdAndUpdate(
    subCategoryId,
    updateSubCategoryData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  return updateSubCategory;
};
