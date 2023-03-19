const asyncErrors = require("../middleware/asyncErrors");
const User = require("../models/user.model");
const Admin = require("../models/admin.model");

exports.profile = asyncErrors(async (req, res, next) => {
  const user = await User.findOne({ _id: req.params.userId });

  const userDetails = await Admin.findOne({ _id: user.admin });

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
  res.status(200).json(profile);
});
