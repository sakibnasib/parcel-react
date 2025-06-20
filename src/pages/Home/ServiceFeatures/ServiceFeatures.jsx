import React from 'react';
import img1 from '../../../assets/live-tracking.png'
import img2 from '../../../assets/safe-delivery.png'
import img3 from '../../../assets/tiny-deliveryman.png'
const features = [
  {
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live tracking feature. From pick-up to delivery, monitor your shipment journey and get instant status updates for complete peace of mind.",
    img: img1
  },
  {
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are transported with utmost care and additional security till their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img:img2
  },
  {
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: img3
  }
];
const ServiceFeatures = () => {
    return (
        <section className="py-12 bg-base-100 mt-10">
      <div className="container mx-auto px-4 space-y-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* Left Image */}
            <div className="w-full md:w-1/4 mb-4 md:mb-0 flex justify-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="h-28 md:h-32 object-contain"
              />
            </div>
  <div className="divider divider-horizontal"></div>
            {/* Right Text */}
            <div className="md:ml-6 text-center md:text-left w-full md:w-3/4">
              <h3 className="text-xl text-[#1F1F1F] font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default ServiceFeatures;