import React from 'react'
import { useRef } from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { label: "Tanks Cleaned", end: 1500 },
    { label: "Happy Clients", end: 1300 },
    { label: "Years Experience", end: 10 },
    { label: "Service Areas", end: 8 },
  ];
  const sections = [
    {
      title: "Our Vision",
      content: [
        "At Nirvaan Services, we envision becoming a leading name in the integrated facility management industry by delivering high-quality, reliable, and comprehensive solutions tailored to meet the evolving needs of our clients.",
        "We began our journey with a focus on water tank cleaning services, setting a foundation rooted in hygiene, safety, and customer satisfaction. As we grow, we are committed to expanding our service offerings to include a wide range of essential facility services such as floor cleaning, carpentry, electrical work, housekeeping, and even specialized services like havan (spiritual purification rituals).",
        "Our goal is to be a one-stop destination for all facility management needs — combining professionalism, skilled manpower, and a customer-centric approach to enhance the living and working environments of our clients. With a forward-thinking mindset and a dedication to excellence, Nirvaan Services aims to set new standards in the service industry."
      ],
    },
    {
      title: "About Our Company",
      content: [
        "Nirvaan Services is a facility management company born from a dream and brought to life in April 2025, with a mission to provide reliable, high-quality services that simplify and improve everyday living. Our journey began with a single focus — water tank cleaning services — driven by a commitment to health, hygiene, and customer satisfaction.",
        "What started as a single-service initiative has now grown into a broader vision: to become a trusted, all-in-one facility management partner. As we evolve, we are expanding our service portfolio to include floor cleaning, carpentry, electrical services, housekeeping, and even specialized offerings such as havan (spiritual rituals) — all delivered with professionalism, integrity, and care.",
        "At Nirvaan Services, we believe that well-maintained spaces lead to better living and working experiences. With a customer-first approach and a passion for excellence, we are dedicated to building long-term relationships and becoming a name synonymous with trust and quality in the facility management industry."
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      
  <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
    <img
      src="/images/logo.png"
      alt="Background Logo"
      className="w-96 opacity-30"
    />
  </div>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 animate-fade-in">
          About Nirvaan
        </h1>
        <p className="text-lg text-gray-700 mb-12 animate-fade-in delay-100">
          Nirvaan provides professional, eco-friendly tank cleaning services that prioritize your health, safety, and water quality. Learn more about our values, work, and commitment.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-xl shadow-lg animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">{section.title}</h2>
              {section.content.map((para, j) => (
                <p key={j} className="text-gray-700 mb-2 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Section: Why Tank Cleaning Matters */}
        <h2 className="text-3xl font-bold text-blue-700 mt-20 mb-4 animate-fade-in">
          Why Tank Cleaning Matters
        </h2>
        <p className="text-lg text-gray-700 mb-10 animate-fade-in delay-100">
          Over time, water tanks accumulate sediments, bacteria, and harmful pollutants. Drinking or using this water can affect your health and hygiene.
        </p>

{/*         
              <section ref={ref} className="py-16 bg-blue-600 text-white text-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
                  {stats.map((item, index) => (
                    <div key={index} className="text-3xl font-bold">
                      {inView && <CountUp end={item.end} duration={1.5} />}+
                      <p className="text-lg font-normal mt-2">{item.label}</p>
                    </div>
                  ))}
                </div>
              </section> */}

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Prevents Waterborne Diseases",
              desc: "Regular cleaning eliminates bacteria like E. coli and salmonella that thrive in stagnant water.",
            },
            {
              title: "Improves Water Quality",
              desc: "Removes rust, algae, and sediments to ensure safe, odor-free water for all uses.",
            },
            {
              title: "Protects Plumbing & Appliances",
              desc: "Clean tanks reduce pipe corrosion and extend the life of your geysers and pumps.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="p-6 bg-blue-100 rounded-xl shadow-md animate-fade-in"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
