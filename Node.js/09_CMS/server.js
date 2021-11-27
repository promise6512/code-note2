const express = require("express");
const router = require("./router")
const path = require("path")
const app = express();

app.use(express.static('./public'))
//app.use(express.static("/public"))

// view engine setup
app.engine('art', require('express-art-template'));
app.set('views', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

app.use('/',router)

app.listen(8080,()=>{
  console.log("localhost:8080")
})


