// creating basic http server 

const http = require('http');
const { url } = require('inspector');

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


// url -> universal resource locater 
// url handing -> means understanding what user requested 

// OLD WAY 
// import url module 
// const req = "localHost:3000/api?id:10&name:aditya";
// const url = require("url");
// const myUrl = url.parse(req, true);
// console.log(myUrl.pathname);
// console.log(myUrl.query);

// modern way  
// const myUrl = new URL("http://localhost:3000/api?id=10&name=aditya");

// console.log(myUrl.pathname);        // /api
// console.log(myUrl.searchParams.get("id"));   // 10
// console.log(myUrl.searchParams.get("name")); // aditya


// extract information from server request 
http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://${req.headers.host}`);

  console.log(myUrl.pathname);
  console.log(Object.fromEntries(myUrl.searchParams));

  res.end("Done");
}).listen(4000);



// htttp method 
//  GET -> Fetch something , want to read something not modify anything [library system -> localhost/api/get-books-by-author]
// POST -> you need to create something new [createProduct -> json body / form-data]
// PUT -> updateProductYName -> or id ,(json or form-data)
// DELETE -> to delete  something 