import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className="about-section">
      <div className='about-header text-center'>
        <h3>ABOUT US</h3>
        <h2>A SIGNATURE OF EXCELLENCE</h2>
      </div>
      <div className='about-us'>
        <div className='about'>
          <div className='about-icon'>
          <i class="fas fa-heart"></i>           </div>
          <h4>HAPPY CLIENTS</h4>
          <p>The happiness of our clients is our first priority! </p>
        </div>
        <div className='about'>
          <div className='about-icon'>
          <i class="fas fa-plane"></i>        </div>
          <h4>AMAZING TOUR</h4>
          <p>We offer amazing tours to all destinations all over the world! </p>
        </div>
        <div className='about'>
          <div className='about-icon'>
            <i class="fas fa-dollar-sign"></i>
          </div>
          <h4> BEST PRICES</h4>
          <p>Book with LET'S TRAVEL for security and flexibility at low prices!</p>
        </div>
        <div className='about'>
          <div className='about-icon'>
            <i class="far fa-credit-card"></i>
          </div>
          <h4>FLEXIBLE PAYMENT</h4>
          <p> After your deposit, pay the rest in instalments The amounts you like!</p>
        </div>
      </div>



    </div>
  )
}
export default About;