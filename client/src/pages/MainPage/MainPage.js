import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom' 
import { DataProvider } from '../../GlobalState'
import MainPage_Header from '../../Components/MainPage_Header/MainPage_Header'
import Flights from '../flights/Flights'
import './MainPage.css'
function MainPage() {
  return (
    <DataProvider>
    <Router>
      <div className="mainpage">
        <MainPage_Header />
        <Flights/>
      </div>
    </Router>
  </DataProvider> 
   )
}

export default MainPage