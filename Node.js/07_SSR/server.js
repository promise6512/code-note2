const express = require("express");
const router = require("./router")

const app = express();

app.use('/',router)

app.listen(8080,()=>{
  console.log("localhost:8080")
})


