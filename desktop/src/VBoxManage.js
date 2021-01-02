function startVM (name) {
    return `VBoxManage startvm ${name}`
}

function saveStateAndClose (name) {
    return `VBoxManage controlvm ${name} savestate`
}

module.exports = {
    startVM,
    saveStateAndClose
}