// Internal library import
const productCode = require("../utils/uniqueIdentifier");
const slug = require("../utils/makeSlug");
const { Product } = require("../models");

/**
 * @desc crete product
 * @access private
 * @request post
 * @route /api/v1/create/product
 */
exports.createProduct = async (data, images) => {
  data.images = images;

  // unique product code
  data.productCode = await productCode(data.adminId);

  // make slug
  data.categorySlug = slug(data.category);
  data.subCategorySlug = slug(data.subCategory);
  data.titleSlug = slug(data.title);

  const product = await Product.create(data);
  return product;
};

/**
 * @desc get products
 * @access private -> admin
 * @request get
 * @route /api/v1/product
 */
exports.getProducts = async () => {
  const products = await Product.find().sort({ _id: -1 });
  return products;
};

/**
 * @desc product details
 * @request get
 * @access private -> admin
 * @params productId
 * @route /api/v1/product/:productId
 */
exports.detailsProduct = async (productId) => {
  const product = await Product.findById(productId);

  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product Not Found!");
  }
  return product;
};
