require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const fileUpload = require('express-fileupload')
const PORT=5000

const cors = require('cors')

const cookieParser = require('cookie-parser')

const URI = process.env.MONGODB_URL

mongoose.connect(URI,{
    
    useNewUrlParser: true,
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on ('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on ('error',(err)=>{
    console.log("error connecting",err)
})

//require('./models/passenger')
//require('./models/flight')
//require('./models/booking')
app.use( express.json())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))
app.use(cookieParser())
app.use('/user',require('./routes/authP'))
//app.use(require('./routes/Booking'))
app.use('/api',require('./routes/Flight'))
app.use('/api',require('./routes/upload'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/paymentRouter'))

app.listen(PORT,()=>{
    console.log("serveur is running on port ",PORT)
})