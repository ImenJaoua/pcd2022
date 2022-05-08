import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../GlobalState'
import { useParams } from 'react-router-dom'

import './Prediction.css'
function Prediction() {
  const params = useParams()

  const state = useContext(GlobalState)

  const [flights, setFlights] = state.flightAPI.flights
  const [flight, setFlight] = useState([])

  useEffect(() => {
    if (params.id) {

      flights.forEach(f => {
        if (f._id === params.id) setFlight(f)
        console.log(flight)
      })
    }
  }, [params.id, flights])

  return (
    <>
    <div className='prediction'>
      <h2 data-text="The_Flight_Delay_will_be_approximatively...">The_Flight_Delay_will_be_approximatively...<br/><div className='h'>{flight.prediction} minutes</div></h2>
      </div>

   </>
  )
}

export default Prediction