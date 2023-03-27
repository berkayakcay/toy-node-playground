// const path = require("path")

// let hello = "Hello world from Node.JS";

// console.log(hello)

// let justNode = hello.slice(12);
// console.log(`Who let the ${justNode}`)

// console.log(__dirname);
// console.log(__filename);


// console.log(`The file name is ${path.basename(__filename)}`)


// for (let key in global) {
//     console.log(key);
// }


// console.log(process.argv);


// function grap(flag) {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag];
// }

// let user = grap("--user");

// console.log(user);



// const questions = [
//     "What is your name?",
//     "What is your sur name?",
// ];


// const answers = [];

// function ask(i = 0) {
//     process.stdout.write(`\n\n\n ${questions[i]}`);
//     process.stdout.write(` > `)
// }

// ask();

// process.stdin.on("data", function data(data) {
//     answers.push(data.toString().trim());

//     if (answers.length < questions.length) {
//         ask(answers.length);
//     } else {
//         process.exit();
//     }
// });


// process.on("exit", function (params) {
//     process.stdout.write("\n\n\n\n")
//     process.stdout.write(`Go ${answers[0]}  ${answers[1]}`)
// })


/*
*/
// const waitTime = 3000;

// console.log(`setting a ${waitTime / 1000} second delay`);

// const timesFinished = () => {
//     clearInterval(interval)
//     console.log("done");
// }

// setTimeout(timesFinished, waitTime);



// const waitInterval = 500;

// let currentTime = 0;

// const incTime = () => {
//     currentTime += waitInterval;
//     const p = Math.floor((currentTime / waitTime) * 100);
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`waiting.... ${p}`);
// }

// const interval = setInterval(incTime, waitInterval);


/*
*/

// const path = require("path");
// const util = require("util")
// const v8 = require("v8")
// console.log(path.basename(__filename));

// const dirUploads = path.join(
//     __dirname,
//     "wwww",
//     "files",
//     "uploads"
// );


// console.log(dirUploads);

// util.log(path.basename(__filename));

// util.log(v8.getHeapCodeStatistics());


/*
*/


