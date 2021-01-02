global.SOCKETS = []
global.ctrl = false

const {onKeyPress, onKeyRelease} = require('./keyboardHandlers')

const port = 7777;

require('./server').startServer(port)

const ExclusiveKeyboard = require('exclusive-keyboard');
const keyboard = new ExclusiveKeyboard('by-id/usb-Logitech_G815_RGB_MECHANICAL_GAMING_KEYBOARD_147C386A3836-event-kbd', true);
keyboard.on('keyup', onKeyRelease);
keyboard.on('keypress', onKeyPress);

keyboard.on('keydown', console.log);
keyboard.on('close', console.log);
keyboard.on('error', console.error);
