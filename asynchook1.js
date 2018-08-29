var fs = require("fs");
var http = require('http');
var asyncHooks = require('async_hooks');

function init (asyncId, type, triggerId) {
    fs.writeSync(1, `${type} - ${asyncId}, ${triggerId}\n`);
  }

var asyncHook = asyncHooks.createHook({init});
asyncHook.enable()

http.createServer(function (req, res) {
  res.end('hello qts')
}).listen(8079);