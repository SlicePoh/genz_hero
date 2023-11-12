import React from 'react'
import s from '../style'


export const Footer = () => {
  return (
    <div className="bg-black px-5 py-12 w-full">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-center">
            <a
              href="mailto:shanitpaul22@gmail.com"
              className="text-gray-300 hover:text-gray-400"
            >
              Men
            </a>
            <a
              href="mailto:shanitpaul22@gmail.com"
              className="text-gray-300 hover:text-gray-400"
            >
              Women
            </a>
            <a
              href="mailto:shanitpaul22@gmail.com"
              className="text-gray-300 hover:text-gray-400"
            >
              Kids
            </a>
            <a
              href="mailto:shanitpaul22@gmail.com"
              className="text-gray-300 hover:text-gray-400"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <a href="/" className="text-gray-300 hover:text-gray-400">
            FAQ
          </a>
          <a
            href="/"
            className="text-gray-300 hover:text-gray-400"
          >
            Order And Return Status
          </a>
          <a href="/" className="text-gray-300 hover:text-gray-400">
            Returns
          </a>
          <a href="/" className="text-gray-300 hover:text-gray-400">
            Store Locator
          </a>
          <a href="/" className="text-gray-300 hover:text-gray-400">
            Accessibility
          </a>
        </div>

        <div className="flex flex-col gap-4 text-center">
          <a href="/" target="_blank" className="text-gray-300 hover:text-gray-400">
            Terms of Use
          </a>
          <a href="/" target="_blank" className="text-gray-300 hover:text-gray-400">
            About
          </a>
          <a href="/" target="_blank" className="text-gray-300 hover:text-gray-400">
            EULA
          </a>
          <a href="/" target="_blank" className="text-gray-300 hover:text-gray-400">
            Careers
          </a>
          <a href="/" target="_blank" className="text-gray-300 hover:text-gray-400">
            Supply Chain act
          </a>
        </div>
      </div>

      <p className="text-gray-600 text-center mt-8">
        Quirk Production Centre and Showroom, Barrackpore, Kolkata 700 001, India
      </p>
    </div>
  );
};
