const mongoose =require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const BookingSchema = new mongoose.Schema ({
    name:{
        type:String,
        trim:true,
        required:true
    },
    lastName:{
        type:String,
        trim:true,
        required:true
    },
  
    birth:{
        type:String,
        trim:true,
        required:true
    },
    phone:{
        type:String,
        trim:true,

        required:true
    },
    email:{
        type:String,
        trim:true,

        required:true
    },
    adress:{
        type:String,
        trim:true,

        required:true
    },
    nbrPlace:{
        type:String,
        trim:true,
        required:true
    },
    Clas:{
        type:String,
        trim:true,
        required:true
    },
    numPasseport:{
        type:String,
        trim:true,

        required:true
    },
    Bagage:{
        type:String,
        trim:true,
        required:true
    },
    cin:{
        type:String,
        trim:true,

        required:true
    },
    
    
   
},{        timestamps:true
})
module.exports =  mongoose.model("Booking",BookingSchema)