import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import HowWorks from '../HowWorks/HowWorks';
import LogoMarquee from '../LogoMarquee/LogoMarquee';
import ServiceFeatures from '../ServiceFeatures/ServiceFeatures';
import BecomeMerchant from '../BecomeMerchant/BecomeMerchant';
import Customers from '../customers/Customers';
import FQA from '../Fqa/FQA';

const Home = () => {
    return (
        <div className='mt-8 '>
          <div className="shadow-t-2xl rounded-xl">
 <Banner/>
          </div>
          <div className="w-11/12 mx-auto">
            <HowWorks/>
          </div>
          <OurServices/>
          <LogoMarquee></LogoMarquee>
          <ServiceFeatures/>
          <BecomeMerchant></BecomeMerchant>
          <Customers/>
          <FQA/>
        </div>
    );
};

export default Home;