const http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write('{id : 1}')
    res.end()
}).listen(5000)