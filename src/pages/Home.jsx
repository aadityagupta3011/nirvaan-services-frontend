import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import videoBg from "../assets/video/tank-cleaning.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useRef,useState } from "react";

const Home = () => {

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;

    const isMobile = window.innerWidth <= 768;
    if (!isMobile || !el) return;

    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        scrollAmount += 1;
        if (scrollAmount >= el.scrollWidth - el.clientWidth) {
          scrollAmount = 0; // Reset to beginning
        }
        el.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 15); // Adjust speed if needed

    // Clear interval on unmount
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { label: "Tanks Cleaned", end: 1500 },
    { label: "Happy Clients", end: 1300 },
    { label: "Years Experience", end: 10 },
    { label: "Service Areas", end: 8 },
  ];

  return (

    
    <div className="bg-white text-gray-800">
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="/images/logo.png"
          alt="Background Logo"
          className="w-96 opacity-30"
        />
      </div>
      {/* -------- Hero Section -------- */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0">
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white bg-opacity-60 z-10 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl mb-5 font-bold text-black max-w-4xl">
            Welcome to a step of healthy life
          </h1>
          <p className="text-lg md:text-2xl text-black mt-4 max-w-3xl">
            Nirvaan services turn your life in healthy living
          </p>
          <Link to="/contact">
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* -------- Static Image Section (Below Hero) -------- */}
   
   
    <div
      ref={scrollRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="flex overflow-x-auto md:flex-wrap flex-nowrap md:justify-center items-center gap-4 sm:gap-6 md:gap-10 px-2 scroll-smooth snap-x snap-mandatory"
    >
      {[
        "/images/girl-drink-bad-water.png",
        "/images/girl-get's-ill.png",
        "/images/mother-call-nirvaan.png",
        "/images/nirvaan-cleans-tank.png",
        "/images/mother-thank-nirvaan.png",
        "/images/girl-drink-safe-water.png",
      ].map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 snap-start relative z-10 m-1"
        >
          <img
            src={src}
            alt={`Tank Cleaning ${i + 1}`}
            className="w-[200px] h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      ))}
    </div>




<section className="relative py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-100 overflow-hidden">
  {/* Decorative SVG Background */}
  <svg
    className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    fill="none"
  >
    <circle cx="400" cy="400" r="400" fill="#f43f5e" />
  </svg>

  <div className="relative max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-4">
      How Dirty Water Affects Your ENT (Ears, Nose & Throat)
    </h2>
    <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
      Unclean water isn't just unsafe to drink — it can harm your health through the steam you inhale or the water you use to wash your face. Here's how it silently damages your ENT system.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      {/* 1 */}
      <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
        <h3 className="text-lg font-semibold text-rose-600 mb-1">1. Ear Infections</h3>
        <p className="text-gray-700">
          Otitis externa (swimmer’s ear) occurs when bacteria from dirty water enter your ear during a bath. It can cause itching, pain, discharge, and temporary hearing loss.
        </p>
      </div>

      {/* 2 */}
      <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
        <h3 className="text-lg font-semibold text-rose-600 mb-1">2. Sinus Infections (Sinusitis)</h3>
        <p className="text-gray-700">
          Inhaling mist from unclean water can irritate your sinuses, leading to congestion, facial pressure, and headaches.
        </p>
      </div>

      {/* 3 */}
      <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
        <h3 className="text-lg font-semibold text-rose-600 mb-1">3. Throat Irritation & Infections</h3>
        <p className="text-gray-700">
          Gargling or brushing with dirty water introduces bacteria into your throat, causing tonsillitis, bad breath, and pharyngitis.
        </p>
      </div>

      {/* 4 */}
      <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
        <h3 className="text-lg font-semibold text-rose-600 mb-1">4. Allergic Reactions</h3>
        <p className="text-gray-700">
          Mold spores and algae in dirty tanks can trigger sneezing, itchy eyes, runny nose, and post-nasal drip.
        </p>
      </div>

      {/* 5 */}
      <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400 md:col-span-2">
        <h3 className="text-lg font-semibold text-rose-600 mb-1">5. Higher Risk for People with ENT Conditions</h3>
        <p className="text-gray-700">
          Asthma, sinusitis, and allergies can worsen due to minor exposure to contaminated water — especially in children and the elderly.
        </p>
      </div>
    </div>

    {/* Tip Box */}
    <div className="mt-12 bg-rose-100 border border-rose-400 rounded-xl p-6 text-center shadow-md">
      <p className="text-lg text-rose-700 font-medium">
        ✅ <strong>Prevention Tip:</strong> Regular, mechanized tank cleaning prevents microbial buildup that harms your ENT health. Protect your family — especially kids and elders — from silent exposure.
      </p>
    </div>
  </div>



</section>

{/* Our Steps to Clean */}
<section>
<div className="relative max-w-6xl mx-auto my-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-4">
    Our Steps of Cleaning
  </h2>
  <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
    We follow a 6-step professional cleaning process to ensure your water tank is fully disinfected, safe, and hygienic for use.
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Step 1 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400 flex flex-col md:flex-row items-start gap-4">
      <img src="/images/mechanised-dewatering.png" alt="Mechanised Dewatering" className="w-full md:w-40 h-28 object-cover rounded" />
      <div>
        <h3 className="text-lg font-semibold text-rose-600 mb-1">1. Mechanised Dewatering</h3>
        <p className="text-gray-700">
          Using powerful suction pumps, we remove all the stored water from the tank in a controlled and hygienic manner without manual contact.
        </p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400 flex flex-col md:flex-row items-start gap-4">
      <img src="/images/sludge-removal.png" alt="Sludge Removal" className="w-full md:w-40 h-28 object-cover rounded" />
      <div>
        <h3 className="text-lg font-semibold text-rose-600 mb-1">2. Sludge Removal</h3>
        <p className="text-gray-700">
          We remove settled sludge and dirt particles at the bottom of the tank using scooping tools and suction machines.
        </p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400 flex flex-col md:flex-row items-start gap-4">
      <img src="/images/high-pressure.png" alt="High Pressure Cleaning" className="w-full md:w-40 h-28 object-cover rounded" />
      <div>
        <h3 className="text-lg font-semibold text-rose-600 mb-1">3. High Pressure Cleaning</h3>
        <p className="text-gray-700">
          Inner walls of the tank are cleaned with high-pressure water jets to remove algae, biofilm, and stains thoroughly.
        </p>
      </div>
    </div>

    {/* Step 4 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400 flex flex-col md:flex-row items-start gap-4">
      <img src="/images/vaccum-cleaning.png" alt="Vacuum Cleaning" className="w-full md:w-40 h-28 object-cover rounded" />
      <div>
        <h3 className="text-lg font-semibold text-rose-600 mb-1">4. Vacuum Cleaning</h3>
        <p className="text-gray-700">
          Residual dirty water and leftover particles are vacuumed out from corners and grooves for a spotless result.
        </p>
      </div>
    </div>

    {/* Step 5 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400 flex flex-col md:flex-row items-start gap-4">
      <img src="/images/anti-bacterial-spray.png" alt="Anti-Bacterial Spray" className="w-full md:w-40 h-28 object-cover rounded" />
      <div>
        <h3 className="text-lg font-semibold text-rose-600 mb-1">5. Anti-Bacterial Spray</h3>
        <p className="text-gray-700">
          We spray FDA-approved antibacterial solution to disinfect the internal surface of the tank to kill bacteria and germs.
        </p>
      </div>
    </div>

    {/* Step 6 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400 flex flex-col md:flex-row items-start gap-4">
      <img src="/images/uv-rays-cleaning.png" alt="UV Radiation" className="w-full md:w-40 h-28 object-cover rounded" />
      <div>
        <h3 className="text-lg font-semibold text-rose-600 mb-1">6. UV Radiation</h3>
        <p className="text-gray-700">
          Finally, we expose the tank to UV light to eliminate any remaining bacteria or microorganisms without chemicals.
        </p>
      </div>
    </div>
  </div>

  {/* Note or Tip */}
  <div className="mt-12 bg-rose-100 border border-rose-400 rounded-xl p-6 text-center shadow-md">
    <p className="text-lg text-rose-700 font-medium">
      ✅ <strong>100% Safe & Hygienic:</strong> Our step-by-step cleaning process ensures your water is pure, safe, and ready for daily use.
    </p>
  </div>
</div>

</section>




    <section className="py-16 px-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Why Choose Us?</h2>

  <div className="grid md:grid-cols-2 gap-8">
    {/* 1. Advanced Mechanized Cleaning */}
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 className="text-xl font-semibold mb-2 text-blue-800">1. Advanced Mechanized Cleaning</h4>
      <p className="text-gray-700">
        We use state-of-the-art equipment and eco-friendly disinfectants to ensure thorough cleaning, from sludge removal to bacteria elimination — leaving your water tanks spotless and safe.
      </p>
    </div>

    {/* 2. Health & Hygiene First */}
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 className="text-xl font-semibold mb-2 text-blue-800">2. Health & Hygiene First</h4>
      <p className="text-gray-700">
        We understand the importance of clean water for your family or facility. Our process ensures 100% hygienic results, minimizing the risk of waterborne diseases.
      </p>
    </div>

    {/* 3. Trained Professionals */}
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 className="text-xl font-semibold mb-2 text-blue-800">3. Trained Professionals</h4>
      <p className="text-gray-700">
        Our technicians are trained in both safety and sanitation protocols. Every team member is skilled in handling equipment and executing the cleaning process with precision.
      </p>
    </div>

    {/* 4. Eco-Friendly Approach */}
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 className="text-xl font-semibold mb-2 text-blue-800">4. Eco-Friendly Approach</h4>
      <p className="text-gray-700">
        We use non-toxic, environment-safe cleaning agents that effectively clean your tanks without harming the ecosystem or water quality.
      </p>
    </div>

    {/* 5. Time-Efficient & Hassle-Free */}
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 className="text-xl font-semibold mb-2 text-blue-800">5. Time-Efficient & Hassle-Free</h4>
      <p className="text-gray-700">
        Our mechanized system ensures faster cleaning with minimal disruption to your routine — no mess, no stress.
      </p>
    </div>

    {/* 6. Transparent & Affordable Pricing */}
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h4 className="text-xl font-semibold mb-2 text-blue-800">6. Transparent & Affordable Pricing</h4>
      <p className="text-gray-700">
        With us, you get top-tier service at honest, competitive rates. No hidden charges — just clear, professional service.
      </p>
    </div>

    {/* 7. Your Trusted Hygiene Partner */}
    <div className="bg-blue-50 p-6 rounded-xl shadow-md md:col-span-2">
      <h4 className="text-xl font-semibold mb-2 text-blue-800">7. Your Trusted Hygiene Partner</h4>
      <p className="text-gray-700">
        Built on a vision that began in April 2025, Nirvaan Services is driven by a commitment to health, trust, and long-term customer relationships.
      </p>
    </div>
  </div>
</section>


      {/* -------- About Section -------- */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 items-center justify-center text-blue-800 autoShow">
          About Nirvaan Tank Cleaning
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          We provide safe and effective water tank cleaning services using
          modern equipment and eco-friendly methods.
        </p>

        <div className="flex flex-col md:flex-row gap-16 justify-center items-start">
          {/* Services Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6 text-left md:w-1/3 transition hover:shadow-xl hover:scale-105 lg:rotate-[-5deg]">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">
              🧹 Nirvaan: Our Services
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2 pl-2">
              <li>Professional water tank cleaning</li>
              <li>Removal of algae and dirt layers</li>
              <li>Disinfection using safe chemicals</li>
              <li>Residential, commercial, & industrial tanks</li>
              <li>Eco-friendly & water-saving process</li>
            </ul>
          </div>

          {/* Center Image */}
          <div className="bg-white rounded-lg shadow-md p-4 md:w-1/3 hover:scale-105 hover:shadow-xl transition">
            <img
              src="/images/homephoto.png"
              alt="Tank Cleaning"
              className="rounded-xl shadow-lg w-full h-[300px] object-cover"
            />
          </div>

          {/* Focus Card */}
          <div className="bg-green-50 border border-green-200 rounded-lg shadow-md p-6 text-left md:w-1/3 transition hover:shadow-xl hover:scale-105 lg:rotate-[5deg]">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              🔍 Nirvaan: Core Focus
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2 pl-2">
              <li>Thorough & hygienic tank cleaning</li>
              <li>Timely & professional service</li>
              <li>Customer satisfaction is our priority</li>
              <li>Use of modern tools & trained staff</li>
              <li>Zero water wastage during process</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Domestic Tank Cleaning",
                image: "/images/house-photo.png",
              },
              {
                title: "Commercial Tank Cleaning",
                image: "/images/building-photo.png",
              },
              {
                title: "Apartment Tank Cleaning",
                image: "/images/apartment-photo.png",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full h-80 object-cover"
                />
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section>
        {/* Section: Why Tank Cleaning Matters */}
        <h2 className="text-3xl font-bold text-blue-700 mt-20 mb-4 animate-fade-in flex justify-center">
          Why Tank Cleaning Matters
        </h2>
        <p className="text-lg text-gray-700 mb-10 animate-fade-in delay-100 flex justify-center ">
          Over time, water tanks accumulate sediments, bacteria, and harmful
          pollutants. Drinking or using this water can affect your health and
          hygiene.
        </p>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8 w-[80vw] ">
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
                style={{ animationDelay: `${i * 200}ms` }}>
                <h3 className="text-xl font-semibold text-blue-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="relative max-w-6xl mx-auto mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-4">
    What Happens If You Don’t Clean Your Water Tank?
  </h2>
  <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
    Water tanks accumulate bacteria, algae, sludge, and even pests — all of which pose serious risks to your health, plumbing, and appliances. Here's how:
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    {/* 1 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">1. Health Hazards</h3>
      <p className="text-gray-700">
        Dirty tanks breed bacteria, viruses, and parasites that cause illnesses like diarrhea, cholera, and typhoid — especially dangerous for children, elderly, and those with weak immunity.
      </p>
    </div>

    {/* 2 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">2. Bad Taste & Odor</h3>
      <p className="text-gray-700">
        Contaminated water can smell foul or taste metallic, making it unpleasant and unsafe for drinking or cooking.
      </p>
    </div>

    {/* 3 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">3. Algae & Sludge Build-up</h3>
      <p className="text-gray-700">
        Algae grows in stagnant water and sunlight; sludge settles at the bottom — reducing both quality and storage capacity.
      </p>
    </div>

    {/* 4 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">4. Clogged Pipes & Appliances</h3>
      <p className="text-gray-700">
        Sediments from dirty water clog taps, filters, and even machines like water heaters and washing machines.
      </p>
    </div>

    {/* 5 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">5. Pest Infestation</h3>
      <p className="text-gray-700">
        Insects, mosquitoes, and rodents thrive in unclean tanks — spreading more diseases.
      </p>
    </div>

    {/* 6 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">6. Shorter Tank Lifespan</h3>
      <p className="text-gray-700">
        Rust and corrosion from chemical buildup can cause leaks or structural failure in your tank.
      </p>
    </div>
  </div>
</div>

{/* Skin Problems Section */}
<div className="relative max-w-6xl mx-auto mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-4">
    Common Skin Problems from Unclean Water Tanks
  </h2>
  <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
    Contaminated water doesn’t just make you sick internally — it also affects your skin every time you bathe or wash.
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    {/* 1 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">1. Rashes & Irritation</h3>
      <p className="text-gray-700">
        Bacteria or chemicals in water can cause itching, redness, and skin inflammation.
      </p>
    </div>

    {/* 2 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">2. Fungal Infections</h3>
      <p className="text-gray-700">
        Moisture + germs = fungal growth. Ringworm, athlete's foot, or yeast infections are common results.
      </p>
    </div>

    {/* 3 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">3. Allergic Reactions</h3>
      <p className="text-gray-700">
        Water containing allergens can trigger hives, eczema flare-ups, or other allergic responses.
      </p>
    </div>

    {/* 4 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">4. Dryness & Flaky Skin</h3>
      <p className="text-gray-700">
        Chlorine, rust, and sediments strip away natural oils from your skin — leading to dryness.
      </p>
    </div>

    {/* 5 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">5. Acne & Folliculitis</h3>
      <p className="text-gray-700">
        Dirty water can clog pores and cause bacterial infections like acne or inflamed hair follicles.
      </p>
    </div>

    {/* 6 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">6. Worsening Existing Conditions</h3>
      <p className="text-gray-700">
        Eczema, psoriasis, and dermatitis often flare up with exposure to low-quality water.
      </p>
    </div>
  </div>

  {/* Tip */}
  <div className="mt-12 bg-rose-100 border border-rose-400 rounded-xl p-6 text-center shadow-md">
    <p className="text-lg text-rose-700 font-medium">
      ✅ <strong>Tip:</strong> Mechanized tank cleaning ensures no sludge or bacteria is left behind — protecting your skin and your family.
    </p>
  </div>
</div>

{/* Plumbing Section */}
<div className="relative max-w-6xl mx-auto mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-4">
    How Dirty Water Tanks Cause Plumbing Problems
  </h2>
  <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
    Think your plumbing issues are due to old pipes? Think again. Dirty tanks silently damage your water system from the inside out.
  </p>

  <div className="grid md:grid-cols-2 gap-8">
    {/* 1 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">1. Sediment Buildup in Pipes</h3>
      <p className="text-gray-700">
        Sludge, sand, and rust flow into your plumbing system, reducing pressure and blocking flow.
      </p>
    </div>

    {/* 2 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">2. Damaged Faucets & Fixtures</h3>
      <p className="text-gray-700">
        Hard minerals and grit from the tank wear out taps, causing leaks or full failure.
      </p>
    </div>

    {/* 3 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">3. Pipe Corrosion</h3>
      <p className="text-gray-700">
        Contaminated water is often chemically reactive, especially in metal pipes — leading to rust and cracks.
      </p>
    </div>

    {/* 4 */}
    <div className="bg-white rounded-xl shadow p-6 border-l-4 border-rose-400">
      <h3 className="text-lg font-semibold text-rose-600 mb-1">4. Foul Water Odors</h3>
      <p className="text-gray-700">
        Bacteria and organic matter in the tank create smelly water that spreads through taps and showers.
      </p>
    </div>
  </div>
</div>

      </section>

      {/* Why Choose Us */}

      {/* Counters */}

      {/* <section ref={ref} className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div key={index} className="text-3xl font-bold">
              {inView && <CountUp end={item.end} duration={1.5} />}+
              <p className="text-lg font-normal mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Rohit Sharma",
              feedback: "Very professional and fast. Highly recommended!",
              image: "/images/user1.jpg",
            },
            {
              name: "Priya Mehra",
              feedback:
                "Cleaned our apartment tanks within hours. Great service!",
              image: "/images/user2.jpg",
            },
          ].map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h4 className="font-semibold text-lg">{t.name}</h4>
              </div>
              <p className="text-gray-600">{t.feedback}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Clean Your Tank?</h2>
        <p className="text-lg mb-6">
          Contact us today for a free quote or immediate booking.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full font-semibold transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import CountUp from 'react-countup';
// import videoBg from "../assets/video/tank-cleaning.mp4"
// import { useInView } from 'react-intersection-observer';

// const Home = () => {

//   const { ref, inView } = useInView({ triggerOnce: true });

//   const stats = [
//     { label: 'Tanks Cleaned', end: 1500 },
//     { label: 'Happy Clients', end: 1300 },
//     { label: 'Years Experience', end: 10 },
//     { label: 'Service Areas', end: 8 },
//   ];
//   return (
//     <div className="bg-white text-gray-800">
//       {/* Hero Section */}
//       <section className="relative h-[90vh] flex items-center justify-center text-center">

//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//          className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-right"
//       >
//         <source src={videoBg} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//         <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-white">Clean Tanks. Pure Water. Healthy Life.</h1>
//           <p className="text-lg md:text-xl text-white mt-4 max-w-2xl">
//             Professional water tank cleaning services at your doorstep.
//           </p>
//           <Link to="/contact">
//             <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition">
//               Book Now
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto text-center">
//   <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
//     About Nirvaan Tank Cleaning
//   </h2>
//   <p className="text-lg text-gray-700 mb-12">
//     We provide safe and effective water tank cleaning services using modern equipment and eco-friendly methods.
//   </p>

//   <div className="flex flex-col md:flex-row gap-16 justify-center items-start ">

//     {/* Left Card */}
//     <div className="bg-blue-50 border border-blue-200 rounded-lg shadow-md p-6 text-left md:w-1/3 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:animate-shake lg:rotate-[-5deg] ">
//       <h3 className="text-xl font-semibold mb-4 text-blue-700">🧹 Nirvaan: Our Services</h3>
//       <ul className="list-disc list-inside text-gray-800 space-y-2 pl-2">
//         <li>Professional water tank cleaning</li>
//         <li>Removal of algae and dirt layers</li>
//         <li>Disinfection using safe chemicals</li>
//         <li>Residential, commercial, & industrial tanks</li>
//         <li>Eco-friendly & water-saving process</li>
//       </ul>
//     </div>

//     {/* Center Image Card */}
//     <div className="bg-white rounded-lg shadow-md p-4 md:w-1/3 hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
//       <img
//         src="/images/homephoto.png"
//         alt="Tank Cleaning"
//         className="rounded-xl shadow-lg w-full h-[300px] object-cover"
//       />
//     </div>

//     {/* Right Card */}
//     <div className="bg-green-50 border border-green-200 rounded-lg shadow-md p-6 text-left md:w-1/3 transition duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:animate-shake lg:rotate-[5deg]">
//       <h3 className="text-xl font-semibold mb-4 text-green-700">🔍 Nirvaan: Core Focus</h3>
//       <ul className="list-disc list-inside text-gray-800 space-y-2 pl-2">
//         <li>Thorough & hygienic tank cleaning</li>
//         <li>Timely & professional service</li>
//         <li>Customer satisfaction is our priority</li>
//         <li>Use of modern tools & trained staff</li>
//         <li>Zero water wastage during process</li>
//       </ul>
//     </div>
//   </div>
// </section>

//       {/* Services Preview */}
//       <section className="py-16 bg-gray-100 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-10">Our Services</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { title: 'Domestic Tank Cleaning', image: '/images/domastic-tank.png' },
//               { title: 'Commercial Tank Cleaning', image: '/images/commercial-tank.png' },
//               { title: 'High Pressure Jet Cleaning', image: '/images/high-pressure-jet-cleaning.png' },
//             ].map((service, index) => (
//               <div key={index} className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition">
//                 <img src={service.image} alt={service.title} className="rounded-lg w-full h-80 object-cover" />
//                 <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             'Experienced & Trained Staff',
//             'Eco-Friendly Cleaning',
//             'Fast & Affordable Service',
//             'Modern Equipment',
//             '24/7 Support',
//             'Satisfaction Guaranteed',
//           ].map((point, index) => (
//             <div key={index} className="bg-blue-50 p-6 rounded-xl shadow text-center">
//               <h4 className="text-lg font-semibold">{point}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Counters */}

//     <section ref={ref} className="py-16 bg-blue-600 text-white text-center">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
//         {stats.map((item, index) => (
//           <div key={index} className="text-3xl font-bold">
//             {inView && <CountUp end={item.end} duration={1.5} />}+
//             <p className="text-lg font-normal mt-2">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>

//       {/* Testimonials */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {[
//             { name: 'Rohit Sharma', feedback: 'Very professional and fast. Highly recommended!', image: '/images/user1.jpg' },
//             { name: 'Priya Mehra', feedback: 'Cleaned our apartment tanks within hours. Great service!', image: '/images/user2.jpg' },
//           ].map((t, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow">
//               <div className="flex items-center gap-4 mb-4">
//                 <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
//                 <h4 className="font-semibold text-lg">{t.name}</h4>
//               </div>
//               <p className="text-gray-600">{t.feedback}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900 text-white text-center px-4">
//         <h2 className="text-3xl font-bold mb-4">Ready to Clean Your Tank?</h2>
//         <p className="text-lg mb-6">Contact us today for a free quote or immediate booking.</p>
//         <Link to="/contact">
//           <button className="px-8 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-full font-semibold transition">
//             Contact Us
//           </button>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;
