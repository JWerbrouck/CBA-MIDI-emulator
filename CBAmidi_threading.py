import pythoncom, pyHook
from flask import Flask, render_template
import threading
import sys

app = Flask(__name__)
looping = True

def pump_messages():
    while looping:
        pythoncom.PumpMessages()

@app.route('/')
def render():
    return render_template('index.html')

def OnKeyDown(event):
    global looping
    key = event.Key.lower()
    if key == 'escape': 
        hm.UnhookKeyboard()
        looping = False
        sys.exit()

    print('key down: ', key)
    return True

def OnKeyUp(event):
    key = event.Key.lower()
    print('key up: ', key)
    return True

hm = pyHook.HookManager()
hm.KeyDown = OnKeyDown
hm.KeyUp = OnKeyUp
hm.HookKeyboard()

if __name__ == "__main__":
    p = threading.Thread(target=pump_messages, args=(), daemon=True)
    p.start()
    print('started thread')
    app.run(debug=True, use_reloader=False)
    p.join()

