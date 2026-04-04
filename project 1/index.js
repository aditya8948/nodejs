const express = recquire("express");

const app = express();
const port = 8000;

app.listen(port , ()=> console.log(`server runing at port ${port}`));