const express = require("express");
const router = express.Router();
const {
  adminRegister,
  loginUser,
  logoutUser,
  customerRegister,
} = require("../controllers/auth.controller");
const { imageUpload, resizeImg } = require("../middleware/uploadPhoto");

// admin register route
router.post("/admin/register", adminRegister);

// user register route
router.post(
  "/register",
  imageUpload.single("avatar"),
  resizeImg,
  customerRegister
);

// login route
router.post("/login", loginUser);

// logout route
router.get("/logout", logoutUser);

module.exports = router;
