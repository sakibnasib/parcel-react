import React from 'react';
import { FourSquare } from 'react-loading-indicators';

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
           <FourSquare color="#7bef02" size="medium" text="" textColor="" /> 
        </div>
    );
};

export default Loader;