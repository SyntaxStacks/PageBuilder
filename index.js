module.exports = {
  init: function (selector) {
    selector = selector || 'body';
    var e = $(selector);
    var app = require('./script/app.js');
    return e.append(app.element())
      .promise();
  }
};
