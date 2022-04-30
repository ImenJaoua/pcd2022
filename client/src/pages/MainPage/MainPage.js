import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom' 
import { DataProvider } from '../../GlobalState'
import MainPage_Header from '../../Components/MainPage_Header/MainPage_Header'
import Flights from '../flights/Flights'
import './MainPage.css'
import UserSection from '../../Components/UserSection/UserSection'
function MainPage() {
  return (
    <DataProvider>
    <Router>
      <div className="mainpage">
        <MainPage_Header />
        <UserSection/>
        <h3 className='heading'>Search Destinations</h3>

        <Flights/>
      </div>
    </Router>
  </DataProvider> 
   )
}

export default MainPage