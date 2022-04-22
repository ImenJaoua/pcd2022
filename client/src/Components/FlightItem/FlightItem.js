import React from 'react'
import './FlightItem.css'
import BtnRender from './BtnRender'
function FlightItem({ flight, isAdmin, deleteFlight, handleCheck }) {
    return (

        <div className='flight_card'>
             {
                isAdmin && <input type="checkbox" checked={flight.checked}
                onChange={() => handleCheck(flight._id)} />
            }
                <img src={flight.images.url} alt="" />
           
            <div className='flight_box'>


                <div className='service-content'>
                    <h3>{flight.Destination}</h3>

                    <small className='text'>{flight.Description}</small>
                    <div className='service-footer'>
                        <h1>
                            {flight.Price}
                        </h1>
                        <a href="/booking">
                            <BtnRender flight={flight} deleteFlight={deleteFlight} />
                        </a>
                        

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FlightItem