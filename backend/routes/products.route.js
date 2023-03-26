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

router.get("/product/productList", auth(["admin"]), getAllProducts);
router.post(
  "/product/create",
  auth(["admin"]),
  imageUpload.array("images"),
  resizeImg,
  createProduct
);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product/details/:id", detailsProduct);

module.exports = router;
