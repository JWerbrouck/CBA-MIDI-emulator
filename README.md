# CBA-MIDI-emulator
The KeyboardCBA MIDI emulator turns your computer keyboard into a chromatic button accordion, emitting MIDI events instead of keystrokes. You can use the output with any MIDI supporting software, such as music notation packages (Musescore) or DAWs.
* Toggle between MIDI and keyboard output using the "HOME" button;
* Use the "UP" and "DOWN" keys to move to a higher or lower octave;
* F1-F5 keys are used to play multiple octaves at the same time (cf. registers);
* Stop the process by pressing "ESCAPE" before closing your terminal;
* Numpad keys stay available, as well as keyboard shortcuts using the CTRL key;
* You may need the [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html) (Tobias Erichsen) application to open virtual MIDI ports on your computer (MS GS Wavetable Synth has too much latency);
* The default key mappings are based on a Belgian French (AZERTY) keyboard. You can make your own layout by copying and adapting one of the existing mapping files (e.g. do_1_AZERTY_w.json) into the desired layout.
* This is a test version: bugs will be present. In rare cases notes may keep playing (e.g. changing octaves while a key is still pressed). All signals are killed when the 'END' button is pressed.

WOW the threshold for learning accordion was never lower => everyone has a computer keyboard #everyoneAccordion  
& You don't need to buy one of those €3000 MIDI accordions anymore! 

## To do
* Make a GUI
* Add more MIDI features
* ... make the ultimate 'Accordion Hero' web app 

Any suggestions are welcome, as well as keymaps for other layouts (currently only C on the first row on AZERTY keyboard)
