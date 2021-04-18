import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import './ServiceDetails.css';
import img from '../../../images/macPc repair.jpg'


const ServiceDetails = ({services}) => {
   console.log(services.img);

    const history= useHistory()
    const {setBooking} = useContext(UserContext)
    const handleClick = (services) =>{
        setBooking(services)
         const url=(`/booking`)
        
         history.push(url)
     }

    return (
        <div className="col-md-4 mt-5">
            
          { 
          
             services.image ? <img src={`data:image/jpeg;base64,${services.image.img}`} />
            :
           <img className="image-container img-fluid mb-3" src={`http://localhost:5000/${services.img}`} alt=""/>
           
           }
           <img style={{height:'200px'}} src={services.img} alt=""/>
            <h6>${services.price}</h6>
            <h4>{services.name}</h4>
            <button onClick={()=>handleClick(services)} className="btn btn-primary buyNow-button">Book Now</button>
        </div>
    );
};

export default ServiceDetails;