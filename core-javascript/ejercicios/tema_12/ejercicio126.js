function getValuesBetwen(set, min, max) {
  const resultSet = new Set();

  Array.from(set).forEach((value) => {
    if (value >= min && value <= max) {
      resultSet.add(value);
    }
  });

  return resultSet;
}

module.exports = {
  getValuesBetwen,
};
