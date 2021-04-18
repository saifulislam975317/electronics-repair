import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import AddService from './components/AddService/AddService';
import Review from './components/Review/Review';
import AdminOrderList from './components/AdminOrderList/AdminOrderList';
import MakeAdmin from './components/AdminOrderList/MakeAdmin/MakeAdmin';
import BookingList from './components/BookingList/BookingList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [booking, setBooking] = useState({})
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, booking, setBooking}}>
   
    <Router>
   <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <PrivateRoute path="/booking">
      <Booking></Booking>
     </PrivateRoute>
     <Route path="/login">
      <Login></Login>
     </Route>
     <PrivateRoute path="/dashboard">
      <Dashboard></Dashboard>
     </PrivateRoute>
     <PrivateRoute path="/addService">
      <AddService></AddService>
     </PrivateRoute>
     <Route path="/BookingList">
      <BookingList></BookingList>
     </Route>
     <Route path="/review">
      <Review></Review>
     </Route>
     <Route path="/adminOrderList">
      <AdminOrderList></AdminOrderList>
     </Route>
     <Route path="/makeAdmin">
      <MakeAdmin></MakeAdmin>
     </Route>
   </Switch>
   
    </Router>
    </UserContext.Provider>
  );
}

export default App;
