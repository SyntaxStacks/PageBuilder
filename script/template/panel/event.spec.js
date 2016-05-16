describe('Panel Events', function () {
  var events = require('./event.js');
  var panel = require('./template.ejs');
  var template = require('../index.js');
  // var less = require('./style.less');

  beforeEach(function () {
    element = panel();
    element = $(element);
    events(element, template);
  });

  it('should make .dropbox elements droppable', function () {
    element.find('.dropbox').hasClass('ui-droppable').should.be.true;
  });

  it('should render element dropped in .dropbox', function () {
    var container = $('<div id="container" style="width: 100%; height: 100%"></div>');
    var draggable =  $('<div class="pattern" data-pattern="pattern/ias">Drag Me</div>').draggable({scope: 'element'});
    container.append(draggable);
    container.append(element);
    $('body').append(container);
    var dropbox = $('.dropbox').eq(0);

    // hidden until drag
    dropbox.show();

    droppableOffset = dropbox.offset(),
    draggableOffset = draggable.offset(),
    dx = droppableOffset.left - draggableOffset.left,
    dy = droppableOffset.top - draggableOffset.top;

    draggable.simulate( "drag", {
      dx: dx + 5 ,
      dy: dy + 5
    });

    var expectedHtml = template.load('pattern/ias').eq(4)[0].outerHTML;
    var addedContent = dropbox.next().eq(0)[0].outerHTML;
    addedContent.should.contain(expectedHtml);
  });
});

