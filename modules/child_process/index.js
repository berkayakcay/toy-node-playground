const { spawn, exec } = require('child_process')

const myEcho = spawn('cmd.exe', ['/c' , 'echo selam'])

myEcho.stdout.on('data', (data) => {
    console.log(data.toString())
})

const notepad = exec('start notepad')