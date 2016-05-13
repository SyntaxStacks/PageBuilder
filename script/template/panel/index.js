module.exports = function (data, template) {
  data = data || require('./data.json');
  var less = require('./style.less');
  var panel = require('./template.ejs');
  var events = require('./event.js');

  var element = $(panel(data));
  events(element, template);
  return element
};
