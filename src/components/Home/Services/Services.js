import React from 'react';
import pc from '../../../images/macPc repair.jpg';
import game from '../../../images/game console repair.jpg';
import wifi from '../../../images/wifi problems.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const servicesData = [
    {
        img: pc,
        price: 450,
        name: 'Mac & PC repair'
    },
    {
        img: game,
        price: 340,
        name: 'Game console repair'
    },
    {
        img: wifi,
        price: 250,
        name: 'Wifi problems'
    }
]

const Services = () => {
    return (
       <section className="services-container">
           <div className="text-center">
               <h1>Our Services</h1>
           </div>
           <div className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                servicesData.map(services => <ServiceDetails services={services}></ServiceDetails>)
            }
            </div>
           
        </div>
       </section>
    );
};

export default Services;