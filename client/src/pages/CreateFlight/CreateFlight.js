
import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../GlobalState'
import './CreateFlight.css'
import { useHistory, useParams } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
const initialState = {
    Destination: '',
    DepatureTime:'',
    ArrivalTime:'',
    DepatureAirport:'',
    ArrivalAirport:'',
    Airline:'',
    Capacity: '',
    Description: '',
    Price: '',
    Category:'',

}

function CreateFlight() {
    const state = useContext(GlobalState)
    const [flight, setFlight] = useState(initialState)
    // const [categories] = state.categoriesAPI.categories
     const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()

    const [flights] = state.flightAPI.flights
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.flightAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            flights.forEach(flight => {
                if(flight._id === param.id) {
            setFlight(flight)
            setImages(flight.images)
                }
            })
        }else{
            setOnEdit(false)
            setFlight(initialState)
            setImages(false)
        }
  
        
    }, [param.id,flights])

     const handleUpload = async e =>{
         e.preventDefault()
         try {
             if(!isAdmin) return alert("You're not an admin")
             const file = e.target.files[0]
             
             if(!file) return alert("File not exist.")
 
             if(file.size > 10000 * 10000) // 1mb
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
              if(!images) return alert("No Image Upload")

              if(onEdit){
                await axios.put(`/api/flights/${flight._id}`, {...flight, images}, {
                    headers: {Authorization: token}
                })
            }else{
                await axios.post('/api/flights', {...flight, images}, {
                    headers: {Authorization: token}
                })
            }
            
              setCallback(!callback)
            history.push("/main")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

     const styleUpload = {
         display: images ? "block" : "none"
     }
    return (
        <div className="create_flight">
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




            <form onSubmit={handleSubmit}>

                 <div className="row">
                    <label htmlFor="title">Destination</label>
                    <input type="text" name="Destination" id="Destination" required
                    value={flight.Destination} onChange={handleChangeInput} />
                </div> 
                
                <div className="row">
                    <label htmlFor="dt">Departure time</label>
                    <input type="text" name="DepatureTime" id="dt" required
                        value={flight.DepatureTime}  onChange={handleChangeInput} />
                </div>
                
                <div className="row">
                    <label htmlFor="at">Arrival time</label>
                    <input type="text" name="ArrivalTime" id="at" required
                       value={flight.ArrivalTime}   onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="da">Depature Airport</label>
                    <input type="text" name="DepatureAirport" id="da" required
                        value={flight.DepatureAirport}  onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="aa">Arrival Airport</label>
                    <input type="text" name="ArrivalAirport" id="aa" required
                       value={flight.ArrivalAirport}   onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="airline">Airline</label>
                    <input type="text" name="Airline" id="airline" required
                       value={flight.Airline}   onChange={handleChangeInput} />
                </div>
                <div className="row">
                    <label htmlFor="price">Capacity</label>
                    <input type="number" name="Capacity" id="capacity" required
                        value={flight.Capacity}  onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="Description" id="description" required
                        rows="5"  value={flight.Description}  onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="content">Price</label>
                    <input type="text" name="Price" id="price" required
                     rows="2"  value={flight.Price} onChange={handleChangeInput} />
                </div>
                {/* <div className="row">
                    <label htmlFor="content">Category</label>
                    <input type="text" name="Category" id="cat" required
                     rows="2"  value={flight.Category} onChange={handleChangeInput} />
                </div> */}
                <button type="submit">{onEdit? "Update" : "Create"}</button>
            </form>
        </div>
    )
}

export default CreateFlight