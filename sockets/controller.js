

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    //El 'on' escucha
    //Evento para cuando se desconecta el servidor
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        //payload, es el mensaje que viene desde el cliente

        const id = 123456;
        callback(id);

        //si le agrega broadcast se emite el mensaje a todos los clientes, menos el que emite
        //De lo contrario el servidor se lo emitira al mismo cliente
        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = {
    socketController
}