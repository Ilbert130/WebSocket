

//referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

//Creando el cliente
const socket = io();

//el 'on' es para escuchar los eventos, envento connect
//Resive un callback de lo que tiene que hacer como resultado del evento
socket.on('connect', () => {  
    // console.log('Connectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

//envento disconnect
socket.on('disconnect',  () => {
    // console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

//En este caso, el payload es el cuerpo del mensaje que se resive
socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});

//Mandandole un mensaje personalizado al servidor
//el 'emit' es para emitir un evento
btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '1245',
        fecha: new Date().getTime()
    }
    
    //Definiendo un evento. Estamos enviendo el mensaje
    //En este caso el payload es lo que nosotro mandamos al servidor
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    });
});
