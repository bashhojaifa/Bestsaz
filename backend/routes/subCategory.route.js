const express = require("express");
const router = express.Router();

const {
  getAllSubCategory,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategory.controller");
const auth = require("../middleware/auth");

// routes
router.get("/subCategories", auth(["admin"]), getAllSubCategory);
router.post("/subCategory/create", auth(["admin"]), createSubCategory);
router.patch(
  "/update/subCategory/:subCategoryId",
  auth(["admin"]),
  updateSubCategory
);
router.delete(
  "/delete/subCategory/:subCategoryId",
  auth(["admin"]),
  deleteSubCategory
);

module.exports = router;
