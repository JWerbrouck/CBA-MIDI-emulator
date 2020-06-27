let keys = document.getElementsByClassName("key");
let keystrokes = [];

const notes = {
	"Ab2": "a",
	"A2": "<",
	"Bb2": "q",
	"A#2": "q",
	"B2": "z",
	"C3": "w",
	"C#3": "s",
	"D3": "e",
	"D#3": "x",
	"Eb3": "x",
	"E3": "d",
	"F3": "r",
	"F#3": "c",
	"G3": "f",
	"G#3": "t",
	"A3": "v",
	"A#3": "g",
	"Bb3": "g",
	"B3": "y",
	"C4": "b",
	"C#4": "h",
	"D4": "u",
	"D#4": "n",
	"Eb4": "n",
	"E4": "j",
	"F4": "i",
	"F#4": ",",
	"G4": "k",
	"G#4": "o",
	"A4": ";",
	"A#4": "l",
	"Bb4": "l",
	"B4": "p",
	"C5": ":",
	"C#5": "m",
	"D5": "^",
	"D#5": "=",
	"Eb5": "=",
	"E5": "ù",
	"F5": "$",
	"G5": "µ",
	"A5": "shift",
	"Bb5": "return"
}

const inverse_notes = {  
	"a": {
	   "val": 44,
	   "note": "Ab2"
	},
	"oem_102": {
		"val": 45,
		"note": "A2"
	 },
	 "q": {
		"val": 46,
		"note": "Bb2"       
	 },
	 "z": {
		"val": 47,
		"note": "B2"       
	 },
	"w": {
	   "val": 48,
	   "note": "C3"      
	},
	"s": {
	   "val": 49,
	   "note": "C#3"      
	},
	"e": {
	   "val": 50,
	   "note": "D3"      
	},
	"x": {
	   "val": 51,
	   "note": "Eb3"      
	},
	"d": {
	   "val": 52,
	   "note": "E3"      
	},
	"r": {
	   "val": 53,
	   "note": "F3"      
	},
	"c": {
	   "val": 54,
	   "note": "F#3"      
	},
	"f": {
	   "val": 55,
	   "note": "G3"
	},
	"t": {
	   "val": 56,
	   "note": "G#3"
	},
	"v": {
	   "val": 57,
	   "note": "A3"
	},
	"g": {
	   "val": 58,
	   "note": "Bb3"
	},
	"y": {
	   "val": 59,
	   "note": "B3"
	},
	"b": {
	   "val": 60,
	   "note": "C4"
	},
	"h": {
	   "val": 61,
	   "note": "C#4"
	},
	"u": {
	   "val": 62,
	   "note": "D4"
	},
	"n": {
	   "val": 63,
	   "note": "Eb4"
	},
	"j": {
	   "val": 64,
	   "note": "E4"
	},
	"i": {
	   "val": 65,
	   "note": "F4"
	},
	"oem_comma": {
	   "val": 66,
	   "note": "F#4"
	},
	"k": {
	   "val": 67,
	   "note": "G4"      
	},
	"o": {
	   "val": 68,
	   "note": "G#4"      
	},
	"oem_period": {
	   "val": 69,
	   "note": "A4"      
	},
	"l": {
	   "val": 70,
	   "note": "Bb4"      
	},
	"p": {
	   "val": 71,
	   "note": "B4"      
	},
	"oem_2": {
	   "val": 72,
	   "note": "C5"      
	},
	"m": {
		"val": 73,
		"note": "C#5"       
	 },
	"oem_6": {
	   "val": 74,
	   "note": "D5"       
	},
	"oem_plus": {
	   "val": 75,
	   "note": "Eb5"       
	},
	"oem_3": {
	   "val": 76,
	   "note": "E5"       
	},
	"oem_1": {
	   "val": 77,
	   "note": "F5"       
	},
	"oem_5": {
	   "val": 79,
	   "note": "G5"       
	},
	"rshift": {
	   "val": 81,
	   "note": "A5"       
	},
	"return": {
	   "val": 82,
	   "note": "Bb5"       
	},
	"2": {
	   "val": 44,
	   "note": "Ab2"
	},
	"3": {
	   "val": 48,
	   "note": "C3"      
	},
	"4": {
	   "val": 51,
	   "note": "Eb3"      
	},
	"5": {
	   "val": 54,
	   "note": "F#3"      
	},
	"6": {
	   "val": 57,
	   "note": "A3"
	},
	"7": {
	   "val": 60,
	   "note": "C4"
	},
	"8": {
	   "val": 63,
	   "note": "Eb4"
	},
	"9": {
	   "val": 66,
	   "note": "F#4"
	},
	"0": {
	   "val": 69,
	   "note": "A4"      
	},
	"oem_4": {
	   "val": 72,
	   "note": "C5"      
	},
	"oem_minus": {
	   "val": 75,
	   "note": "Eb5"       
	}
 }

