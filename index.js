require("babel/register");
require('dotenv').config({path: 'deploy.env'});

exports.handler = function(event, context) {
  require('./src/app')(event, context);
};
