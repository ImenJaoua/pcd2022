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
            <div className='service-image'>
                <img src={flight.images.url} alt="" />
            </div>
           
            <div className='service'>


                <div className='service-content'>
                    <h4>${flight.Destination}</h4>

                    <small className='text'>${flight.Description}</small>
                    <div className='service-footer'>
                        <a href="/booking">
                            <BtnRender flight={flight} deleteFlight={deleteFlight} />
                        </a>
                        <h1>
                            {flight.Price}
                        </h1>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FlightItem