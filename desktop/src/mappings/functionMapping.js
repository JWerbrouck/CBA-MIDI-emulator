const {
    octaveHigher,
    octaveLower,
    setRegister,
    velocityHigher,
    velocityLower,
} = require('../tasks/tasks')

global.key_esc = false
global.key_alt = false
global.key_l_shift = false
global.key_r_shift = false
global.key_l_ctrl = false
global.key_r_ctrl = false
global.key_space = false

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

    // toggle keys
    esc: {task: () => {key_esc = !key_esc}, arguments: null, toggle: true},
    alt: {task: () => {key_alt = !key_alt}, arguments: null, toggle: true},
    l_shift: {task: () => {key_l_shift = !key_l_shift}, arguments: null, toggle: true},
    r_shift: {task: () => {key_r_shift= !key_r_shift}, arguments: null, toggle: true},
    l_ctrl: {task: () => {key_l_ctrl = !key_l_ctrl}, arguments: null, toggle: true},
    r_ctrl: {task: () => {key_r_ctrl = !key_r_ctrl}, arguments: null, toggle: true},
    space: {task: () => {key_space = !key_space}, arguments: null, toggle: true}

}

module.exports = mapping