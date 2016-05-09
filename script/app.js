var loader = require('./template');

module.exports = {
  element: function () {
    var elements = {
      container: 'app',
      slider: 'slider',
    };

    _.each(elements, function (templateName, key) {
      elements[key] = loader.getTemplate(templateName);
    });

    var builder = elements.container;
    builder.append(elements.slider);

    return builder;
  }
};
