module.exports = {
  getTemplate: function (name) {
    var less = require('./' + name + '/style.less');
    var template = require('./' + name + '/template.ejs');
    var data = require('./' + name + '/data.json');
    var events = require('./' + name + '/event.js');

    var element = $(template(data));
    events(element);
    return element;
  }
};
