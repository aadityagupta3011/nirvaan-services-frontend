import React from 'react'
import { Link } from 'react-router-dom';



const Services = () => {
  const services = [
    {
      title: "Domastic Tank Cleaning",
      desc: "Hygienic cleaning for underground & overhead water tanks in homes, apartments, and societies.",
    },
    {
      title: "Comercial Tank Cleaning",
      desc: "Group tank cleaning plans for societies to ensure all residents receive clean and safe water.",
    },
    {
      title: "Apartment Tank Cleaning",
      desc: "Quick-response cleaning services during urgent situations like contamination or flooding.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-20 px-4">
      
  <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
    <img
      src="/images/logo.png"
      alt="Background Logo"
      className="w-96 opacity-30"
    />
  </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-700 text-center mb-16">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 flex flex-col items-center justify-center rounded-3xl shadow-2xl hover:shadow-blue-200 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-lg mb-6">{service.desc}</p>
              <Link to={'/contact'} >
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
