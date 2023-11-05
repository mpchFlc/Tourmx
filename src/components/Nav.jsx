import React, { useState, useEffect } from "react";
import { menu, xmark } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-4 py-3 bg-gray-800 text-white sticky top-0 z-50 ${isScrolled ? "scrolled" : ""
        }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <a href="/" className="text-2xl font-semibold">
          <img src={headerLogo} alt="logo" className="w-32" />
        </a>
        <ul className="hidden space-x-6 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-blue-500 transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <button className="text-white" onClick={toggleMobileMenu}>
            {isMobileMenuVisible ? <img src={xmark} alt="menu icon" className="w-6 h-6" /> : <img src={menu} alt="menu icon" className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <div className={isMobileMenuVisible ? '' : 'hidden'} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 text-center">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Nav;
