const slug = (data) => {
  const slug = data.split(" ").join("-").toLowerCase();
  return slug;
};

module.exports = slug;
