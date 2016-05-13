module.exports = function (element) {
  $(element.find('li')).draggable({
    scope: 'element',
    revert: 'invalid',
    start: function () {
      $('.dropbox').show();
    },
    stop: function () {
      $('.dropbox').hide();
    },
  });
};
