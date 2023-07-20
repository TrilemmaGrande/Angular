var http = require('node:http');
var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1 style="color: red;">Hello, World!</h1>\n');
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
