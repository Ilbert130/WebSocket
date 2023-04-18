const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //Middlewares
        this.middlewares();

        //Eventos por Sockets
        this.sockets();
    }

    middlewares() {
        
        //CORS
        this.app.use(cors());

        //Directorio Publico
        this.app.use(express.static('public'));
    }

    sockets() {

        this.io.on('connection', );
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;