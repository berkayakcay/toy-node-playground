const path = require("path");

console.log(
  path.extname("C:\\Development\\toy-node-playground\\modules\\pathindex.js")
);

console.log(
  path.basename("C:\\Development\\toy-node-playground\\modules\\pathindex.js")
);

console.log(
  path.dirname("C:\\Development\\toy-node-playground\\modules\\pathindex.js")
);

const pathFormat = path.format({
  root: "/test/test/",
  name: "file",
  ext: ".txt",
});

console.log(pathFormat);

console.log(path.join("/abc", "test", "sample/folder", "file"));

console.log(path.parse('C:\\Development\\toy-node-playground\\modules\\pathindex.js'))


console.log(path.resolve('/a', 'b', 'c'))

console.log(path.resolve('/a', '/b', 'c'))

console.log(path.resolve('/a', '/b', '/c'))


