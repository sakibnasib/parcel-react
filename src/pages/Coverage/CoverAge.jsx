import React from 'react';
import BangladeshMap from './BangladeshMap';
import { useLoaderData } from 'react-router';


const Coverage = () => {
    const serviceCenters = useLoaderData();

    
    return (
        <div className="w-full  mx-auto px-4 py-10 bg-base-300 shadow-3xl rounded-3xl mt-5 mb-5">
            <h1 className="text-3xl font-bold text-center mb-6">We are available in 64 districts</h1>

            {/* Later you can add your search box here */}
            {/* <SearchDistrictBox /> */}

            <BangladeshMap serviceCenters={serviceCenters} />
        </div>
    );
};

export default Coverage;