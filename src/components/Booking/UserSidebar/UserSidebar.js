import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './UserSidebar.css';

const UserSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
            <li>
                <Link to="/booking" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span> 
                </Link>
            </li>
            <li>
                <Link to="/booking/BookingList" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Booking List</span>
                </Link>
            </li>
            <li>
                <Link to="/booking/review" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Review</span>
                </Link>
            </li>
           
            <li>
                <Link to="/booking/setting" className="text-white" >
                  <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                </Link>
            </li>
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default UserSidebar;