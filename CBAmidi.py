import pythoncom, pyHook
import json
import rtmidi
import os
import sys

noteLayouts = [pos_json for pos_json in os.listdir('.') if pos_json.endswith('.json')]
midiout = rtmidi.MidiOut()
available_ports = midiout.get_ports()

if available_ports:
    print("""Welcome to the KeyboardCBA MIDI emulator, which turns your computer keyboard into a chromatic button accordion emitting MIDI events instead of keystrokes. You can use the output with any MIDI supporting software, such as music notation packages (Musescore) or DAWs.
    - Toggle between MIDI and keyboard output using the "HOME" button;
    - Use the "UP" and "DOWN" keys to move to a higher or lower octave;
    - F1-F5 keys are used to play multiple octaves at the same time (cf. registers);
    - Stop the process by pressing "ESCAPE" before closing your terminal;
    - Numpad keys stay available, as well as keyboard shortcuts using the CTRL key;
    - This is a test version. In rare cases notes may keep playing (e.g. changing octaves while a key is still pressed). All signals are killed when the 'END' button is pressed.
    - You may need the loopMIDI application (https://www.tobias-erichsen.de/software/loopmidi.html) to open virtual MIDI ports on your computer (MS GS Wavetable Synth has too much latency);
    - The default key mappings are based on a Belgian French (AZERTY) keyboard. You can make your own layout by copying and adapting one of the existing mapping files (e.g. do_1_AZERTY_w.json) into the desired layout.
    - More info on https://github.com/JWerbrouck/CBAmidi. Any suggestions are welcome :)\n""")

    print('The following MIDI output ports are available:') 
    while True:
        for i in range(len(available_ports)): 
            print('   ', i+1, available_ports[i][:-2])
        choice = input("\nPlease select your MIDI output port by entering its number: ")
        if choice.isdigit() == False or int(choice) < 0 or int(choice) > len(available_ports):
            print("Invalid input. Please enter a number between 1 and", len(available_ports), ':\n')
        else:
            midiout.open_port(int(choice)-1)
            break
else:
    print('No MIDI output ports found')

while True:
    if len(noteLayouts) > 1:
        print('The following keyboard mappings are available:') 
        for i in range(len(noteLayouts)): 
            print('   ', i+1, noteLayouts[i][:-5])
        layout = input("\nPlease select your preferred keyboard mapping by entering its number: ")
        if layout.isdigit() == False or int(layout) < 1 or int(layout) > len(noteLayouts):
            print("Invalid input. Please enter a number between 1 and", len(noteLayouts), ':\n')
        else:
            notes = json.load(open(noteLayouts[int(layout)-1]))
            break
    else: 
        notes = json.load(open(noteLayouts[0]))
    break


# initialise global midi variable: false = normal keyboard, true = midi keyboard (toggle with 'home')
midi = True
currentNotes = ['return']
sustainedNotes = []
sustaining = False

allowedKeys = ['back', 'numpad0','numpad1', 'numpad2', 'numpad3', 'numpad4', 'numpad5', 'numpad6', 'numpad7', 'numpad8', 'numpad9', 'numlock', 'volume_up', 'volume_down', 'multiply', 'divide', 'numlock', 'subtract', 'add']
octave = 0
registers = 5
control = False

def setSysex(key, state):
    sysex = bytearray()
    sysex.extend(map(ord, key))
    sysex = list(sysex)     
    sysex.insert(0, 0xF0)      
    sysex.append(state)      
    sysex.append(0xF7)
    return sysex

def OnKeyDown(event):
    global midi, octave, registers, sustainedNotes, sustaining, control
    key = event.Key.lower()
    # toggle between keyboard and midi with the home button
    if key == 'home':
        midi = not midi
        if midi:
            print('Midi on')
        else:
            print('Midi off')
        return False

    # terminate the process with escape
    if key == 'escape': 
        hm.UnhookKeyboard()
        allNotesOff()
        sys.exit()

    # pass all keys in allowedKeys (they will be typed)    
    if key in allowedKeys:
        return True

    if key == 'end':
        allNotesOff()
        return True

    # do the midi stuff    
    if midi and control == False:
        if key == "space":
            sustainedNotes = currentNotes
            sustaining = True
        if key[1:] == 'control':
            control = True
            return True
        # play the note, keeping the current octave and the registers (i) in mind
        if key in notes and key not in currentNotes:
            sysex = setSysex(key, 1)
            midiout.send_message(sysex)
            
            for i in range(0, registers):
                noteDecimal = notes[key]["val"] + 12*octave + 12*i
                note_on = [0x90, noteDecimal, 60]
                midiout.send_message(note_on)
            currentNotes.append(key)

            if sustaining == True and key not in sustainedNotes:
                sustainedNotes.append(key)

        # regulate the registers with the f keys (1 to 5)
        if key in ['f1', 'f2', 'f3', 'f4', 'f5']:
            registers = int(key[-1])
            print('Register octaves changed to', key[-1])


        # raise the octave by pushing the 'up' arrow key
        elif key == 'up' and octave < 5:
            octave = octave + 1
            print('Set to higher octave')

        # lower the octave by pushing the 'down' arrow key
        elif key == 'down' and octave > -2:
            octave = octave - 1
            print('Set to lower octave')
        return False
    else:
        return True

def OnKeyUp(event):
    global midi, octave, registers, sustainedNotes, sustaining, control
    key = event.Key.lower()
    if key[1:] == 'control':
        control = False
        return True

    if midi and control == False:
        if key in notes:
            if sustaining == True:
                pass
            else:
                sysex = setSysex(key, 0)
                midiout.send_message(sysex)
                for i in range(0, registers):
                    noteDecimal = notes[key]["val"] + 12*octave + 12*i
                    note_off = [0x80, noteDecimal, 60]
                    midiout.send_message(note_off)
                currentNotes.remove(key)

        # sustaining 'pedal': releases all notes on space => up
        # notes that are still being played should not be released
        if key == "space":
            sustaining = False
            for key in sustainedNotes:
                if key not in currentNotes:
                    for i in range(0, registers):
                        noteDecimal = notes[key]["val"] + 12*octave + 12*i
                        note_off = [0x80, noteDecimal, 127]
                        midiout.send_message(note_off)

        sustainedNotes = []

        return False
    else:
        return True

def allNotesOff():
    for i in range(0,127):
        note_off = [0x80, i, 127]
        midiout.send_message(note_off)


hm = pyHook.HookManager()
hm.KeyDown = OnKeyDown
hm.KeyUp = OnKeyUp
hm.HookKeyboard()
print("Midi on")
pythoncom.PumpMessages()