const mongoose = require('mongoose')
const {Schema} = mongoose;
const stuSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:'female'
    },
    address:String
})
const StuModel = mongoose.model('students',stuSchema)
module.exports = StuModel;
//export default StuModel