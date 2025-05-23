import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    lane: "",
    street: "",
    plot: "",
    message: "",
  });

  // Check if required fields are filled
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.contact.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.address.trim() !== "";

  // Handle input changes
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-white py-16 px-6">
      {/* Background logo */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="/images/logo.png"
          alt="Background Logo"
          className="w-96 opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in">
          <img
            src="/images/contact-form-photo.png"
            alt="Tank cleaning"
            className="w-60 mx-auto"
          />
          <h2 className="text-3xl font-extrabold text-blue-700 justify-center flex">
            Clean Tanks, Healthy Homes
          </h2>
          <p className="text-gray-700 flex justify-center">
            Reach out for professional tank cleaning services. We ensure hygiene,
            safety, and clean water for your family or business.
          </p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-xl p-8 space-y-4 animate-fade-in delay-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
  type="text"
  name="name"
  placeholder="Name"
  value={formData.name}
  onChange={handleChange}
  className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
/>

<input
  type="tel"
  name="contact"
  placeholder="Contact Number"
  value={formData.contact}
  onChange={handleChange}
  className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
/>

            <input
  type="email"
  name="email"
  placeholder="Email ID"
  value={formData.email}
  onChange={handleChange}
  className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
/>

<input
  type="text"
  name="address"
  placeholder="Address"
  value={formData.address}
  onChange={handleChange}
  className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
/>

            <input
              type="text"
              placeholder="Lane"
              value={formData.lane}
              onChange={handleChange}
              className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Street"
              value={formData.street}
              onChange={handleChange}
              className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="text"
              placeholder="Plot Number"
              value={formData.plot}
              onChange={handleChange}
              className="w-full border border-black rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-black rounded-lg px-4 py-2 resize-none focus:outline-blue-500"
            rows="4"
          ></textarea>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold transition ${
              isFormValid
                ? "hover:from-blue-600 hover:to-teal-600"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
