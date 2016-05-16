module.exports = function (data, template) {
  data = data || require('./data.json');
  var less = require('./style.less');
  var template = require('./template.ejs');
  var events = require('./event.js');

  var element = $(template(data));
  events(element);
  return element
};
