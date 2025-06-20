import React from 'react';
import Answer from './Answer';

const FQA = () => {
    return (
        <div data-aos="fade-left" className='mt-10'>
            <h1 className=' mb-3 text-[#03373D] text-[2.6rem] font-bold text-center'>Frequently Asked Question (FAQ)</h1>
            <p className='text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            <div data-aos="fade-right" className="mt-5">
                <Answer/>
            </div>
        </div>
    );
};

export default FQA;