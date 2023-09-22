// const { inc, dec, getCount } = require("./myModule");

// inc();
// inc();
// inc();
// inc();
// inc();

// console.log(`the count is ${getCount()}`);


/*
*/

const events = require("events")


let emmitter = new events.EventEmitter();

emmitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
})

emmitter.emit("customEvent", "Hello world", "Computer")
emmitter.emit("customEvent", "That's pretty cool", "Berkay")


process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if (input === "exit") {
        emmitter.emit("customEvent", "Goodbye", "process")
        process.exit()
    } else {
        emmitter.emit("customEvent",
            data.toString().trim(),
            "terminal")
    }
})