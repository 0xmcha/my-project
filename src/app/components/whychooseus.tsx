import Image from 'next/image';
import React from 'react';
import quality from '../../../public/quality.png';
import cost from '../../../public/cost.png';
import time from '../../../public/time1.png';
import tech from '../../../public/tech1.png';
import security from '../../../public/security.png';
const WhyChooseUs = () => {
  return (
    <section className="text-gray-600 body-font ">
      <div className="container  py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap   -m-4">
          <div className="p-4 lg:w-1/3  md:w-full">
            <div className="flex border-2 hover:scale-105  hover:duration-500 hover:cursor-pointer rounded-lg h-full items-center border-gray-200 shadow-lg border-opacity-50 p-8 sm:flex-col flex-col">
              <div className="w-16 h-16 sm:mr-8  sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full   flex-shrink-1">
                <Image
                  className="bg-zinc-100 rounded-full"
                  src={quality}
                  alt="quality"
                />
                <h2 className="dark:text-zinc-100 text-gray-900 md:text-3xl text-xl md:ml-4 ml-0 title-font font-medium mb-3">
                  Quality
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base mt-4 dark:text-zinc-200 text-gray-900">
                  At <span className="text-pink-500">MagnaTech</span>, quality
                  is at the heart of everything we do. We strive for perfection
                  in our projects, ensuring that each deliverable meets the
                  highest industry standards.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-full">
            <div className="flex border-2 dark:bg-neutral-800 hover:scale-105 hover:duration-500 hover:cursor-pointer rounded-lg h-full items-center border-gray-200 shadow-lg border-opacity-50 p-8 sm:flex-col flex-col">
              <div className="w-16 h-16 sm:mr-8  sm:mb-0 mb-4 inline-flex items-center  justify-center rounded-full   flex-shrink-1">
                <Image
                  className="bg-zinc-100 rounded-full"
                  src={time}
                  alt="quality"
                />
                <h2 className="dark:text-zinc-200 text-gray-900 md:text-3xl text-xl md:ml-4 ml-0 title-font font-medium mb-3">
                  Time
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base mt-4 dark:text-zinc-200 text-gray-900">
                  We value your time and are dedicated to timely delivery. Our
                  efficient project management ensures that your project is
                  completed within the agreed-upon schedule.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3  md:w-full">
            <div className="flex border-2 dark:bg-neutral-800 hover:scale-105 hover:duration-500 hover:cursor-pointer rounded-lg h-full items-center border-gray-200 shadow-lg border-opacity-50 p-8 sm:flex-col flex-col">
              <div className="w-16 h-16 sm:mr-8  sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full  flex-shrink-1">
                <Image
                  className="bg-zinc-100 rounded-full"
                  src={cost}
                  alt="quality"
                />
                <h2 className="dark:text-zinc-200 text-gray-900 md:text-3xl text-xl md:ml-4 ml-0 title-font font-medium mb-3">
                  Cost
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base mt-4 dark:text-zinc-200 text-gray-900">
                  We are committed to providing cost-effective solutions
                  tailored to your budget. Our transparent pricing and efficient
                  practices ensure you get the best value for your investment.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 dark:bg-neutral-800 bg-zinc-100 hover:scale-105 hover:duration-500 hover:cursor-pointer rounded-lg border-gray-200 shadow-lg border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex text-center items-center justify-center rounded-full bg-zinc-100 text-pink-500 flex-shrink-0">
                <Image src={security} alt="quality" />
              </div>
              <div className="flex-grow">
                <h2 className="dark:text-zinc-200 text-gray-900 md:text-3xl text-xl title-font font-medium mb-3">
                  Security
                </h2>
                <p className="leading-relaxed text-base mt-4 dark:text-zinc-200 text-gray-900">
                  Your data and digital assets are of utmost importance to us.
                  With a robust approach to security, we prioritize safeguarding
                  your information against any potential threats.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 dark:bg-neutral-800 bg-zinc-100 hover:scale-105 hover:duration-500 hover:cursor-pointer  rounded-lg border-gray-200 shadow-lg border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-zinc-100 text-pink-500 flex-shrink-0">
                <Image src={tech} alt="quality" />
              </div>
              <div className="flex-grow">
                <h2 className="dark:text-zinc-200 text-gray-900 md:text-3xl text-xl title-font font-medium mb-3">
                  Technology
                </h2>
                <p className="leading-relaxed text-base mt-4 dark:text-zinc-200 text-gray-900">
                  At <span className="text-pink-500">MagnaTech</span>, we stay
                  ahead of the technology curve. Our team of tech-savvy experts
                  embraces the latest tools and technologies to develop
                  cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
