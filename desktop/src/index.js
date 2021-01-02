const {exec} = require("child_process")
const {startVM, saveStateAndClose} = require('./VBoxManage')
const child = exec('VBoxManage guestproperty get midi_clone "/VirtualBox/GuestInfo/Net/0/V4/IP"')

child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
  });

  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
  });