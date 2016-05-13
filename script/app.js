var template = require('./template');

module.exports = {
  element: function () {
    var elements = {
      container: 'app',
      slider: 'slider',
      panel: 'panel',
    };

    _.each(elements, function (templateName, key) {
      elements[key] = template.load(templateName);
    });

    var builder = elements.container;
    builder.append(elements.slider);
    builder.append(elements.panel);

    return builder;
  }
};
