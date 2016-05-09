var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var context = require.context('../script', true, /\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
