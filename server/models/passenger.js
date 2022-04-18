const mongoose =require('mongoose')
const PassengerSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true,
        trim: true
    },
    userName:{
        type:String,
        required:true,
        trim: true

    },

    email:{
        type:String,
        required:true,
        trim: true

    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:String,
        required:true,
        trim: true

    },
    role: {
        type: Number,
        default: 0,
    },
    cart:{
        type:Array,
        default:[],

    },
    
    // nationality:{
    //     type:String,
    //     required:true

    // },
    // PasseportNumber:{
    //     type:String,
    //     required:true

    // },
    // Proffesion:{
    //     type:String,
    //     required:true

    // },
    // phone:{
    //     type:String,
    //     required:true
    // }

})
module.exports = mongoose.model("Passenger",PassengerSchema)
