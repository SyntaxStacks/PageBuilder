require('./global.less');
module.exports = {
  load: function (name, data) {
    data = data || {};
    return require('./' + name + '/index.js')(data, this);
  }
};
