const http = require('http') //aqui importo el module http
const casual = require('casual')

//create server method to create a server. Requires callback of two parameters
const server = http.createServer((req, res) => {
    res.end(casual.country);

});

//el server tiene que escuchar este servidor
server.listen(4000, () =>{
    console.log('server started at port 4000')
})

