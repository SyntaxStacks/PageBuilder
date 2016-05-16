module.exports = function (data, template) {
  var pattern = require('../../../../node_modules/zoolander/styleguide/derek/_partials/grid/widget/ias.ejs');
  return $(pattern(data || {}));
};
