import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalState'
import FlightItem from '../../Components/FlightItem/FlightItem'
import location from './icon/location-mark.svg'
import price from './icon/price.svg'
import calendar from './icon/calendar-search.svg'
import avatar from './icon/avatar.png'
import './DetailFlight.css'
import MainPageHeader from "../../Components/MainPage_Header/MainPage_Header"
function DetailFlight() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [flights, setFlights] = state.flightAPI.flights
    const addCart = state.userAPI.addCart
    const [detailFlight, setDetailFlight] = useState([])
    const book = async (f) => {
        window.location.href = "/booking";
        addCart(f)
    }
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
            <div className='detailsPage'>
                <MainPageHeader />

                <div className="detail">
                    <img src={detailFlight.images.url} alt="" />
                    <div className="box-detail">
                        <div className="row">
                            <img src={location} alt="icon" />
                            <span>{detailFlight.Destination}</span>
                            <img id='ha' src={calendar} alt="icon" />
                            <span>{detailFlight.DatOp}</span>
                        </div>
                        <p>{detailFlight.Description}</p>

                        <div className='row'>
                            <img id='price' src={price} alt="icon" />

                            <span>{detailFlight.Price} dt</span>
                            <span>{detailFlight.Prediciton}</span>


                            <img id='cap' src={avatar} alt="icon" />

                            <span> {detailFlight.Capacity}</span>
                        </div>

                        <Link to="/booking" className="cart"
                            onClick={() => book(detailFlight)}>
                            Book Now
                        </Link>
                    </div>
                </div>

                <div >
                    <h2 className='related'>Related Flights</h2>
                    <div className="flights">
                        {
                            flights.map(flight => {
                                return flight.category === detailFlight.category
                                    ? <FlightItem key={flight._id} flight={flight} /> : null
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailFlight