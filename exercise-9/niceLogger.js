require('colors');
var _=require('lodash');
var config=require('./config');

var dontDoAnything=function(){};
var consoleLog=config.logEnable ? console.log.bind(console):dontDoAnything;

var info = function(){
    var tag = '[*** LOG *** ]'.green;
    var args = _.toArray(arguments).map(function(arg) {
        if(typeof arg === 'object')
        {
          var string = JSON.stringify(arg, null, 2);
          return tag + '  ' + string.cyan;
        } else {
          return tag + '  ' + arg.cyan;
        }
      });
    consoleLog.apply(console, args);
  };

var error= function() {
    var args = _.toArray(arguments).map(function(arg) {
        arg = arg.stack || arg;
        var name = arg.name || '[*** ERROR ***]';
        var log = name.red + '  ' + arg.yellow;
        return log;
      });

    consoleLog.apply(console, args);
  };

module.exports = {
    info:info,
    error:error
};