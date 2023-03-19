//External import
const cloudinary = require("cloudinary").v2;
const ApiError = require("./ApiError");

//confiqure cloudinary
cloudinary.config({
  cloud_name: "di6ye2ftw",
  api_key: "875665387776545",
  api_secret: "EiktHvPypanNYRlSfiVzX7hwKLo",
});

const cloudinaryUpload = async (fileToUpload, folderName) => {
  try {
    const data = await cloudinary.uploader.upload(fileToUpload, {
      resource_type: "auto",
      folder: folderName,
    });

    return {
      url: data?.secure_url,
      public_id: data?.public_id,
    };
  } catch (e) {
    ApiError(e.message, e.status);
  }
};

const cloudinaryDelete = async (public_id) => {
  try {
    return await cloudinary.uploader.destroy(public_id);
  } catch (e) {
    ApiError(e.message, e.status);
  }
};

module.exports = { cloudinaryUpload, cloudinaryDelete };
