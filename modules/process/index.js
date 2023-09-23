const process = require('process')
const child_process = require('child_process')



process.on('beforeExit', () => {
    console.log('beforeExit')
})


process.on('exit', () => {
    console.log('exit')
})


process.on('SIGINT', () => {
    console.log('SIGINT')
    process.exit()
})


console.log(process.arch)
console.log(process.argv)
console.log(process.platform)
console.log(process.pid)
console.log(process.cpuUsage())
console.log(process.title)
console.log(process.version)
console.log(process.env)


child_process.exec('tasklist', (err, stdout, stderr) => {
    console.log(stdout)
}
)


