// External library import
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
const notification = require("./routes/notification.route");
const homeSlider = require("./routes/homeSlider.routes");
const siteInfo = require("./routes/siteInfo.routes");
const order = require("./routes/order.route");

const publicRoute = require("./routes/public.route");

// import middleware
const errorMiddleware = require("./middleware/error");

// export json into app
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// export cookie parser
app.use(cookieParser());

// export cors
app.use(cors());

// base url variable
const baseUrl = "/api/v1";

// export product into app
app.use(baseUrl, auth);
app.use(baseUrl, profile);
app.use(baseUrl, products);
app.use(baseUrl, category);
app.use(baseUrl, subCategory);
app.use(baseUrl, notification);
app.use(baseUrl, homeSlider);
app.use(baseUrl, siteInfo);
app.use(baseUrl, order);

app.use(baseUrl, publicRoute);

// middleware for error
app.use(errorMiddleware);

module.exports = app;
