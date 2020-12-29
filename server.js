const net = require("net");

const server = net.createServer();

const port = process.env.PORT || 8080

server.on("connection", socket => {
    // ...
})

server.listen(port, (err) => {
    if(err) throw err;
    console.log("> [Server] Listening on port",port)
})