const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Route Import
const auth = require("./routes/auth.routes");
const products = require("./routes/products.route");
const category = require("./routes/category.route");
const subCategory = require("./routes/subCategory.route");
const profile = require("./routes/profile.routes");

// import middleware
const errorMiddleware = require("./middleware/error");

// export json into app
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// export cookie parser
app.use(cookieParser());

// export cors
app.use(cors());

// app.use(fileUpload());

// export product into app
app.use("/api/v1", auth);
app.use("/api/v1", profile);
app.use("/api/v1", products);
app.use("/api/v1", category);
app.use("/api/v1", subCategory);

// middleware for error
app.use(errorMiddleware);

module.exports = app;
