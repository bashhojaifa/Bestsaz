const express = require("express");
const router = express.Router();

const {
  getAllSubCategory,
  createSubCategory,
  updateSubCategory,
} = require("../controllers/subCategory.controller");
const auth = require("../middleware/auth");

// routes
router.get("/subCategories", auth(["admin"]), getAllSubCategory);
router.post("/subCategory/create", auth(["admin"]), createSubCategory);
router.patch("/subCategory/:subCategoryId", auth(["admin"]), updateSubCategory);

module.exports = router;
