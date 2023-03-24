// External library import
const httpStatus = require("http-status");

// Internal library import
const Product = require("../models/product.model");
const ErrorHandler = require("../utils/errorHandler");
const asyncError = require("../middleware/asyncErrors");
const { multipleImage } = require("../utils/fileSaveToDB");
const { productServices } = require("../services");

/**
 * @desc crete product
 * @access private
 * @request post
 * @route /api/v1/create/product
 */
exports.createProduct = asyncError(async (req, res) => {
  const images = await multipleImage(req, "product");
  const product = await productServices.createProduct(req.body, images);

  res.status(httpStatus.CREATED).json({
    message: "Product Create Successfully!",
    product,
  });
});

/**
 * @desc get products
 * @access private
 * @request get
 * @route /api/v1/product
 */
exports.getAllProducts = asyncError(async (req, res) => {
  const products = await Product.find();

  res.status(httpStatus.OK).json(products);
});

// update product -- admin
exports.updateProduct = asyncError(async (req, res) => {
  let product = Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found!", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// get single product
exports.detailsProduct = asyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found!", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete Product
exports.deleteProduct = asyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found!", 404));
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully!",
  });
});
