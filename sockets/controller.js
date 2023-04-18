

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    //El 'on' escucha
    //Evento para cuando se desconecta el servidor
    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        
    });
}