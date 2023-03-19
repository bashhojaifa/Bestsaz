const express = require("express");
const router = express.Router();

const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");
const auth = require("../middleware/auth");

// routes
router.get("/categories", auth(["admin"]), getAllCategory);
router.post("/category/create", auth(["admin"]), createCategory);
router.patch("/category/:categoryId", auth(["admin"]), updateCategory);
router.delete("/category/delete/:categoryId", auth(["admin"]), deleteCategory);

module.exports = router;
