import React, { useContext,useState } from 'react'
import {GlobalState} from '../../GlobalState'
import FlightItem from '../../Components/FlightItem/FlightItem'
import axios from 'axios'
import Loading from '../../Components/Loading/Loading'
function Flights() {
  const state= useContext(GlobalState)

  const [flights,setFlights]= state.flightAPI.flights
  const [isAdmin]= state.userAPI.isAdmin
  const [token] = state.token
  const [callback, setCallback] = state.flightAPI.callback
  const [loading, setLoading] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  
  const handleCheck = (id) =>{
    flights.forEach(flight => {
        if(flight._id === id) flight.checked = !flight.checked
    })
    setFlights([...flights])
}
  const deleteFlight= async(id,public_id) => {
    try {
      setLoading(true)
      const destroyImg = axios.post('/api/destroy', {public_id},{
          headers: {Authorization: token}
      })
        
        const deleteFlight = axios.delete(`/api/flights/${id}`, {
            headers: {Authorization: token}
        })
        await destroyImg

        await deleteFlight
        setCallback(!callback)
        setLoading(false)
    } catch (err) {
        alert(err.response.data.msg)
    }
}
const checkAll = () =>{
  flights.forEach(product => {
      product.checked = !isCheck
  })
  setFlights([...flights])
  setIsCheck(!isCheck)
}

const deleteAll = () =>{
  flights.forEach(flight => {
      if(flight.checked) deleteFlight(flight._id, flight.images.public_id)
  })
}
if(loading) return <div><Loading /></div>

  return (
    <>
       
    {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete ALL</button>
            </div>
        }
                <div className="flights">

      {
        flights.map(flight=>{
          return <FlightItem key={flight._id} flight={flight}
           isAdmin={isAdmin} deleteFlight={deleteFlight} handleCheck={handleCheck}/>
        })
      }
    </div>
    {flights.length===0 && <Loading/>}
    </>
  )
}

export default Flights