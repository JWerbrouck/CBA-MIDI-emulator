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

function setRegister(newReg) {
    register = newReg
}

function allNotesOff() {
    
}

module.exports = {
    octaveHigher,
    octaveLower,
    setRegister
}