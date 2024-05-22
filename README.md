# Chat con Express.js, WebSocket y Node.js

Proyecto de un chat, basado en la interfaz de telegram para hacerlo agradable, además de tener salas multiples además de la inicial,y así conectarse multpiples usuarios a ellas.

## Instalación

1. Clona este repositorio en tu máquina local

```bash
git clone 
```

2. Entra en el directorio del proyecto:


3. Instala las dependencias:

```bash
npm install
```

# Uso

1. Inicia el servidor:

```bash
nodemon server.js
```

2. Abre tu navegador web y visita http://localhost:3000 para acceder al chat.

3. Nueva Funcionalidad: Frases Aleatorias en Español
    Ahora, al entrar en una nueva sala, en lugar de simplemente recibir un mensaje de bienvenida estático, el chat mostrará una frase aleatoria en español para dar la bienvenida al usuario.

   Implementación
   Hemos utilizado la API pública de Chuck Norris para obtener frases aleatorias en español. Aquí está el código que se encarga de obtener y mostrar la frase aleatoria:
   Esta función hace una solicitud a la API de Chuck Norris para obtener una frase aleatoria. Luego, crea un nuevo elemento de mensaje con la frase y lo agrega al chat. Este proceso se activa automáticamente cuando un usuario entra en una nueva sala.

4. Conectate a diferentes salas, puedes ingresar el nombre de la sala y así conectarte a ella.

## Tecnologías Utilizadas
- Express.js: Framework web para Node.js que facilita la creación de aplicaciones web y APIs.
- WebSocket: Protocolo que permite la comunicación bidireccional en tiempo real entre clientes y servidores web.
- Node.js: Entorno de ejecución de JavaScript del lado del servidor.
- Nodemon: Herramienta que reinicia automáticamente el servidor cuando se realizan cambios en los archivos.