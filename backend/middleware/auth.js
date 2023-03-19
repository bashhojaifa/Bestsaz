const catchAsync = require("../middleware/asyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");

const auth = (roles) =>
  catchAsync(async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return next(
        new ApiError(
          httpStatus.UNAUTHORIZED,
          "Please login to access this resource"
        )
      );
    }

    const decoded = jwt.verify(authorization, process.env.JWT_SECRET);

    if (!decoded) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, "Invalid token."));
    }

    const user = await User.findById(decoded.id);

    if (roles.indexOf(user.role) === -1) {
      return next(new ApiError(httpStatus.UNAUTHORIZED, "Not authorized."));
    }

    req.user = user;
    req.user.password = undefined;

    next();
  });

module.exports = auth;
