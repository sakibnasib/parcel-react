import React from 'react';
import {
  FaShippingFast,
  FaGlobeAmericas,
  FaBoxes,
  FaMoneyBillWave,
  FaBuilding,
  FaUndoAlt
} from "react-icons/fa"

const services = [
 {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: FaShippingFast
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: FaGlobeAmericas
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: FaBoxes
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: FaMoneyBillWave
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
    icon: FaBuilding
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: FaUndoAlt
  },
];
const OurServices = () => {
    return (
         <section data-aos="zoom-in-up" className="py-12 bg-[#03373D] rounded-4xl mt-10 mb-7 text-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white font-semibold text-center mb-4">Our Services</h2>
        <p className="text-center text-white mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="card group bg-[#FFFFFF] p-6 rounded-lg shadow hover:bg-[#CAEB66] hover:shadow-lg transition"
            >
              <div className="flex justify-center items-center ">
                <Icon className="h-12 w-12 text-primary mb-4  group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-center group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-gray-600 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default OurServices;