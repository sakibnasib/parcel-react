import React from 'react';
import marchen from '../../../assets/location-merchant.png'
const BecomeMerchant = () => {
    return (
        <div data-aos="zoom-in-right" className=" bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] md:p-20 mb-5 rounded-4xl">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img
      src={marchen}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold text-white">Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
      <p className="py-6 text-white">
       We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
      <div className=" ">
         <button className="btn  bg-[#CAEB66] text-[#1F1F1F] rounded-2xl">Become a Merchant</button>
            <button className="btn md:ml-3 btn-outline border-[#CAEB66] text-[#CAEB66] rounded-2xl ">Earn with Profast Courier</button>
      </div>
   
    </div>
  </div>
</div>
    );
};

export default BecomeMerchant;