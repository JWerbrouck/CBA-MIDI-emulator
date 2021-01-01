'use strict'
let velocity = 50
const mapping = require('./mapping')
const MESSAGE_ENUM = require('./messageTypes')


function onKeyPress(e) {
    if (e.keyCode === 29 || e.keyCode === 97) {
        ctrl = true
    }

    if (ctrl === true && e.keyCode === 46) {
        SOCKETS = []
        process.exit()
    }

    if (SOCKETS.length > 0) {
        try {
            SOCKETS[0].send(JSON.stringify({ "type": MESSAGE_ENUM.KEY, "data": e }))
        } catch (error) {
            console.log('error', error)
            return
        }

    }
}

function onKeyRelease(e) {
    if (e.keyCode === 29 || e.keyCode === 97) {
        ctrl = false
    }

    if (SOCKETS.length > 0) {
        try {
            SOCKETS[0].send(JSON.stringify({ "type": MESSAGE_ENUM.KEY, "data": e }))
        } catch (error) {
            console.log('error', error)
            return
        }

    }
}

module.exports = {
    onKeyPress,
    onKeyRelease
}