const events = require('events')

const eventEmitter = new events.EventEmitter()


const testEventListener = (data) => {
    console.log(data)
}

const test2EventListener = (data) => {
    console.log(data)
}

eventEmitter.addListener('test-event', testEventListener)
eventEmitter.addListener('test2-event', test2EventListener)


const forLoop = () => {
    eventEmitter.emit('test-event', Date.now())
    for (let index = 0; index < 100; index++) {

    }

    eventEmitter.emit('test2-event', Date.now())
}

eventEmitter.emit('test3-event', Date.now())

eventEmitter.setMaxListeners(2)
//eventEmitter.removeAllListeners()
//eventEmitter.removeListener('test2-event')

forLoop()