import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useNavigate, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const PaymentForm = () => {
    const stirpe=useStripe();
    const {user}=useAuth()
    const elements=useElements();
    const [error,seterror]=useState('')
     const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();
     const navigate = useNavigate();
   
const {isPending, data:parcelInfo = {} }=useQuery({
   queryKey: ['parcels', parcelId],
   queryFn:async ()=>{
     const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
   }
})
if (isPending) {
        return '...loading'
      }
    const price=  parcelInfo.cost
    const amountInCents = price * 100;
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stirpe || !elements){
            return
        }
         // to find your CardElement because there can only ever be one of
    // each type of element.
        const card=elements.getElement(CardElement)
        if (!card) {
      return;
    }
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod}=await stirpe.createPaymentMethod({
        type:'card',
        card,
      });
      if(error){
         console.log('error', error);
         seterror(error.message)
      }else {
        seterror(' ')
      console.log('PaymentMethod', paymentMethod);
       // step-2: create payment intent
    const res=await axiosSecure.post('/create-payment-intent',{
      amountInCents,
      parcelId
    })
     const clientSecret = res.data.clientSecret;
     
     // step-3: confirm paymen
     const result=await stirpe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:elements.getElement(CardElement),
        billing_details:{
          name: user.displayName,
          email: user.email
        }
      }
     });
     if(result.error){
      seterror(result.error.message)
     }else{
      seterror(' ')
      if(result.paymentIntent.status === "succeeded"){
         const transactionId = result.paymentIntent.id;
                    // step-4 mark parcel paid also create payment history
                    const paymentData = {
                        parcelId,
                        email: user.email,
                        price,
                        transactionId: transactionId,
                        paymentMethod: result.paymentIntent.payment_method_types
                    }

                    // post to save payment data
                    
                     const paymentRes = await axiosSecure.post('/payments', paymentData);
                    if (paymentRes.data.insertedId) {

                        // ✅ Show SweetAlert with transaction ID
                        await Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful!',
                            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                            confirmButtonText: 'Go to My Parcels',
                        });

                        // ✅ Redirect to /myParcels
                        navigate('/dashboard/myParcels');

                    }

      }
     }
    }
   
    }

    return (
        <div>
               <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-base-100 p-6 rounded-lg shadow-lg'>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button  className="btn btn-primary w-full mt-2 hover:scale-105 transition-transform" type="submit" disabled={!stirpe}>
        Pay $ {price}
      </button>
      {error && <p className='text-red-500'>{error}</p>}
    </form>
        </div>
    );
};

export default PaymentForm;