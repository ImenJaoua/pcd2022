
/*import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../GlobalState'
import './CreateFlight.css'
import { useHistory, useParams } from 'react-router-dom'

const initialState = {
    Destination: '',
    DepatureTime:'',
    ArrivalTime:'',
    DepatureAirport:'',
    ArrivalAirport:'',
    Airline:'',
    Capacity: '',
    Description: '',
    Price: ''

}

function CreateFlight() {
    const state = useContext(GlobalState)
    const [flight, setFlight] = useState(initialState)
    // const [categories] = state.categoriesAPI.categories
     const [images, setImages] = useState(false)
    //const [loading, setLoading] = useState(false)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()

    const [flights] = state.flightAPI.flights
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.flightAPI.callback

    useEffect(() => {
      
            setFlight(initialState)
            setImages(false)
        
    }, [flights])

     const handleUpload = async e =>{
         e.preventDefault()
         try {
             if(!isAdmin) return alert("You're not an admin")
             const file = e.target.files[0]
             
             if(!file) return alert("File not exist.")
 
             if(file.size > 1024 * 1024) // 1mb
                 return alert("Size too large!")
 
             if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                 return alert("File format is incorrect.")
 
             let formData = new FormData()
             formData.append('file', file)
 
             setLoading(true)
             const res = await axios.post('/api/upload', formData, {
                 headers: {'content-type': 'multipart/form-data', Authorization: token}
             })
             setLoading(false)
             setImages(res.data)
 
         } catch (err) {
             alert(err.response.data.msg)
         }
     }
 
     const handleDestroy = async () => {
         try {
             if(!isAdmin) return alert("You're not an admin")
             await axios.post('/api/destroy', {public_id: images.public_id}, {
                 headers: {Authorization: token}
             })
             setImages(false)
         } catch (err) {
             alert(err.response.data.msg)
         }
     }
 
    const handleChangeInput = e => {
        const { name, value } = e.target
        setFlight({ ...flight, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            //  if(!images) return alert("No Image Upload")

         
                await axios.post('/api/flights', { ...flight }, {
                    headers: { Authorization: token }
                })
            
              setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

     const styleUpload = {
         display: images ? "block" : "none"
     }
    return (
        <div className="create_product">
    <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
                
            </div>
            <img className="image" src="https://idsb.tmgrup.com.tr/ly/uploads/images/2021/10/05/149803.jpg" alt="" />




            <form onSubmit={handleSubmit}>

             
                <div className="row">
                    <label htmlFor="title">Destination</label>
                    <input type="text" name="title" id="des" required
                    value={flights.Destination} onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="dt">Departure time</label>
                    <input type="text" name="DepartureTime" id="dt" required
                        value={flights.DepartureTime}  onChange={handleChangeInput} />
                </div>
                
                <div className="row">
                    <label htmlFor="at">Arrival time</label>
                    <input type="text" name="Arrival_time" id="at" required
                       value={flights.ArrivalTime}   onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="da">Depature Airport</label>
                    <input type="text" name="Departure_airport" id="da" required
                        value={flights.DepartureAirport}  onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="aa">Arrival Airport</label>
                    <input type="text" name="Arrival_airport" id="aa" required
                       value={flights.DepartureAirport}   onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="airline">Airline</label>
                    <input type="text" name="Airline" id="airline" required
                       value={flights.Airline}   onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="price">Capacity</label>
                    <input type="number" name="price" id="capacity" required
                        value={flights.Capacity}  onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                        rows="5"  value={flights.Description}  onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Price</label>
                    <textarea type="text" name="price" id="price" required
                     rows="2"  value={flights.Price} onChange={handleChangeInput} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateFlight*/