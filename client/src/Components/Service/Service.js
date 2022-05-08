import React from 'react'
import './Service.css'
function Service({ flight }) {

  return (
  
        <div className='service'>
          <div className='service-image'>
            <img src={flight.images.url} alt='' />
          </div>
          <div className='service-content1'>
            <h4>{flight.Destination}</h4>

            <small className='text'>{flight.Description}
            </small>
            <div className='service-footer1'>
              <a href='/login'>
                <button className='service-btn1' type="submit">BOOK NOW</button>
              </a>
              <h2>
                {flight.Price}DT
              </h2>

            </div>

          </div>

        </div>
    
  )
}
export default Service;