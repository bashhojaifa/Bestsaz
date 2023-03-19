const httpStatus = require("http-status");
const { User, Customer, Admin } = require("../models");
const ApiError = require("../utils/ApiError");

exports.getProfileDetails = (user, userDetails) => {
  const selectUser = {
    userId: user._id,
    role: user.role,
    email: user.email,
  };

  const selectUserDetails = {
    adminId: userDetails._id,
    name: userDetails.name,
    mobile: userDetails.mobile,
    address: userDetails.address,
    nid: userDetails.nid,
  };

  const profile = { ...selectUser, ...selectUserDetails };
  return profile;
};

// create admin
exports.createAdmin = async (query) => {
  if (await Admin.isMobileTaken(query.mobile)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Mobile number already taken");
  }

  const admin = await Admin.create(query);
  return admin;
};

// customer create
exports.createCustomer = async (customerInfo) => {
  if (await Customer.isMobileTaken(customerInfo.mobile)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Mobile number already taken");
  }

  const customer = await Customer.create(customerInfo);
  return customer;
};

// create user
exports.createUser = async (query) => {
  if (await User.isEmailTaken(query.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
  }

  const user = await User.create(query);
  return user;
};

// set user id
exports.setUserId = async (tableName, profileId, userId) => {
  if (tableName === "Admin") {
    await Admin.findOneAndUpdate(
      { _id: profileId },
      { $set: { user: userId } }
    );
  }

  if (tableName === "Customer") {
    await Customer.findOneAndUpdate(
      { _id: profileId },
      { $set: { user: userId } }
    );
  }
};

// login user
exports.loginUser = async (email, password) => {
  if (!email || !password) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Please Enter Email & Password");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  const passwordMatched = await user.comparePassword(password);

  if (!passwordMatched) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid email or password");
  }

  return user;
};
