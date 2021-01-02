const mapping = {
    //escape
    1: {
        keyId: "KEY_ESC",
        azerty: ["esc"],
    },

    //Fkeys
    59: {
        azerty: ["f1"],
        keyId: "KEY_F1",
    },
    60: {
        azerty: ["f2"],
        keyId: "KEY_F2",
    },

    61: {
        azerty: ["f3"],
        keyId: "KEY_F3",
    },
    62: {
        azerty: ["f4"],
        keyId: "KEY_F4",
    },
    63: {
        azerty: ["f5"],
        keyId: "KEY_F5",
    },
    64: {
        azerty: ["f6"],
        keyId: "KEY_F6",
    },
    65: {
        azerty: ["f7"],
        keyId: "KEY_F7",
    },
    66: {
        azerty: ["f8"],
        keyId: "KEY_F8",
    },
    67: {
        azerty: ["f9"],
        keyId: "KEY_F9",
    },
    68: {
        azerty: ["f10"],
        keyId: "KEY_F10",
    },
    87: {
        azerty: ["f11"],
        keyId: "KEY_F11",
    },
    88: {
        azerty: ["f12"],
        keyId: "KEY_F12",
    },

    // right hand keyboard
    99: {
        azerty: ['prtscrn'],
        keyId: "KEY_SYSRQ"
    },
    70: {
        azerty: ["scroll_lock", "arret_defil"],
        keyId: "KEY_SCROLLOCK"
    },
    119: {
        azerty: ["pause"],
        keyId: "KEY_PAUSE"
    },
    110: {
        azerty: ["insert"],
        keyId: "KEY_INSERT"
    },
    102: {
        azerty: ["home"],
        keyId: "KEY_HOME"
    },
    104: {
        azerty: ["page_up"],
        keyId: "KEY_PAGEUP"
    },
    111: {
        azerty: ["delete"],
        keyId: "KEY_DELETE"
    },
    107: {
        azerty: ["end"],
        keyId: "KEY_END"
    },
    109: {
        azerty: ["page_down"],
        keyId: "KEY_PAGEDOWN"
    },

    // arrow keys
    103: {
        azerty: ["up_arrow"],
        keyId: "KEY_UP"
    },
    108: {
        azerty: ["down_arrow"],
        keyId: "KEY_DOWN"
    },
    105: {
        azerty: ["left_arrow"],
        keyId: "KEY_LEFT"
    },
    106: {
        azerty: ["right_arrow"],
        keyId: "KEY_RIGHT"
    },

    // num pad
    69: {
        azerty: ["numlock"],
        keyId: "KEY_NUMLOCK"
    },
    98: {
        azerty: ["num_slash"],
        keyId: "KEY_KPSLASH"
    },
    55: {
        azerty: ["num_asterisk"],
        keyId: "KEY_KPASTERISK"
    },
    74: {
        azerty: ["num_minus"],
        keyId: "KEY_KPMINUS"
    },
    78: {
        azerty: ["num_plus"],
        keyId: "KEY_KPPLUS"
    },
    96: {
        azerty: ["num_enter"],
        keyId: "KEY_KPENTER"
    },
    83: {
        azerty: ["num_dot"],
        keyId: "KEY_KPDOT"
    },
    82: {
        azerty: ["num_0"],
        keyId: "KEY_KP0"
    },
    79: {
        azerty: ["num_1"],
        keyId: "KEY_KP1"
    },
    80: {
        azerty: ["num_2"],
        keyId: "KEY_KP2",
    },
    81: {
        azerty: ["num_3"],
        keyId: "KEY_KP3"
    },
    75: {
        azerty: ["num_4"],
        keyId: "KEY_KP4"
    },
    76: {
        azerty: ["num_5"],
        keyId: "KEY_KP5"
    },
    77: {
        azerty: ["num_6"],
        keyId: "KEY_KP6"
    },
    71: {
        azerty: ["num_7"],
        keyId: "KEY_KP7"
    },
    72: {
        azerty: ["num_8"],
        keyId: 'KEY_KP8'
    },
    73: {
        azerty: ["num_9"],
        keyId: "KEY_KP9"
    },
    16: {
        azerty: ["a"],
        keyId: "KEY_Q"
    },
  86: {
    keyId: "KEY_102ND",
    azerty: ["<"]
  },
  3: {
    keyId: "KEY_2",
    azerty: ["2"]
  },
  30: {
    keyId: "KEY_A",
    azerty: ["q"]
  },
  17: {
    keyId: "KEY_W",
    azerty: ["z"]
  },
  44: {
    keyId: "KEY_Z",
    azerty: ["w"]
  },
  4: {
    keyId: "KEY_3",
    azerty: ["3"]
  },
  31: {
    keyId: "KEY_S",
    azerty: ["s"]
  },
  18: {
    keyId: "KEY_E",
    azerty: ["e"]
  },
  45: {
    keyId: "KEY_X",
    azerty: ["x"]
  },
  5: {
    keyId: "KEY_4",
    azerty: ["4"]
  },
  32: {
    keyId: "KEY_D",
    azerty: ["d"]
  },
  19: {
    keyId: "KEY_R",
    azerty: ["r"]
  },
  46: {
    keyId: "KEY_C",
    azerty: ["c"]
  },
  6: {
    keyId: "KEY_5",
    azerty: ["5"]
  },
  33: {
    keyId: "KEY_F",
    azerty: ["f"]
  },
  20: {
    keyId: "KEY_T",
    azerty: ["t"]
  },
  47: {
    keyId: "KEY_V",
    azerty: ["v"]
  },
  7: {
    keyId: "KEY_6",
    azerty: ["6"]
  },
  34: {
    keyId: "KEY_G",
    azerty: ["g"]
  },
  21: {
    keyId: "KEY_Y",
    azerty: ["y"]
  },
  48: {
    keyId: "KEY_B",
    azerty: ["b"]
  },
  8: {
    keyId: "KEY_7",
    azerty: ["7"]
  },
  35: {
    keyId: "KEY_H",
    azerty: ["h"]
  },
  22: {
    keyId: "KEY_U",
    azerty: ["u"]
  },
  49: {
    keyId: "KEY_N",
    azerty: ["n"]
  },
  9: {
    keyId: "KEY_8",
    azerty: ["8"]
  },
  36: {
    keyId: "KEY_J",
    azerty: ["j"]
  },
  23: {
    keyId: "KEY_I",
    azerty: ["i"]
  },
  50: {
    keyId: "KEY_M",
    azerty: [",?"]
  },
  10: {
    keyId: "KEY_9",
    azerty: ["9"]
  },
  37: {
    keyId: "KEY_K",
    azerty: ["k"]
  },
  24: {
    keyId: "KEY_O",
    azerty: ["o"]
  },
  51: {
    keyId: "KEY_COMMA",
    azerty: [";."]
  },
  11: {
    keyId: "KEY_0",
    azerty: ["0"]
  },
  38: {
    keyId: "KEY_L",
    azerty: ["l"]
  },
  25: {
    keyId: "KEY_P",
    azerty: ["p"]
  },
  52: {
    keyId: "KEY_DOT",
    azerty: [":/"]
  },
  12: {
    keyId: "KEY_MINUS",
    azerty: [")"]
  },
  39: {
    keyId: "KEY_SEMICOLON",
    azerty: ["m"]
  },
  26: {
    keyId: "KEY_LEFTBRACE",
    azerty: ["^¨"]
  },
  53: {
    keyId: "KEY_SLASH",
    azerty: ["=+"]
  },
  13: {
    keyId: "KEY_EQUAL",
    azerty: ["-_"]
  },
  40: {
    keyId: "KEY_APOSTROPHE",
    azerty: ["ù%"]
  },
  27: {
    keyId: "KEY_RIGHTBRACE",
    azerty: ["$*"]
  },
  54: {
    keyId: "KEY_RIGHTSHIFT",
    azerty: ["r_shift"]
  },
  14: {
    keyId: "KEY_BACKSPACE",
    azerty: ["backspace"]
  },
  43: {
    keyId: "KEY_BACKSLASH",
    azerty: ["µ£"]
  },
  28: {
    keyId: "KEY_ENTER",
    azerty: ["enter"]
  },

  // aid keys:
  41: {
      azerty: ["²"],
      keyId: "KEY_GRAVE"
  },
  15: {
      azerty: ["tab"],
      keyId: "KEY_TAB"
  },
  58: {
      azerty: ["caps_lock"],
      keyId: "KEY_CAPSLOCK"
  },
  42: {
      azerty: ["l_shift"],
      keyId: "KEY_LEFTSHIFT"
  },
  29: {
      azerty: ["l_ctrl"],
      keyId: "KEY_LEFTCTRL"
  },
  56: {
      azerty: ["alt"],
      keyId: "KEY_LEFTALT"
  },
  57: {
      azerty: ["space"],
      keyId: "KEY_SPACE"
  },
  100: {
      azerty: ["alt_gr"],
      keyId: "KEY_RIGHTALT"
  },
  97: {
      azerty: ["r_ctrl"],
      keyId: "KEY_RIGHTCTRL"
  }
};

module.exports = mapping;
