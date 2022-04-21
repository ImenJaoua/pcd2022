import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Register from './Register/Register';
import Login from './Login/Login';
import Home from './Home/Home';

import CreateFlight from './CreateFlight/CreateFlight';
import DetailFlight from './DetailFlight/DetailFlight'
import Cart from '../Components/Cart/Cart'
import OrderHistory from './History/OrderHistory'
import Categories from './Categories/Categories'
import NotFound from './Utils/NotFound/not_found'
import MainPage from '../pages/MainPage/MainPage'
import {GlobalState} from '../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/main" exact component={MainPage} />
            <Route path="/detail/:id" exact component={DetailFlight} />

            <Route path="/login" exact component={Login } />
            <Route path="/register" exact component={ Register } />

            <Route path="/category" exact component={ Categories } />
            <Route path="/createFlight" exact component={ CreateFlight} />
            <Route path="/edit_flight/:id" exact component={CreateFlight } />

            <Route path="/history" exact component={ OrderHistory } />
            {/* <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} /> */}

            <Route path="/cart" exact component={Cart} />


            {/* <Route path="*" exact component={NotFound} /> */}
        </Switch>
    )
}

export default Pages