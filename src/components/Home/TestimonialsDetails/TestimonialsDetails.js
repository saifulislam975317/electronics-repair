import React from 'react';

const TestimonialsDetails = ({testimonial}) => {
    return (
        <div className="col-md-4 mt-5">
            <img className="image-container" src={testimonial.img} alt=""/>
            <h4>{testimonial.name}</h4>
        </div>
    );
};

export default TestimonialsDetails;