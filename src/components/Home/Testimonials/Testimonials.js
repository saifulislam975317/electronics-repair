import React from 'react';
import mobEar from '../../../images/mobileWithEarPhone.jpg';
import lapMob from '../../../images/LaptopWithMobile.jpg';
import noteBook from '../../../images/NoteBook.jpg'
import TestimonialsDetails from '../TestimonialsDetails/TestimonialsDetails';

const testimonialsData = [
    {
        img: mobEar,
        name: 'HOW TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE',
      
    },
    {
        img: lapMob,
        name: 'THE TRANSFER OF DATA FROM TABLET TO PHONE'
    },
    {
        img: noteBook,
        name: 'TERMS OF USE OF PHONES AND TABLETS IN HOT COUNTRIES'
    }
]


const Testimonials = () => {
    return (
        <section className="services-container">
        <div className="text-center">
            <h1>OUR NEWS</h1>
        </div>
        <div className="d-flex justify-content-center">
         <div className="w-75 row">
         {
             testimonialsData.map(testimonial => <TestimonialsDetails testimonial={testimonial}></TestimonialsDetails>)
         }
         </div>
        
     </div>
    </section>
    );
};

export default Testimonials;