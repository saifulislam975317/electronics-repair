import React from 'react';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
       <section>
           <div className="container-fluid">
            <div className="col-md-5">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-7">
            <AddService></AddService>
            </div>
           </div>
       </section>
    );
};

export default Dashboard;