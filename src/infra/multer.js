const config = {
  dest: 'upload/',
  rename: function (fieldname, filename) {
    return filename;
  },
};

module.exports = {
  config,
};
