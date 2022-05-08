import React, { useContext,useState } from 'react'
import {GlobalState} from '../../GlobalState'
import Service from '../Service/Service'
function Services() {
    const state= useContext(GlobalState)

  const [flights,setFlights]= state.flightAPI.flights
    return (
        <div className="services-section">
            <div className='services-header text-center'>
                <h3>OUR SERVICES</h3>
                <h2>Latest TOURS</h2>
            </div>
            <div className='services'>
            {
        flights.slice(0,3).map(flight=>{
          return <Service flight={flight}
         />
        })

      }
</div>
        </div>
            )
}

            export default Services