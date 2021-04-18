import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm/SimpleCardForm';
import SplitCardForm from './SplitCardForm/SplitCardForm';


const stripePromise = loadStripe('pk_test_51IeGGDCbBZN5V525akrn4ewRuWdnDQ9Vot7jH4TptW9eyHcPMgoeCVp8FlJhfvDkdh18BqVDnkNVPTmfUBGyQ1SX00AuBGTNlP');


const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
         <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;