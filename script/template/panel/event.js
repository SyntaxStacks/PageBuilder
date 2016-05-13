module.exports = function (element, template) {
  element.find('.dropbox').droppable({
    greedy: true,
    scope: 'element',
    hoverClass: 'element-hover',
    drop: function (event, ui) {
      var pattern = template.load($(ui.draggable).data('pattern'));
      $(this).after(pattern);
    }
  });


};
