const timers = require('timers')


timers.setInterval(() => {
    console.log(Date.now())
    console.log(new Date())
}, 1000)


timers.setTimeout(() => {
    console.log('wait 5 seconds')
},)


console.log('first')
timers.setImmediate(() => {
    console.log('third')
})
console.log('second')