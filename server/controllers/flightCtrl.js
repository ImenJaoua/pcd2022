const Flight = require('../models/flight')

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}
const flightCtrl = {

createFlight: async(req, res) =>{
    try {

        const{Destination,DatOp, DepatureTime,ArrivalTime,DepatureAirport,ArrivalAirport,Status,AC,Airline,Capacity,Description,Price,images,category,prediction}=req.body
         if(!Destination || !DatOp || !DepatureTime || !ArrivalTime || !DepatureAirport || !ArrivalAirport || !Status || !AC || !Airline || !Capacity || !Description || !Price || !category){
              return res.status(422).json({error:"please add  all the fields!"}) 
             
         }
         if(!images) return res.status(400).json({msg:"No image upload"})
                  const newFlight=new Flight({
                    
                    Destination:Destination.toLowerCase(),
                    DatOp, 
                    DepatureTime,
                    ArrivalTime,
                    DepatureAirport,
                    ArrivalAirport,
                    Status,
                    AC,
                    Airline,
                    Capacity,
                    Description,
                    Price,
                    images,
                    category,
                    prediction
                    
                 })
                await newFlight.save()
                 
                 res.json({message:"saved successfuly"})
                 
                }catch(err){
                    return res.status(500).json({msg: err.message})
                }
     
             },
    
             getFlight: async(req, res) =>{
                try {
    
                const features = new APIfeatures(Flight.find(), req.query)
                .filtering().sorting().paginating()
    
                const flights = await features.query
    
                res.json({
                    status: 'success',
                    result: flights.length,
                    flights: flights
                })
            }
            catch (err) {
                return res.status(500).json({msg: err.message})
            }
            },
            deleteFlight: async(req, res) =>{
                try {
                    await Flight.findByIdAndDelete(req.params.id)
                    res.json({msg: "Deleted a Flight"})
                } catch (err) {
                    return res.status(500).json({msg: err.message})
                }
            },
            updateFlight: async(req, res) =>{
                try {
                    const{Destination,DatOp, DepatureTime,ArrivalTime,DepatureAirport,ArrivalAirport,Status,AC,Airline,Capacity,Price,images,category,prediction}=req.body
        
                    await Flight.findOneAndUpdate({_id: req.params.id}, {
                        Destination:Destination.toLowerCase(),DatOp, DepatureTime,ArrivalTime,DepatureAirport,ArrivalAirport,Status,AC,Airline,Capacity,Price,images,category,prediction
                    })
        
                    res.json({msg: "Updated a Flight"})
                } catch (err) {
                    return res.status(500).json({msg: err.message})
                }
            }
        }
        module.exports = flightCtrl


     
