const http = require('http') //aqui importo el module http

//create server method to create a server. Requires callback of two parameters
const server = http.createServer((req, res) => {
    res.end('your first simple web server');

});

//el server tiene que escuchar este servidor
server.listen(4000, () =>{
    console.log('server started at port 4000')
})

