const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please Enter Admin Id"],
      ref: "Admin",
    },

    categorySlug: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },

    subCategorySlug: {
      type: String,
      required: [true, "Please Enter Product Category"],
    },

    title: {
      type: String,
      required: [true, "Please Enter Product Title"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Please Enter Product Description"],
    },

    price: {
      type: Number,
      required: [true, "Please Enter Product Price"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],

    stock: {
      type: Number,
      required: [true, "Please Enter Product Stock"],
      default: 1,
    },

    numOfReviews: {
      type: Number,
      default: 0,
    },

    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
