const catchAsync = require("../middleware/asyncErrors");
const sendToken = require("../utils/jwtToken");
const { authServices } = require("../services");
const httpStatus = require("http-status");
const { singleImage } = require("../utils/fileSaveToDB");
const { UniqueIdentifier } = require("../models");

// admin register
exports.adminRegister = catchAsync(async (req, res) => {
  const { name, mobile, address, nid, email, password } = req.body;

  const admin = await authServices.createAdmin({
    name,
    mobile,
    address,
    nid,
    avatar: {
      public_id: "this is simple id",
      url: "profileUrl",
    },
  });

  await UniqueIdentifier.create({ adminId: admin._id });

  let user;
  if (admin) {
    user = await authServices.createUser({
      role: "admin",
      email,
      password,
      admin: admin._id,
    });
  }

  if (user) {
    authServices.setUserId("Admin", admin._id, user._id);
  }

  sendToken(user, httpStatus.CREATED, res);
});

// customer register
exports.customerRegister = catchAsync(async (req, res) => {
  const avatar = await singleImage(req, "avatars");
  const { name, mobile, address, email, password } = req.body;

  const customer = await authServices.createCustomer({
    name,
    mobile,
    address,
    avatar,
  });

  const user = await authServices.createUser({
    role: "customer",
    email,
    password,
    customer: customer._id,
  });

  authServices.setUserId("Customer", customer._id, user._id);

  sendToken(user, httpStatus.CREATED, res);
});

// login user
exports.loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await authServices.loginUser(email, password);

  sendToken(user, httpStatus.OK, res);
});

// logout User
exports.logoutUser = catchAsync(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
