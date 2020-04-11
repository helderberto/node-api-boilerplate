function findById(results, id) {
  // eslint-disable-next-line no-underscore-dangle
  return results.find((result) => result._id === id);
}

module.exports = findById;
