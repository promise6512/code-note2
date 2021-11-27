require('./tools/conn_mongo')
const Student = require('./models/students');
//import Student from './models/students'
Student.findOne({},(err,doc)=>{
    console.log(doc)
})