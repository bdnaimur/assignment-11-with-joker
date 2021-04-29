import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Deals from './Components/Deals/Deals';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import CheckOut from './Components/CheckOut/CheckOut';
import Bookings from './Components/Home/Bookings/Bookings';
import Dashboard from './Components/Dashboard/Dashboard';
import ShowAllOrders from './Components/ShowAllOrders/ShowAllOrders';
library.add(fab);
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/signin">
            <Signin/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <PrivateRoute path="/checkOut/:pithaId">
            <CheckOut/>
          </PrivateRoute>
          <Route path="/admin">
             <Admin/>
            </Route>
            <PrivateRoute path="/userDashboard">
             <Dashboard/>
            </PrivateRoute>
          <PrivateRoute path="/bookings">
              <Bookings/>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders/>
            </PrivateRoute>
            <Route path="/showAllOrders">
              <ShowAllOrders/>
            </Route>
          <Route path="/deals">
            <Deals/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </userContext.Provider>
    </div>
  );
}

export default App;
