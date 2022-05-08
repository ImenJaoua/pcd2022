import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Flights from './pages/flights/Flights';
import { DataProvider } from './GlobalState'
import MainPage from './pages/MainPage/MainPage';
import Categories from './pages/Categories/Categories'
import CreateFlight from './pages/CreateFlight/CreateFlight';
import DetailFlight from './pages/DetailFlight/DetailFlight'
import Cart from './pages/Cart/Cart'
import OrderHistory from './pages/History/OrderHistory';
import Prediction from './pages/Prediction/Prediction'
const App = () => {
  return (
    <DataProvider>

      <Router>

        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/main" exact>
              <MainPage />
            </Route>
            <Route path="/createFlight" exact>
              <CreateFlight />
            </Route>
            <Route path="/detail/:id" exact>
              <DetailFlight />
            </Route>
            <Route path="/register" exact>
              <Register/>
            </Route>
            <Route path="/history" exact>
              <OrderHistory/>
            </Route>
            <Route path="/flight" exact>
              <Flights />
            </Route>
            <Route path="/edit_flight/:id" exact>
              <CreateFlight />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
            <Route path="/cat" exact>
              <Categories />
            </Route>
            <Route path="/booking" exact>
              <Booking />
            </Route>
            <Route path="/prediction/:id" exact>
              <Prediction />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
      </DataProvider>
      );
}

      export default App;
