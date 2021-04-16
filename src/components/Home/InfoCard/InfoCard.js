import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
const InfoCard = ({info}) => {
    return (
       
        <div className="col-md-4 text-white info-card mt-5 mb-5">
            
          <div className={`d-flex info-container justify-content-center info-${info.background}`}>
          <div className="ms-3"> 
                <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
            </div>
            <div>
                <h5>{info.title}</h5>
                <p>{info.desc}</p>
            </div>
          </div>
        </div>
       
    );
};

export default InfoCard;