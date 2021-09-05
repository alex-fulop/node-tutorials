const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Hello! Welcome to my beautiful app!!!')
    res.end()
});

server.listen(5000)