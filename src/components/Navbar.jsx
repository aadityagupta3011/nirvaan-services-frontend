// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Services",  "Contact"];

  return (
    <nav className=" bg-black shadow-md sticky top-0 z-50 rounded-b-xl  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Nirvaan Logo"
              className="h-16 w-auto"
            />
          </Link>

          <Link to="/" className="text-2xl mt-2 font-bold  text-white">
            Nirvaan
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 ">
          {navItems.map((item, index) => {
            const path =
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <Link
                key={index}
                to={path}
                className="relative px-3 py-2 text-white rounded-xl transition duration-300 ease-in-out group hover:bg-white hover:shadow-md hover:text-black">
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden bg-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-lg">
          {navItems.map((item, index) => {
            const path =
              item === "Home"
                ? "/"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <Link
                key={index}
                to={path}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-all duration-300">
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
