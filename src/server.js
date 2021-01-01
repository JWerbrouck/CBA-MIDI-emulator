'use strict'
const {createName, getRandomInt} = require('./functions')
const interfaces = require('./networkinterface')()
console.log('interfaces', interfaces)
const { App } = require("uWebSockets.js");
const { v4 } = require("uuid");
const MESSAGE_ENUM = require('./messageTypes')
const decoder = new TextDecoder("utf-8");

function startServer(port) {
  const app = App()
  .ws("/ws", {
    // config
    compression: 0,
    maxPayloadLength: 16 * 1024 * 1024,
    idleTimeout: 3600,

    // open handler
    open: (ws, req) => {
      ws.id = v4();
      ws.username = createName(getRandomInt(), SOCKETS);

      // subscribe to topics
      ws.subscribe(MESSAGE_ENUM.CLIENT_CONNECTED);
      ws.subscribe(MESSAGE_ENUM.CLIENT_DISCONNECTED);
      ws.subscribe(MESSAGE_ENUM.CLIENT_MESSAGE);

      // global SOCKETS array created earlier
      SOCKETS.push(ws)

      // indicate message type so the client can filter with a switch statement later on
      let selfMsg = {
        type: MESSAGE_ENUM.SELF_CONNECTED,
        body: {
          id: ws.id,
          name: ws.username
        }
      }

      let pubMsg = {
        type: MESSAGE_ENUM.CLIENT_CONNECTED,
        body: {
          id: ws.id,
          name: ws.username
        }
      }

      // send to connecting socket only
      ws.send(JSON.stringify(selfMsg));

      // send to *all* subscribed sockets
      app.publish(pubMsg)
    },

    // message handler
    message: (ws, message, isBinary) => {
      // decode message from client
      let clientMsg = JSON.parse(decoder.decode(message));
      let serverMsg = {};

      switch (clientMsg.type) {
        case MESSAGE_ENUM.CLIENT_MESSAGE:
          serverMsg = {
            type: MESSAGE_ENUM.CLIENT_MESSAGE,
            sender: ws.username,
            body: clientMsg.body,
          };
          app.publish(MESSAGE_ENUM.CLIENT_MESSAGE, JSON.stringify(serverMsg));
          break;
        default:
          break;
      }
    },

    // close handler
    close: (ws, code, message) => {
      SOCKETS.find((socket, index) => {
        if (socket && socket.id === ws.id) {
          SOCKETS.splice(index, 1);
        }
      });
    
      let pubMsg = {
        type: MESSAGE_ENUM.CLIENT_DISCONNECTED,
        body: {
          id: ws.id,
          name: ws.name
        }
      }
    
      app.publish(MESSAGE_ENUM.CLIENT_DISCONNECTED, JSON.stringify(pubMsg));

    }
  })
  .listen(port, (token) => {

    token
      ? console.log(`Listening to port ws://${interfaces[0]}:${port}/ws`)
      : console.log(`Failed to listen to port ${port}`);
  });

}

module.exports = {
  startServer
}