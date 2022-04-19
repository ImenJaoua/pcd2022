const mongoose =require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const FlightSchema = new mongoose.Schema ({
    Destination:{
        type:String,
        trim:true,

        required:true
    },
  
    DepatureTime:{
        type:String,
        trim:true,
        required:true
    },
    ArrivalTime:{
        type:String,
        trim:true,

        required:true
    },
    DepatureAirport:{
        type:String,
        trim:true,

        required:true
    },
    ArrivalAirport:{
        type:String,
        trim:true,

        required:true
    },
    Airline:{
        type:String,
        trim:true,

        required:true
    },
    Capacity:{
        type:String,
        trim:true,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        trim:true,

        required:true
    },
    images:{
        type:Object,
        required:true
    },
    checked:{
        type:Boolean,
        default:false
    },
    category:{
        type: String,
        required: true
    },
   /* postedBy:{
        type:ObjectId,
        ref:"Admin"
     },
     bookedBy:{
        type:ObjectId,
        ref:"Passenger"
     }*/
    
   
})
module.exports =  mongoose.model("Flight",FlightSchema)