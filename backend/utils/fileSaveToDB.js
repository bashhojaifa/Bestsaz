const fs = require("fs");
const { cloudinaryUpload } = require("./cloudinary");

const fileSaveToDB = async (request, folder) => {
  const localPath = `public/images/${request?.file?.filename}`;
  const imgUploaded = await cloudinaryUpload(localPath, folder);

  const obj = {
    url: imgUploaded.url,
    public_id: imgUploaded.public_id,
  };

  fs.unlinkSync(localPath);
  return obj;
};

module.exports = fileSaveToDB;
