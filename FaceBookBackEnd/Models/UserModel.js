const mongoose = require ("mongoose")
const user = mongoose.Schema ({
    firstName : { type:String , required:true},
    //LastName : { type:String , required:true},
    password : { type:String , required:true},
    email : { type:String , required:true, unique: true},
   /* birthDate : { type:Date , required:false},
    gendre : { type:String , required:false},
    phoneNumber : { type:Number , required:tfalse},*/

})
module.exports = mongoose.model('user', user)