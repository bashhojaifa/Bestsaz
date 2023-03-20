const Product = require("../models/product.model");
const ErrorHandler = require("../utils/errorHandler");
const AsyncError = require("../middleware/asyncErrors");
const { cloudinaryUpload } = require("../utils/cloudinary");
const fs = require("fs");
const httpStatus = require("http-status");

// Create Product -- Admin
exports.createProduct = AsyncError(async (req, res, next) => {
  console.log(req.body);
  console.log(req.file);
  const images = [];

  for (let file of req.files) {
    let obj = {};
    const localPath = `public/images/${file.filename}`;
    const imgUploaded = await cloudinaryUpload(localPath);
    obj.image = imgUploaded?.url;
    obj.public_id = imgUploaded?.public_id;
    fs.unlinkSync(localPath);
    images.push(obj);
  }

  // make slug
  req.body.categorySlug = req.body.category.split(" ").join("-").toLowerCase();
  req.body.subCategorySlug = req.body.subCategory
    .split(" ")
    .join("-")
    .toLowerCase();

  const product = await Product.create(req.body);

  res.status(httpStatus.CREATED).json({
    message: "Product Create Successfully!",
    product,
  });
});

// get all product
exports.getAllProducts = AsyncError(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// update product -- admin
exports.updateProduct = AsyncError(async (req, res) => {
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
exports.detailsProduct = AsyncError(async (req, res, next) => {
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
exports.deleteProduct = AsyncError(async (req, res, next) => {
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
