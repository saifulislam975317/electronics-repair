import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faMobile, faCamera, faDesktop } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'MOBILE PHONES',
        desc: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: faMobile,
        background: 'primary'
    },
    {
        title: 'PHOTO CAMERAS',
        desc: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: faCamera,
        background: 'dark'
    },
    {
        title: 'COMPUTERS',
        desc: 'Suspendisse potenti. Nunc dapibus nibh justo, facilisis sagittis eros sollicitudin posuere.',
        icon: faDesktop,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            
         
            <div className="w-75 row">
            <h1 className="mt-5">WE REPAIR</h1>
            {
               
                infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
           
        </section>
    );
};

export default BusinessInfo;