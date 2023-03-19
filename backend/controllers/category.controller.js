const asyncErrors = require("../middleware/asyncErrors");
const { categoryServices } = require("../services");
const httpStatus = require("http-status");

// create category
exports.createCategory = asyncErrors(async (req, res, _next) => {
  const category = await categoryServices.createCategory(req.body);

  res.status(httpStatus.CREATED).json({
    message: "Category Create Successfully!",
    category,
  });
});

// update category
exports.updateCategory = asyncErrors(async (req, res, next) => {
  const updateCategory = await categoryServices.updateCategory(
    req.params.categoryId,
    req.body
  );

  res.status(httpStatus.OK).json({
    message: "Category UpdateD Successfully!",
    updateCategory,
  });
});

// get all category
exports.getAllCategory = asyncErrors(async (req, res) => {
  const categories = await categoryServices.getCategories();

  res.status(httpStatus.OK).send(categories);
});

// delete category
exports.deleteCategory = asyncErrors(async (req, res) => {
  const category = await categoryServices.deleteCategory(req.params.categoryId);
  res
    .status(httpStatus.OK)
    .send({ category, message: "Category Deleted Success!" });
});
