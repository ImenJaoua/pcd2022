import React from 'react'
import './UserSection.css'
function UserSection() {
    return (
        <div>
            <div className='sec'>

                <div className="content_user">
                    <div className="header-text-user text-center-user">
                        <h2>Travel,Enjoy And Live A New Life</h2>
                    </div>

                    <div className='search-user'>
                        <div className='container-user'>
                            <label htmlFor=''>Where you want to go</label>
                            <input type="text" placeholder="Search your location" />

                        </div>
                        <div className='container-user'>
                            <label htmlFor=''>Check-in</label>
                            <input type="date" />
                        </div>
                        <div className='container-user'>
                            <label htmlFor=''>Check-out</label>
                            <input type="date" />
                        </div>
                    </div>
                    <a href='/login'>
                        <button type="submit" class="banner-btn-user">Book Now</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default UserSection