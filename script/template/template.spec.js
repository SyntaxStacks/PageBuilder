var template = require('./index.js');

describe('Template Module', function () {
  describe('getTemplate', function () {
    it('should get a template', function () {
      sinon.spy(template, 'load');
      template.load('app').should.not.be.null;
      template.load.should.have.been.calledOnce;
    });
  });
});

