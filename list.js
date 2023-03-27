const fs = require("fs");

// let files = fs.readdirSync("./", function (err, files) {
//     if (err) {
//         throw err;
//     }

//     console.log(files);
// });

// console.log(files);

/*
*/

// fs.readdir("./", function (err, files) {
//     if (err) {
//         throw err;
//     }

//     console.log(files);
// });


// console.log("reading files...");


// let readmeFile = fs.readFileSync("./README.md","UTF-8");

// console.log(readmeFile);




fs.readFile("./README.md", "UTF-8", (err, file) => {
    if (err) {
        throw err;
    }
    console.log(file);
});

console.log("reading file...");