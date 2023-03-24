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

  const product = await Product.create(data);
  return product;
};
