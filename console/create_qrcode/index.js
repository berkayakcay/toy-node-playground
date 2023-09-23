const qrcode = require('qrcode-terminal')
const readline = require('readline')
const process = require('process')


const readLineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readLineInterface.question('Enter the QR Code value...\r\n', (answer) => {
    qrcode.generate(answer, { small: true })
    readLineInterface.close()
})