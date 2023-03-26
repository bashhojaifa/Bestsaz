// External library import
const httpStatus = require("http-status");

// Internal library import
const { subCategoryServices } = require("../services");
const asyncErrors = require("../middleware/asyncErrors");

/**
 * @desc get sub category
 * @access private -> admin,
 * @request get,
 * @route /api/v1/subCategories
 */
exports.getAllSubCategory = asyncErrors(async (req, res) => {
  const subCategories = await subCategoryServices.getSubCategories();

  res.status(httpStatus.OK).send(subCategories);
});

/**
 * @desc create sub category
 * @access private -> admin,
 * @request post,
 * @route /api/v1/subCategory/create
 */
exports.createSubCategory = asyncErrors(async (req, res) => {
  const subCategory = await subCategoryServices.createSubCategory(req.body);

  res.status(httpStatus.CREATED).json({
    message: "Sub Category Create Successfully",
    subCategory,
  });
});

/**
 * @desc update sub category
 * @access private -> admin,
 * @request patch,
 * @params subCategoryId
 * @route /api/v1/update/subCategory/:subCategoryId
 */
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

/**
 * @desc delete sub category
 * @access private -> admin
 * @request delete
 * @params categoryId
 * @route /api/v1/delete/subCategory/:subCategoryId
 */
exports.deleteSubCategory = asyncErrors(async (req, res) => {
  const deleteSubCategory = await subCategoryServices.deleteSubCategory(
    req.params.subCategoryId
  );
  res.status(httpStatus.OK).json({
    message: "Sub Category Deleted Successfully",
    deleteSubCategory,
  });
});
