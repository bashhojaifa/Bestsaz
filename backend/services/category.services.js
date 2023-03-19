const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const { Category, Product } = require("../models");

// get categories
exports.getCategories = async () => {
  const categories = await Category.find().sort({ createdAt: -1 });

  return categories;
};

// create category
exports.createCategory = async (categoryData) => {
  // make slug
  categoryData.slug = categoryData.name.split(" ").join("-").toLowerCase();

  const category = await Category.create(categoryData);

  return category;
};

// update category
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

// delete category
exports.deleteCategory = async (categoryId) => {
  const category = await Category.findById({ _id: categoryId });
  if (!category) {
    throw new ApiError(httpStatus.NOT_FOUND, "Category Not Found!");
  }

  await category.remove();

  return category;
};
