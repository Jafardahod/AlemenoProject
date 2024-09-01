import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <NavLink href="https://alemeno.io/" className="flex justify-center ">
            <div
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="../../public/logo.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </div>
          </NavLink>
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
            <li>
              <NavLink href="#" className="text-gray-800 hover:text-gray-900">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className=" text-gray-800 hover:text-gray-900">
                My Dashboard
              </NavLink>
            </li>
          </ul>
          <span className="text-lg text-gray-500 text-center block">
            ©<NavLink href="https://alemeno.io/">alemeno</NavLink> 2024, All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
