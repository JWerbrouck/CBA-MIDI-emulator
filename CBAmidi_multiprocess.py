import pythoncom, pyHook
from flask import Flask, render_template
from multiprocessing import Process, Value
import sys

app = Flask(__name__)
looping = True

def pump_messages():
    while looping:
        pythoncom.PumpMessages()

@app.route('/')
def render(name=None):
    return render_template('index.html')

def OnKeyDown(event):
    global looping
    key = event.Key.lower()
    if key == 'escape':
        looping = False
        hm.UnhookKeyboard()
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
    p = Process(target=pump_messages, args=())
    p.start()
    print('started process')
    app.run(debug=True, use_reloader=False)
    p.join()

