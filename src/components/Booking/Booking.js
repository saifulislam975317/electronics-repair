import React, { useContext } from 'react';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import UserSidebar from './UserSidebar/UserSidebar';


const Booking = ({service}) => {


    const {booking} = useContext(UserContext)

    return (
        <section className="container-fluid row">
            <UserSidebar></UserSidebar>
        <div  className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h1>Please pay by using your Card</h1>
            <h2>Service Name:{booking.name}</h2>
            <h4>Your Service charged will be ${booking.price}</h4>
            <ProcessPayment></ProcessPayment>
         

        </div>
        </section>
    );
};

export default Booking;