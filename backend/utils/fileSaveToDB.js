const fs = require("fs");
const { cloudinaryUpload } = require("./cloudinary");

const singleImage = async (request, folder) => {
  const localPath = `public/images/${request?.file?.filename}`;
  const imgUploaded = await cloudinaryUpload(localPath, folder);

  const obj = {
    url: imgUploaded.url,
    public_id: imgUploaded.public_id,
  };

  fs.unlinkSync(localPath);
  return obj;
};

const multipleImage = async (req, folder) => {
  const images = [];

  for (let file of req.files) {
    let obj = {};
    const localPath = `public/images/${file.filename}`;
    const imgUploaded = await cloudinaryUpload(localPath, folder);
    obj.url = imgUploaded?.url;
    obj.public_id = imgUploaded?.public_id;
    fs.unlinkSync(localPath);
    images.push(obj);
  }

  return images;
};

module.exports = { singleImage, multipleImage };
