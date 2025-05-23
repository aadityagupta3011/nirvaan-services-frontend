import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-[#121212] text-white px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        {/* Logo + Description */}
        <div>
          <img src="/images/logo.png" alt="Logo" className="w-40 mb-4" />
          <p className="text-gray-300 text-sm">
            Nirvaan accepts challenges to serve cleaning solutions for individuals, corporations, industries, and governments.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-orange-500 transition"><FaFacebookF /></a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-orange-500 transition"><FaInstagram /></a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-orange-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/about">About</Link></li>
            <li><Link to={"/services"} >Services</Link></li>
            <li><Link to={"/Contact"}>Contact</Link></li>

          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Service</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Mechanised Water Tank Cleaning</li>
          </ul>
        </div>

        {/* Empty column (since we're removing newsletter) */}
        <div></div>
      </div>

      <hr className="border-gray-600 mb-4" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Nirvaan Tank Cleaning Services. Managed by <span className="text-orange-500">Aaditya Gupta</span>.
      </p>
    </footer>
  );
}

export default Footer;
 