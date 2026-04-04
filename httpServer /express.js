/*
Why people usually pick Express

When you use Node's built-in `http` module, you have to handle a lot of
the basics yourself, like routes, request handling, and responses.

Express takes care of that boilerplate and gives you a cleaner way to
build routes and organize server code.
*/


/*
Using only the `http` module
*/

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end("Welcome to the home page.");
    } 
    else if (req.url === "/about" && req.method === "GET") {
        res.end("This is the about page.");
    } 
    else {
        res.end("Page not found.");
    }
});

server.listen(3000);


/*
The same idea with Express
*/

const express = require('express');

const app = express();

// Home route
app.get("/", (req, res) => {
    return res.send("Welcome to the home page.");
});

// About route
app.get("/about", (req, res) => {
    return res.send("This is the about page.");
});

// Start the server
app.listen(7000, () => console.log("Server is running on port 7000"));



/*
Main difference

With `http`, you usually write more setup code for simple things.
With Express, routing is easier to read and the app is simpler to expand later.
*/
