const path = require('path');
const http = require('http');
const fs = require('fs');
var os = require("os");

const fsread = fs.readFileSync("read.txt", "utf8");
const fsreread = fs.writeFileSync("read.txt", "hello Yaroslav!");
const fsappread = fs.appendFileSync("read.txt", "hello World!");



console.log(__filename); //all path
console.log(path.basename(__filename)); //all file name
console.log(path.extname(__filename)); //.js
console.log(path.dirname(__filename));//directory path
console.log(path.parse(__filename));//json object
console.log(path.join(__dirname, "test", "second.html"));
console.log(path.resolve(__dirname, "./test", "second.html"));
console.log(path.normalize(__filename));
console.log(os.endianness());
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.freemem());






const server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.writeHead(200, {
           "Content-type":"text/html"
        });
        res.end("<h1 style='text-align: center'>Hello from server</h1>");
    }
    if(req.url == "/users") {
        res.writeHead(200, {
            "Content-type":"text/json"
        });
        const users = [
            {name: "Yaroslav", age: 19},
            {name: "Vitaly", age: 19}
        ];
        res.end(JSON.stringify(users))
    }

});
server.listen(3000, () => {
   console.log("Server running...........");
});
