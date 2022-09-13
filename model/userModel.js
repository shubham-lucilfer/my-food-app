const mongoose = require("mongoose")
const { Schema } = mongoose

let dbLink = "mongodb+srv://dbUser:jwtbaoR713I14Ya3@cluster0.kcjxabm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbLink).then(() => {
    console.log("connected")
}).catch((error) => {
    console.log("error", error)
})



//how to create a scheme -> only entries written will be added to the db

mongoose.connect(dbLink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})


//how to create a schema -> only entries written will be added to your db no one else.

let userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is not given. Please provide a name"]
    },
    password:{
        type:String,
        required:[true,"Password is missing"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Confirm Password is Missing"],
        //custom validator
        validate:{
            validator:function(){
                return this.password == this.confirmPassword;
            },
            //error message
            message:"Password mismatch"
        }
    },
    email:{
        type:String,
        required:[true,'email is missing'],
        unique:true
    },
    phoneNumber:{
        type:String,
        minLength:[10,"less than 10 numbers"],
        maxLength:[10,"more than 10 numbers"]
    },
    pic:{
        type:String,
        default:"logo2.png"
    },
    otp:{
        type:String
    },
    otpExpiry:{
        type:Date
    },
    address:{
        type:String
    }
})

const userModel = mongoose.model('FoodUserModel',userSchema);

module.exports = userModel;