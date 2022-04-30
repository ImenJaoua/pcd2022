import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalState'
import FlightItem from '../../Components/FlightItem/FlightItem'
import location from './icon/location-mark.svg'
import price from './icon/price.svg'
import calendar from './icon/calendar-search.svg'

import './DetailFlight.css'
import MainPageHeader from "../../Components/MainPage_Header/MainPage_Header"
function DetailFlight() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [flights, setFlights] = state.flightAPI.flights
    const addCart = state.userAPI.addCart
    const [detailFlight, setDetailFlight] = useState([])

    useEffect(() => {
        if (params.id) {

            flights.forEach(flight => {
                if (flight._id === params.id) setDetailFlight(flight)
                console.log(flight)
            })
        }
    }, [params.id, flights])



    if (detailFlight.length === 0) return null;

    return (
        <>
                <MainPageHeader/>

            <div className="detail">
                <img src={detailFlight.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <img src={location} alt="icon" />
                        <span>{detailFlight.Destination}</span>
                       
                    </div>
                    <div className="row">
                        <img src={calendar} alt="icon" />
                        <span>{detailFlight.DepatureTime}</span>
                        
                        <img  src={calendar} alt="icon" />
                        <span>{detailFlight.ArrivalTime}</span>
                       
                    </div>

                    <div className='price'>
                    <img src={price} alt="icon" />

                    <span>{detailFlight.Price}</span>
                    </div>

                    <p>{detailFlight.Description}</p>
                    <p>{detailFlight.Airline}</p>
                    <p>Capacity: {detailFlight.Capacity}</p>
                    <Link to="/cart" className="cart"
                        onClick={() => addCart(detailFlight)}>
                        Book Now
                    </Link>
                </div>
            </div>

            <div>
                <h2>Related Flights</h2>
                <div className="flights">
                    {
                        flights.map(flight => {
                            return flight.category === detailFlight.category
                                ? <FlightItem key={flight._id} flight={flight} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailFlight