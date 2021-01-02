'use strict'

const { App } = require("uWebSockets.js");
const { v4 } = require("uuid");
const port = 7777;
let SOCKETS = [];

const decoder = new TextDecoder("utf-8");

const MESSAGE_ENUM = Object.freeze({
  SELF_CONNECTED: "SELF_CONNECTED",
  CLIENT_CONNECTED: "CLIENT_CONNECTED",
  CLIENT_DISCONNECTED: "CLIENT_DISCONNECTED",
  CLIENT_MESSAGE: "CLIENT_MESSAGE",
  SERVER_KEYPRESS: "SERVER_KEYPRESS",
});

let theSocket

const app = App()
  .ws("/ws", {
    // config
    compression: 0,
    maxPayloadLength: 16 * 1024 * 1024,
    idleTimeout: 60,

    // open handler
    open: (ws, req) => {
      ws.id = v4();
      ws.username = createName(getRandomInt());

      // subscribe to topics
      ws.subscribe(MESSAGE_ENUM.CLIENT_CONNECTED);
      ws.subscribe(MESSAGE_ENUM.CLIENT_DISCONNECTED);

      // global SOCKETS array created earlier
      theSocket = ws

      // indicate message type so the client can filter with a switch statement later on
      let selfMsg = {
        type: MESSAGE_ENUM.SELF_CONNECTED,
        body: {
          id: ws.id,
          name: ws.username,
        },
      };

      let pubMsg = {
        type: MESSAGE_ENUM.CLIENT_CONNECTED,
        body: {
          id: ws.id,
          name: ws.username,
        },
      };

      // send to connecting socket only
      console.log(ws.username, "is connected")
      ws.send(JSON.stringify(selfMsg));
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
          console.log("Unknown message type.");
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
      console.log(ws.username, "disconnected")
      app.publish(MESSAGE_ENUM.CLIENT_DISCONNECTED, JSON.stringify(pubMsg));
    }
  })
  .listen(port, (token) => {
    token
      ? console.log(`Listening to port ${port}`)
      : console.log(`Failed to listen to port ${port}`);
  });

// functions to help us generate random usernames
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(9999));
}

function createName(randomInt) {
  return SOCKETS.find((ws) => ws.name === `user-${randomInt}`)
    ? createName(getRandomInt())
    : `user-${randomInt}`;
}

