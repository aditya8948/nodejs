// creating asic http server 

const http = require('http');
const { json } = require('stream/consumers');

// const server = http.createServer((req , res) => {
//     console.log(req); // this will have information aout user , like ip , time etc 
//     res.end("hello from serevr ");
// });

// server.listen(3000, ()=> { console.log("server is running ")});


// !routing (deciding what to respond based on url )

const server = http.createServer((req , res) => {
    if(req.url === '/') res.end("homePage");
    else if(req.url === '/about') res.end("about");
    else if(req.url === '/api'){
        // send json content 
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
            name: "aditya",
            age: 22,
            date : Date.now()
        }));
    }
    else res.end("404 not found ");
})

server.listen(3000 , () => console.log("server started"));

