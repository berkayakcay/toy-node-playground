const readLine = require('readline')
const fs = require('fs')
const c = require('ansi-colors')

const fileName = process.argv[2]

const colors = ['red', 'blue', 'yellow', 'green', 'cyan']


const readFileLineByLine = async () => {
    const fileStream = fs.createReadStream(fileName)
    const readLineInterface = readLine.createInterface({
        input: fileStream
    })


    for await (const line of readLineInterface) {
        const randomNumber = Math.floor(Math.random() * 4)
        const randomColor = colors[randomNumber]
        console.log(c[randomColor](line))
    }
}


readFileLineByLine()