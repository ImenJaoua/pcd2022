import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import FlightItem from '../../Components/FlightItem/FlightItem'
import './DetailFlight.css'

function DetailFlight() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [flights,setFlights]= state.flightAPI.flights
    const addCart = state.userAPI.addCart
    const [detailFlight, setDetailFlight] = useState([])

    useEffect(() =>{
        if(params.id){

            flights.forEach(flight => {
                if(flight._id === params.id) setDetailFlight(flight)
                console.log(flight)
            })
        }
    },[params.id, flights])

    if(detailFlight.length === 0) return null;

    return (
        <>
            <div className="detail">
                <img src={detailFlight.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailFlight.Destination}</h2>
                        <h6>#id: {detailFlight.flight_id}</h6>
                    </div>
                    <span>$ {detailFlight.Price}</span>
                    <p>{detailFlight.Description}</p>
                    <p>{detailFlight.Airline}</p>
                    <p>Sold: {detailFlight.Capacity}</p>
                    <Link to ="/cart" className="cart"
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