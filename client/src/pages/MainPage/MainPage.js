import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from '../../GlobalState'
import MainPage_Header from '../../Components/MainPage_Header/MainPage_Header'
import Flights from '../flights/Flights'
import { GlobalState } from '../../GlobalState'

import './MainPage.css'
import UserSection from '../../Components/UserSection/UserSection'
import AdminSection from '../../Components/AdminSection/AdminSection'
function MainPage() {
  const state = useContext(GlobalState)

  const [isAdmin] = state.userAPI.isAdmin

  return (
    <DataProvider>
      <Router>
        <div className="mainpage">
          <MainPage_Header />
          {
            isAdmin ?
            <AdminSection />
            :
            <UserSection/>
          }
          {
          isAdmin?  <h3 className='heading'> Delete or Edit Destinations</h3>
         : <h3 className='heading'> Search Destinations</h3>
          }
          <Flights />
        </div>
      </Router>
    </DataProvider>
  )
}

export default MainPage