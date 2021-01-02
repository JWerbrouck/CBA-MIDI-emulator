const {
    octaveHigher,
    octaveLower,
    setRegister,
    allNotesOff
} = require('../functions/functions')

const mapping = {
    up_arrow: octaveHigher,
    down_arrow: octaveLower,

    num_1: setRegister,
    num_2: setRegister,
    num_3: setRegister,
    num_4: setRegister,
    num_5: setRegister,
    num_6: setRegister,

    esc: allNotesOff
}

module.exports = mapping