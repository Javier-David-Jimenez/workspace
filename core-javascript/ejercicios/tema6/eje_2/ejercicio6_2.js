const mapWithCb = (array, callback) => {
  const result = array.map(callback);
  return result;
};

module.exports = {
  mapWithCb,
};
