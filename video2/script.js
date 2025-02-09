
//const fs = require("node:fs");
// fs.writeFile("hello.txt","Hello I am Aniket.",function (err) {
//     if(err) console.log(err);
//     else console.log("Done")
// 
//})
// fs.appendFile("hello.txt", "My title is Ghosh.", function (err) {
//   if (err) console.log(err);
//   else console.log("Done");
// });

// fs.rename("hello.txt", "hi.txt", (err) => {
//   if (err) throw err;
//   console.log("File renamed.");
// });

// fs.copyFile("hi.txt", "copy.txt", (err) => {
//   if (err) throw err;
//   console.log("File copied.");
// });

// fs.unlink("copy.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted.");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, Node.js Server!");
// });

// server.listen(3000, "localhost", () => {
//   console.log("Server running at http://localhost:3000/");
// });

const fs = require("node:fs");

fs.readFile("hi.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
