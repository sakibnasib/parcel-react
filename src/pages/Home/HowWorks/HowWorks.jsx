import React from 'react';
import {
  FaCalendarCheck,
  FaMoneyCheckAlt,
  FaWarehouse,
  FaHandshake
} from "react-icons/fa";
const steps = [
  {
    title: "Booking Pick & Drop",
    desc: "Schedule your parcel pick-up and drop-off seamlessly through our app or website.",
    icon: FaCalendarCheck
  },
  {
    title: "Cash On Delivery",
    desc: "Collect payment upon delivery — secure and convenient for both sender and receiver.",
    icon: FaMoneyCheckAlt
  },
  {
    title: "Delivery Hub",
    desc: "Our network of delivery hubs ensures fast sorting and dispatch across the country.",
    icon: FaWarehouse
  },
  {
    title: "Booking SME & Corporate",
    desc: "Tailored booking services and management support for business clients and SMEs.",
    icon: FaHandshake
  }
];
const HowWorks = () => {
    return (
          <section className="py-12 bg-white mt-10 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <Icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HowWorks;