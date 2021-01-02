const {
    octaveHigher,
    octaveLower,
    setRegister,
    velocityHigher,
    velocityLower,
    allNotesOff
} = require('../tasks/tasks')

const mapping = {
    up_arrow: {task: octaveHigher, arguments: null},
    down_arrow: {task: octaveLower, arguments: null},
    left_arrow: {task: velocityLower, arguments: null},
    right_arrow: {task: velocityHigher, arguments: null},

    num_1: {task: setRegister, arguments: 1},
    num_2: {task: setRegister, arguments: 2},
    num_3: {task: setRegister, arguments: 3},
    num_4: {task: setRegister, arguments: 4},
    num_5: {task: setRegister, arguments: 5},
    num_6: {task: setRegister, arguments: 6},

}

module.exports = mapping