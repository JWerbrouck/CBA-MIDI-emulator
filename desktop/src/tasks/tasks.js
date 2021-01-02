function octaveHigher () {
    if (-3 <= octave && octave <= 4) {
        octave = octave + 1
    }
    console.log(`Lowest C is C${octave+2}`)
}

function octaveLower () {
    if (-2 <= octave && octave <= 5) {
        octave = octave - 1
    }
    console.log(`Lowest C is C${octave+2}`)
}

function velocityHigher () {
    if (0 <= velocity && velocity <= 110) {
        velocity = velocity + 10
    }
    console.log(`Changed velocity to ${velocity}`)
}

function velocityLower () {
    if (10 <= velocity && velocity <= 120) {
        velocity = velocity - 10
    }
    console.log(`Changed velocity to ${velocity}`)
}


function setRegister(newReg) {
    registers = newReg
    console.log(`Registers active: ${newReg}`)
}

function allNotesOff() {
    
}

module.exports = {
    octaveHigher,
    octaveLower,
    setRegister,
    velocityLower,
    velocityHigher
}