const WebSocket = require("ws");
const midi = require("midi");
global.output = new midi.Output();
const keyMapping  = require('./mappings/keyboardMapping')
const noteMapping = require("./mappings/azerty_C1");
const functionMapping = require('./mappings/functionMapping')

global.output = new midi.Output();
global.registers = 1
global.octave = 0
global.velocity = 50;
global.channels = [1]

// compile the main dictionary
const mapping = {};
(function () {
  for (const [keyCode, value] of Object.entries(keyMapping)) {
    if (Object.keys(noteMapping).includes(value.azerty[0])) {
      mapping[keyCode] = {value: noteMapping[value.azerty[0]].dec, type: "note", key: value.azerty[0]}
    }
    if (Object.keys(functionMapping).includes(value.azerty[0])) {
      mapping[keyCode] = {value: functionMapping[value.azerty[0]], type: "function", key: value.azerty[0]}
    }
  }
})();

const MESSAGE_ENUM = Object.freeze({
  SELF_CONNECTED: "SELF_CONNECTED",
  CLIENT_CONNECTED: "CLIENT_CONNECTED",
  CLIENT_DISCONNECTED: "CLIENT_DISCONNECTED",
  SERVER_KEYPRESS: "SERVER_KEYPRESS",
  KEY: "KEY",
});

const ws = new WebSocket("ws://192.168.1.29:7777/ws");
ws.onopen = (evt) => {
  ws.onmessage = (evt) => {
    let msg = JSON.parse(evt.data);

    switch (msg.type) {
      case MESSAGE_ENUM.KEY:
        handleKeyPress(msg.data);
        break;
      case MESSAGE_ENUM.SELF_CONNECTED:
        console.log(`MIDI connection established!`);
        openMidiPort();
        break;
      default:
        break;
    }
  };
};

function openMidiPort() {
  const defaultMidiPort = "loopMIDI Port 1"
  midiOpened = false
  const midiPorts = []
  for (i = 0; i < output.getPortCount(); i++) {
    if (output.getPortName(i) === defaultMidiPort) {
      output.openPort(Number(i));
      midiOpened = true
      console.log('Opened default MIDI port: ', defaultMidiPort)
    } else {
      midiPorts.push(output.getPortName(i))
    }
  }

  if (!midiOpened) {
    const readline = require("readline");
    midiPorts.forEach((port,i) => {
      console.log(`PORT ${i}: ${port}`);
    })
  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    rl.question("Could not find the default MIDI port. Please select a midi port (index) ...", function (midiPort) {
      console.log(
        "opening MIDI port ",
        output.getPortName(Number(midiPort)),
        "..."
      );
      output.openPort(Number(midiPort));
    });
  }
  console.log(`Lowest C is C${octave+2}`)
}

function handleKeyPress(data) {
  let eventType;
  switch (data.type) {
    case "keypress":
      eventType = 0x90;
      break;
    case "keyup":
      eventType = 0x80;
      break;
  }
  try {
    if (mapping[data.keyCode] !== undefined) {
      if (mapping[data.keyCode].type === "note") {
        for (i = 0; i < registers; i++) {
          const note = mapping[data.keyCode].value + 12*octave + 12*i
          channels.forEach(channel => {
            channelMessage = eventType - 1 + channel
            const message = [channelMessage, note, getVelocity()];
            output.sendMessage(message);
            if (eventType === 0x80) {
              output.sendMessage(message);
            }
          })
        }
      } else if (mapping[data.keyCode].type === "function" && data.type === "keypress") {
        mapping[data.keyCode].value()
      }

    } else {
      console.log(`keycode ${data.keyCode} has no association`)
    }
  } catch (error) {
    console.log('error', error)
    return
  }
}

function getVelocity() {
  return velocity;
}
