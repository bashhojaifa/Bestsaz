// External library import
const httpStatus = require("http-status");

// Internal library import
const ApiError = require("../utils/ApiError");
const { SubCategory, Product } = require("../models");
const slug = require("../utils/makeSlug");

/**
 * @desc get sub category
 * @access private -> admin,
 * @request get,
 * @route /api/v1/subCategories
 */
exports.getSubCategories = async () => {
  const subCategories = await SubCategory.find().sort({ _id: -1 });

  return subCategories;
};

/**
 * @desc create sub category
 * @access private -> admin,
 * @request post,
 * @route /api/v1/subCategory/create
 */
exports.createSubCategory = async (subCategoryData) => {
  // make slug
  subCategoryData.slug = slug(subCategoryData.name);

  const subCategory = await SubCategory.create(subCategoryData);
  return subCategory;
};

/**
 * @desc update sub category
 * @access private -> admin,
 * @request patch,
 * @params categoryId
 * @route /api/v1/update/subCategory/:subCategoryId
 */
exports.updateSubCategory = async (subCategoryId, updateSubCategoryData) => {
  let subCategory = await SubCategory.findById(subCategoryId);

  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "Sub Category not found");
  }

  const matchProduct = await Product.find({
    subCategorySlug: subCategory.slug,
  });

  if (matchProduct.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Product under the subcategory");
  }

  updateSubCategoryData.slug = slug(updateSubCategoryData.name);

  subCategory = await SubCategory.findByIdAndUpdate(
    subCategoryId,
    updateSubCategoryData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  return subCategory;
};

/**
 * @desc delete sub category
 * @access private -> admin
 * @request delete
 * @params categoryId
 * @route /api/v1/delete/subCategory/:subCategoryId
 */
exports.deleteSubCategory = async (subCategoryId) => {
  const subCategory = await SubCategory.findById(subCategoryId);

  if (!subCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "Sub Category not found");
  }

  const matchProduct = await Product.find({
    subCategorySlug: subCategory.slug,
  });

  if (matchProduct.length) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Product under the subcategory");
  }

  await SubCategory.findByIdAndDelete(subCategoryId);

  return subCategory;
};
