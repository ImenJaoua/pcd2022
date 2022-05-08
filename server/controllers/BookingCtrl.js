const Booking = require('../models/booking')
const bookingCtrl = {
    createBooking: async(req, res) =>{
        try {
    
            const{name,lastName, birth,phone,email,adress,nbrPlace,Clas,numPasseport,Bagage,cin}=req.body
             if(!name || !lastName || !birth || !phone || !email || !adress || !nbrPlace || !Clas || !numPasseport || !Bagage || !cin){
                  return res.status(422).json({error:"please add  all the fields!"}) 
                 
             }
                      const newBooking=new Booking({
                        
                        name,
                        lastName, 
                        birth,
                        phone,
                        email,
                        adress,
                        nbrPlace,
                        Clas,
                        numPasseport,
                        Bagage,
                        cin
                        
                        
                     })
                    await newBooking.save()
                     
                     res.json({message:"saved successfuly"})
                     
                    }catch(err){
                        return res.status(500).json({msg: err.message})
                    }
         
                 },
    getBooking: async(req, res) =>{
        try {
            const bookings = await Booking.find()
            res.json(bookings)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
   
               
    deleteBooking: async(req, res) =>{
        try {
           
            await Booking.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Booking"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateBooking: async(req, res) =>{
        try {
            const{name,lastName, birth,phone,email,address,nbrPlace,Class,numPasseport,Bagage,cin}=req.body

            await Booking.findOneAndUpdate({_id: req.params.id}, {
                name,lastName, birth,phone,email,address,nbrPlace,Class,numPasseport,Bagage,cin
            })

            res.json({msg: "Updated a booking"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = bookingCtrl