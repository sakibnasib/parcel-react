import React from 'react';
import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/brands/amazon.png'
import logo2 from '../../../assets/brands/amazon_vector.png'
import logo3 from '../../../assets/brands/casio.png'
import logo4 from '../../../assets/brands/moonstar.png'
import logo5 from '../../../assets/brands/randstad.png'
import logo6 from '../../../assets/brands/start-people 1.png'
import logo7 from '../../../assets/brands/start.png'
const logos=[logo1,logo2,logo3,logo4,logo5,logo6,logo7]
const LogoMarquee = () => {
    return (
        <section className="py-8 bg-white">
      <div className="container mx-auto text-center mb-4">
        <h2 className="text-[2rem] font-bold">
          We’ve helped thousands of <span className="text-primary">sales teams</span>
        </h2>
      </div>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={50}
        className="mx-auto py-7"
      >
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Partner logo ${i + 1}`}
            className="mx-[100px]  h-10 w-auto object-contain"
          />
        ))}
      </Marquee>
    </section>
    );
};

export default LogoMarquee;