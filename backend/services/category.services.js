const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { Category, Product } = require("../models");

/**
 * @desc Get all category
 * @access private
 * @request get
 * @route /api/v1/categories
 */
exports.getCategories = async () => {
  const categories = await Category.find().sort({ createdAt: -1 });

  return categories;
};

/**
 * @desc Create category
 * @access private
 * @request post
 * @route /api/v1/category/create
 */
exports.createCategory = async (categoryData) => {
  // make slug
  categoryData.slug = categoryData.name.split(" ").join("-").toLowerCase();

  const category = await Category.create(categoryData);

  return category;
};

/**
 * @desc Update category
 * @access private
 * @request patch
 * @route /api/v1/category/:categoryId
 */
exports.updateCategory = async (categoryId, updateCategoryData) => {
  let updateCategory = await Category.findById(categoryId);

  if (!updateCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
  }

  // made slug
  req.body.slug = req.body?.name.split(" ").join("-").toLowerCase();

  updateCategory = await Category.findByIdAndUpdate(
    categoryId,
    updateCategoryData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  return updateCategory;
};

/**
 * @desc delete category
 * @access private
 * @request delete
 * @route /api/v1/category/delete/:categoryId
 */
exports.deleteCategory = async (categoryId) => {
  const category = await Category.findById({ _id: categoryId });
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category Not Found!");
  }

  await category.remove();

  return category;
};
