import Image from 'next/image';
import React from 'react';
import phone from '../../../public/phone.svg';
const Footer = () => {
  return (
    <footer className="text-gray-600 bg-zinc-100 dark:bg-neutral-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* <Image src={logo} alt="logo" width={50} height={50} /> */}
          <span className="ml-3 text-xl bg-gradient-to-r from-pink-500 to-blue-900 bg-clip-text text-transparent ">
            MagnaTech
          </span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 MagnaTech - all rights reserved
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4  justify-center sm:justify-start">
          <a
            href="https://www.facebook.com/magnatech.iraq"
            className="text-gray-500 hover:text-pink-500 hover:duration-500 "
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/magnatech.group/"
            className="ml-3 text-gray-500 hover:text-pink-500 duration-500"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-Width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/magnatech-group/"
            className="ml-3 text-gray-500  hover:text-pink-500 duration-500"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-Width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>

          <a
            className="ml-4 font-semibold text-gray-500 hover:text-pink-500 duration-500"
            href="tel:0773-441-0060"
          >
            0773-441-0060
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
