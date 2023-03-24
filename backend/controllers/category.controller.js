// External library import
const httpStatus = require("http-status");

// Internal library import
const asyncErrors = require("../middleware/asyncErrors");
const { categoryServices } = require("../services");

/**
 * @desc Create category
 * @access private
 * @request post
 * @route /api/v1/category/create
 */
exports.createCategory = asyncErrors(async (req, res, _next) => {
  const category = await categoryServices.createCategory(req.body);

  res.status(httpStatus.CREATED).json({
    message: "Category Create Successfully!",
    category,
  });
});

/**
 * @desc Update category
 * @access private
 * @request patch
 * @route /api/v1/category/:categoryId
 */
exports.updateCategory = asyncErrors(async (req, res) => {
  const updateCategory = await categoryServices.updateCategory(
    req.params.categoryId,
    req.body
  );

  res.status(httpStatus.OK).json({
    message: "Category UpdateD Successfully!",
    updateCategory,
  });
});

/**
 * @desc Get all category
 * @access private
 * @request get
 * @route /api/v1/categories
 */
exports.getAllCategory = asyncErrors(async (req, res) => {
  const categories = await categoryServices.getCategories();

  res.status(httpStatus.OK).send(categories);
});

/**
 * @desc delete category
 * @access private
 * @request delete
 * @route /api/v1/category/delete/:categoryId
 */
exports.deleteCategory = asyncErrors(async (req, res) => {
  const category = await categoryServices.deleteCategory(req.params.categoryId);
  res
    .status(httpStatus.OK)
    .send({ category, message: "Category Deleted Success!" });
});
