# CBA-MIDI-emulator
A hobby project made during the (first?) 2020 lockdown, the KeyboardCBA MIDI emulator turns your computer keyboard into a chromatic button accordion, emitting MIDI events instead of keystrokes (did you ever notice the similarities?). You can use the output with any MIDI supporting software, such as music notation packages (Musescore) or DAWs. 

## Installation
A ZIP folder is available in the [Releases](https://github.com/JWerbrouck/CBA-MIDI-emulator/releases) section. Just unzip it and run the CBAmidi.exe file. A terminal will open where user input can be given. A UI might be added in the future, an index.html document that mirrors the input is available in the 'templates' folder, but it's  not in the release yet. The HTML document should be opened in Chrome, since that is currently the only browser supporting the web MIDI spec.

## Usage
* Toggle between MIDI and keyboard output using the "HOME" button;
* Use the "UP" and "DOWN" keys to move to a higher or lower octave;
* F1-F5 keys are used to play multiple octaves at the same time (cf. registers);
* Stop the process by pressing "ESCAPE" before closing your terminal;
* Numpad keys stay available, as well as keyboard shortcuts using the CTRL key;
* You may need the [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html) (Tobias Erichsen) application to open virtual MIDI ports on your computer (MS GS Wavetable Synth has too much latency to be of good use);
* The default key mappings are based on a Belgian French (AZERTY) keyboard. You can make your own layout by copying and adapting one of the existing mapping files (e.g. do_1_AZERTY_w.json) into the desired layout.
* This is a test version: bugs will be present. In rare cases notes may keep playing (e.g. changing octaves while a key is still pressed). All signals are killed when the 'END' button is pressed.

WOW the threshold for learning accordion was never lower #everyoneAccordion  

## Some 'notes'
Be aware this is a prototype, provided 'as-is', and in rare situations the hook will remain active after shutting down the application the wrong way, making your keyboard act weird. Restarting your computer is currently the only option in that case.

The keyboard input is blocked, since it may overrule the keys when used in DAWs or music notation software. If you just want to play around, a web app requiring no installations is on its way.

Also, there are no keyloggers hidden in the code ;)


## Keyboards
### C on first row - AZERTY (Belgian)
Only one keyboard has been mapped: C on the first row, mapped to an AZERTY keyboard. Start playing at the first row with characters (forget about the first row (ctrl, alt, space etc.)):

* w = C
* s = C#
* e = D
* ...

You are welcome to make your own mapping, so it can be offered as a choice to other users and integrated in a GUI.

## To do (planned for the second lockdown period)
* Make a GUI
* Add some more MIDI features
* ... make the ultimate 'Accordion Hero' web app

Any suggestions are welcome, as well as keymaps for other layouts (currently only C on the first row on AZERTY keyboard)
