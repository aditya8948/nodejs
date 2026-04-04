/*
WHY WE NEED EXPRESS 

👉 Node.js (http module) is low-level
- we have to manually handle:
  ❌ routing (if/else)
  ❌ headers
  ❌ parsing request
  ❌ sending response

👉 Express.js makes it EASY:
  ✅ simple routing (app.get, app.post)
  ✅ cleaner code
  ✅ middleware support
  ✅ faster development

*/


/*
WITHOUT EXPRESS (HTTP MODULE) 
*/

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("hello from home page");
    } 
    else if (req.url === "/about" && req.method === "GET") {
        res.end("hello from about page");
    } 
    else {
        res.end("404 not found");
    }
});

server.listen(3000);


/*
================ WITH EXPRESS 

*/

const express = require('express');

const app = express();

// route for home page
app.get("/", (req, res) => {
    return res.send("hello from home page");
});

// route for about page
app.get("/about", (req, res) => {
    return res.send("hello from about page");
});

// start server
app.listen(7000, () => console.log("server started"));



/*
KEY DIFFERENCE

HTTP module:
- manual routing
- more code
- harder to scale

Express:
- simple routing (app.get)
- less code
- easy to build APIs

*/