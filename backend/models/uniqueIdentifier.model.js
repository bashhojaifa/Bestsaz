const mongoose = require("mongoose");

const uniqueIdentifierSchema = mongoose.Schema(
  {
    adminId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
      index: true,
    },

    productCount: {
      type: Number,
      default: 1000,
    },
  },
  {
    timestamps: true,
  }
);

const UniqueIdentifier = mongoose.model(
  "UniqueIdentifier",
  uniqueIdentifierSchema
);

module.exports = UniqueIdentifier;
