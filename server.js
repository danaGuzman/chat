const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

// Ruta para el archivo HTML
app.get('/', (req, res) => {
    res.sendFile('__dirname' + 'index.html');
});

// Manejo de conexiones WebSocket
wss.on('connection', (ws) => {
    console.log('Nuevo cliente conectado');

    // Manejo de mensajes
    ws.on('message', (message) => {
        console.log('Mensaje recibido: %s', message);
        // Reenviar mensaje a todos los clientes conectados
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});