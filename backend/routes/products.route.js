const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  detailsProduct,
} = require("../controllers/products.controller");

const auth = require("../middleware/auth");
const { resizeImg, imageUpload } = require("../middleware/uploadPhoto");

router.get("/products", getAllProducts);
router.post(
  "/product/create",
  imageUpload.array("images"),
  resizeImg,
  createProduct
);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product/:id", detailsProduct);

module.exports = router;
