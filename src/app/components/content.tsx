import React from 'react';
import ServiceSlider from './serviceslider';
import WhyChooseUs from './whychooseus';
import TechlogyWeUse from './technologyweuse';

const Content = () => {
  return (
    <div>
      <section className="text-gray-600  bg-zinc-100 dark:bg-neutral-800 body-font  ">
        <div className="container px-12 py-12 mx-auto">
          {/* First section */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl md:text-5xl text-3xl  font-bold title-font dark:text-zinc-100">
              We Make sure you get the best{' '}
              <span className="text-[#CC444B]">Experience</span> with our
              solutions
            </h1>
            <p className=" mt-5 md:text-3xl  text-lg max-w-3xl md:ml-[14rem] ml-0 dark:text-zinc-200 text-zinc-700  ">
              Our team of experienced professionals is committed to delivering
              excellence in every aspect of your software development journey.
              We take pride in our customer-centric approach.
            </p>
          </div>
          {/* Second section */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl md:text-5xl text-3xl  font-bold title-font dark:text-zinc-200 text-gray-900">
              Why Choose Us.{' '}
            </h1>
            <WhyChooseUs />
          </div>
          <p className=" mt-5 md:text-5xl text-2xl font-bold text-center dark:text-zinc-200 text-gray-900 mb-14 max-w-3xl md:ml-[14rem] ml-0 ">
            <span className="text-secondary ">Services</span> We Provide
          </p>
          {/* div card */}
          <div className="flex flex-wrap  mt-10 -m-4">
            {/*  Card content*/}

            <ServiceSlider />
          </div>
          {/* technology we use */}
          <p className=" mt-24 -mb-10 md:text-5xl text-2xl font-bold text-center dark:text-zinc-200 text-gray-900 max-w-3xl md:ml-[14rem] ml-0 ">
            <span className="text-secondary">Technology</span> we use.
          </p>
        </div>
        <TechlogyWeUse />
      </section>
    </div>
  );
};

export default Content;
