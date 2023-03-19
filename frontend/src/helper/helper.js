const { Navigate } = require("react-router-dom");

exports.getUserId = () => {
  const token = localStorage.getItem("bestSaz-token");
  let decode;
  if (token) {
    decode = JSON.parse(atob(token?.split(".")[1]));
  }

  return decode?.id;
};
