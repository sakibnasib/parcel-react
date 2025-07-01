import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';


// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_paymentkey);
const Payment = () => {
   
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    );
};

export default Payment;