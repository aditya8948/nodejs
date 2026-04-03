// import file system module
const fs = require("fs");


// creates test.txt (or overwrites if already exists)
fs.writeFile('./test.txt', "hey there", (err) => {
    if (err) console.log(err); 
    else console.log("file created successfully");
});


// reads content of contact.txt (must exist)
fs.readFile("./contact.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log("file data:", data);
});

// adds new content to test.txt (creates if not exists)
fs.appendFile("./test.txt", "\nnew file added", (err) => {
    if (err) console.log(err);
    else console.log("content appended");
});

// deletes test.txt (make sure file exists)
fs.unlink("./test.txt", (err) => {
    if (err) console.log(err);
    else console.log("file deleted");
});

//  copies test.txt to copy.txt (source file must exist)
fs.copyFile("./test.txt", "./copy.txt", (err) => {
    if (err) console.log(err);
    else console.log("file copied");
});


// ================== IMPORTANT NOTES ==================
/*
- All operations are async (run in background)
- Execution order may not be same as written
- Always handle errors to debug issues
- Paths are relative to current folder (./ means current directory)
*/