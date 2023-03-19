const httpStatus = require("http-status");
const { subCategoryServices } = require("../services");
const asyncErrors = require("../middleware/asyncErrors");

// create subCategory
exports.createSubCategory = asyncErrors(async (req, res) => {
  const subCategory = await subCategoryServices.createSubCategory(req.body);

  res.status(httpStatus.CREATED).json({
    message: "Sub Category Create Successfully",
    subCategory,
  });
});

// update sub category
exports.updateSubCategory = asyncErrors(async (req, res) => {
  const updateSubCategory = await subCategoryServices.updateSubCategory(
    req.params.subCategoryId,
    req.body
  );

  res.status(httpStatus.OK).json({
    message: "Sub Category Update Successfully!",
    updateSubCategory,
  });
});

// get all sub category
exports.getAllSubCategory = asyncErrors(async (req, res) => {
  const subCategories = await subCategoryServices.getSubCategories();

  res.status(httpStatus.OK).send(subCategories);
});
