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
	// midiInputs.addEventListener("change", function(event) {
	// 	input = WebMidi.getInputByName(midiInputs.options[midiInputs.selectedIndex].value)
	// })

	input.addListener('sysex', "all", function(e) {
		let key = ''
		let signal = e.data[e.data.length-2]
		e.data.forEach((item, i) => {
			if (i>0 && i<e.data.length-2) {
				const hex = e.data[i].toString()
				key += String.fromCharCode(hex)
			}
		})
		if (signal) {
			press(key)
		} else {
			depress(key)
		}
	})

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
}
