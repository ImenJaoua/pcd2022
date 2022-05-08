import React,{useContext} from 'react'
import './UserSection.css'
import {GlobalState} from '../../GlobalState'

function UserSection() {
    const state = useContext(GlobalState)
    const [search, setSearch] = state.flightAPI.search
    const [searsh, setSearsh] = state.flightAPI.searsh

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
                            <input type="text" value={search} placeholder="Enter your search!" 
                            onChange={e => setSearch(e.target.value.toLowerCase())}  />

                        </div>
                        <div className='container-user'>
                            <label htmlFor=''>Date of your flight</label>

                            <input type="date" value={searsh} 
                            onChange={e => setSearsh(e.target.value.toString())} />
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