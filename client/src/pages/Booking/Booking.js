import React from 'react'
import './Booking.css'
function Booking() {

    const cart = async()=>{
        window.location.href = "/cart";
    }

    return (
        <>
            <section className="banner">
                <div class="card-container">
                    <div class="card-img">
                        <img src=".//booking.png" alt='' />
                    </div>

                    <div class="card-content">
                        <div className='title'>Reservation</div>
                        <div className='form'>
                        <div className='input-grp'>
                                <label>Passenger First Name</label>
                                <input type="text" className='from-control' placeholder='First Name' />
                            </div>
                            <div className='input-grp'>
                                <label>Passenger Last Name</label>
                                <input type="text" className='from-control' placeholder='Last Name' />
                            </div>
                            <div className='input-grp'>
                                <label>Date Birth</label>
                                <input type="date"  className="form-control select-date"  />
                            </div>
                            <div className='input-grp'>
                                <label>Phone Number</label>
                                <input type="number" className='from-control' placeholder='########' />
                            </div>
                            <div className='input-grp'>
                                <label>Email</label>
                                <input type="mail" className='from-control' placeholder='Email' />
                            </div>
                            <div className='input-grp'>
                                <label>Address</label>
                                <input type="text" className='from-control' placeholder='Address' />
                            </div>
                            <div className='input-grp'>
                                <label>Numero de CIN</label>
                                <input type="text" className='from-control' placeholder='City or Airport' />
                            </div>
                            <div className='input-grp'>
                                <label>Nombre de places</label>
                                <input type="text" className='from-control' placeholder='City or Airport' />
                            </div>
                            <div className='input-grp'>
                                <label>Baggage</label>
                                <input type="text" className='from-control' placeholder='City or Airport' />
                            </div>
                           
                            
                            
                            <div className='input-grp'>
                                <label>Travel Class</label>
                                <select className="custom-select">
                                    <option value="1">Economy Class</option>
                                    <option value="2">Business Class</option>
                                </select>
                            </div>
                            <div className='input-grp'>
                                <label>Passport Number</label>
                                <input type="number" className='from-control' placeholder='########' />
                            </div>
                            <div className='input-grp'>
                                <label>Passport Expiration Date</label>
                                <input type="date" className="form-control select-date"/>
                            </div>
                            <div className='input-gr'>
                                <button type='button' className='btn btn-primary flight' onClick={cart}>Go to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Booking