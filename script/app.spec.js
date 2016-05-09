var app = require('./app.js');

describe('App', function () {
   describe('element', function () {
     it('should return an element', function () {
       expect(app.element()).to.not.be.null;
     });
   });

});

