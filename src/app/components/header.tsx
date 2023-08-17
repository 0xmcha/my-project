import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/logo.png';
const Header = () => {
  return (
    <header className="text-gray-500 dark:bg-zinc-900 bg-zinc-100 backdrop-blur-md shadow-xl  body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src={logo} alt="logo" width={50} height={50} />
          <span className="ml-3 text-xl bg-gradient-to-r from-pink-500 to-blue-900 bg-clip-text text-transparent ">
            MagnaTech
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
          <Link
            href="/"
            className="mr-5  hover:duration-300 hover:font-semibold hover:text-pink-500 "
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="mr-5  hover:duration-300 hover:font-semibold hover:text-pink-500 "
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="mr-5  hover:duration-300 hover:font-semibold hover:text-pink-500 "
          >
            Blog
          </Link>
        </nav>
        <button className="inline-flex items-center mt-4 md:mt-0 lg:mt-0 px-4 md:px-6 py-2 md:py-3 border border-gray-700 rounded transition-all duration-200 ease-in font-bold z-10 dark:text-white text-gray-900 dark:hover:text-white hover:text-pink-500 hover:border-pink-500 group">
          <Link href="/contact">Contact</Link>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-Width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          <span className="absolute left-1/2 hidden w-2/3 h-3/2 bg-gray-200 rounded-full group-hover:block transform -translate-x-1/2 -translate-y-1/2 scale-x-125 scale-y-150 origin-bottom transition-all duration-500 ease-in-out"></span>
          <span className="absolute left-1/2 hidden w-3/4 h-3/2 bg-teal-500 rounded-full group-hover:block transform -translate-x-1/2 -translate-y-1/2 scale-x-145 scale-y-190 origin-bottom transition-all duration-500 ease-in-out"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
