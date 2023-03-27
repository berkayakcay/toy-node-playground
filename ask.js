// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const questions = [
//     "What is your name?",
//     "What is your suraname?"
// ];


// function collectAnswers(questions, done) {
//     const answers = [];

//     const questionAnswered = (answer) => {
//         answers.push(answer.trim());
//         if (answers.length < questions.length) {
//             rl.question(
//                 questions[answers.length],
//                 questionAnswered
//             );
//         } else {
//             return done(answers);
//         }
//     };

//     rl.question(questions[0], questionAnswered);
// }

// collectAnswers(questions, (answers) => {
//     console.log("Thank you for your answers");
//     console.log(answers);
//     process.exit();
// });



/*
*/

const collectAnswers = require("./lib/collectAnswers")

const questions = [
    "What is your name?",
    "What is your suraname?"
];

const answerEvents = collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    process.exit();
});

answerEvents.on("answer", (answer) => {
    console.log(`Answer is ${answer}`);
});