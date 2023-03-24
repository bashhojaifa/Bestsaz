const { UniqueIdentifier } = require("../models");

const productCode = async (adminId) => {
  const counter = await UniqueIdentifier.findOneAndUpdate(
    { adminId: adminId },
    { $inc: { productCount: 1 } },
    { new: true }
  );

  const productCode = `BZ#${counter.productCount}`;
  return productCode;
};

module.exports = productCode;
