import React from 'react';
import img from '../../../images/homepage.jpg'
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className="row">
            <div className="col-md-4 offset-md-1">
            <h1>Quick repair <br/> From the best team</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptate deserunt iste, qui quas harum!</p>
            <button className="btn btn-primary">
                See All Services
            </button>
            </div>
            <div className="col-md-6">
               <img src={img} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;