//Define an array to hold objects that map out keys to keycodes
let specialKeys = [
	{ keyCode: 226, keyName: "oem_102" },
	{ keyCode: 188, keyName: "oem_comma" },
	{ keyCode: 190, keyName: "oem_period" },
	{ keyCode: 191, keyName: "oem_2" },
	{ keyCode: 187, keyName: "oem_plus" },
	{ keyCode: 16, keyName: "rshift" },
	{ keyCode: 13, keyName: "return" },
	{ keyCode: 220, keyName: "oem_5" },
	{ keyCode: 192, keyName: "oem_3" },
	{ keyCode: 221, keyName: "oem_6" },
	{ keyCode: 186, keyName: "oem_1" }
];

WebMidi.enable(function (err) {
	if (err) {
		console.log("WebMidi could not be enabled.", err);
	} else {
		console.log("WebMidi enabled!");
		MidiListener()
	}
}, true);

// function findInputs() {
// 	var inputs = document.createElement("SELECT")
// 	inputs.setAttribute("id", "midiInputs")
// 	document.getElementsByClassName("infoContainer")[0].appendChild(inputs)

// 	WebMidi.inputs.forEach((ip, i) => {
// 		console.log('ip.name', ip.name)
// 		var z = document.createElement("option");
// 		z.setAttribute("value", ip.name);
// 		var t = document.createTextNode(ip.name);
// 		z.appendChild(t);
// 		document.getElementById("midiInputs").appendChild(z);
// 	})

// 	return inputs
// }

function MidiListener() {
	// let midiInputs = findInputs()
	let input = WebMidi.inputs[0]
	let playedNotes = []
	let buggyNotes = ["A4"]
	const synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
	// midiInputs.addEventListener("change", function(event) {
	// 	input = WebMidi.getInputByName(midiInputs.options[midiInputs.selectedIndex].value)
	// })

	input.addListener('sysex', "all", function (e) {
		let message = ''
		let signal = e.data[e.data.length - 2]
		e.data.forEach((item, i) => {
			if (i > 0 && i < e.data.length - 2) {
				const hex = e.data[i].toString()
				message += String.fromCharCode(hex)
			}
		})

		switch (signal) {
			case 0:
				depress(message)
				break;
			case 1:
				press(message)
				break;
			case 2:
				setRegisters(message)
				break;
			case 3:
				setOctaves(message)
		}
	})

	document.addEventListener("keydown", function (event) {
		const key = getKeyPressed(event.keyCode);
		press(key);
		playNote(key);
	})
	document.addEventListener("keyup", function (event) {
		const key = getKeyPressed(event.keyCode);
		depress(key);
		stopNote(key);
	})

	function playNote(key) {
		const note = inverse_notes[key].note
		console.log('pressing note', note)
		if (!playedNotes.includes(note)) {
			console.log('playedNotes', playedNotes)
			synth.triggerAttack([note], Tone.context.currentTime)
			buggyNotes.forEach(note => {
				synth.triggerRelease([note])
				buggyNotes = buggyNotes.filter((value, index, arr) => {
					return value != note
				})
			})
			playedNotes.push(note)
		}
	}

	function stopNote(key) {
		const note = inverse_notes[key].note
		console.log('releasing note', note)
		synth.triggerRelease([note])
		playedNotes = playedNotes.filter((value, index, arr) => {
			return value != note
		})
	}

	function getKeyPressed(keyCode) {
		let keyPressed;
		for (let i = 0; i < specialKeys.length; i++) {
			if (specialKeys[i].keyCode === keyCode) {
				keyPressed = specialKeys[i].keyName;
				break;
			}
			else {
				keyPressed = String.fromCharCode(keyCode).toLowerCase();
			}
		}
		return keyPressed;
	}

	function press(key) {
		for (let i = 0; i < keys.length; i++) {
			if (keys[i].getElementsByClassName("primary") != undefined && keys[i].getElementsByClassName("primary")[0].id === key) {
				keys[i].classList.add('pressedDefault1');
				break;
			}
		}
	}

	function depress(key) {
		for (let i = 0; i < keys.length; i++) {
			if (keys[i].getElementsByClassName("primary")[0].id === key) {
				keys[i].classList.remove('pressedDefault1');
				break;
			}
		}
	}

	function setRegisters(register) {
		console.log('register changed to ', register)
		document.getElementById('registers').innerHTML = `Parallel octaves: ${register}`
	}

	function setOctaves(octave) {
		console.log('octaves changed to ', octave)
	}
}
