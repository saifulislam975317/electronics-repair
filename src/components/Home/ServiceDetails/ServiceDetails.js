import React from 'react';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 mt-5">
            <img className="image-container" src={service.img} alt=""/>
            <h4>{service.name}</h4>
        </div>
    );
};

export default ServiceDetails;