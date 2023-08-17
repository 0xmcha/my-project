'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import windowsapp from '../../../public/windows application.png';
import webdev from '../../../public/webdev.png';
import mobile from '../../../public/mobile.png';
import management from '../../../public/management.png';
import Link from 'next/link';
const ServiceSlider = () => {
  return (
    <div className="swiper-container w-full h-[500px]">
      <Swiper
        className="mySwiper w-full h-full"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        {/* First Card */}
        <SwiperSlide>
          <div className="card md:ml-0  dark:bg-zinc-800 ml-1 w-[18rem] min-h-[95%] sm:w-96 bg-base-100 cursor-pointer shadow-xl">
            <figure className="px-10 pt-10">
              <Image
                src={windowsapp}
                alt="logo"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title dark:text-secondary text-gray-900">
                Custom Application
              </h2>
              <p className="dark:text-zinc-100 text-gray-900">
                Elevate your productivity with our immersive and powerful Custom
                applications.
              </p>
              <div className="card-actions">
                <Link href="/contact">
                  {' '}
                  <button className="btn btn-secondary mt-1 text-zinc-100">
                    Request Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Second Card */}
        <SwiperSlide>
          <div className="card dark:bg-zinc-800  md:ml-0 ml-1 w-[18rem] min-h-[95%] sm:w-96 bg-base-100 cursor-pointer shadow-xl">
            <figure className="px-10 mb-6 pt-10">
              <Image
                src={webdev}
                alt="logo"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title dark:text-secondary text-gray-900">
                Web Development
              </h2>
              <p className="dark:text-zinc-100 text-gray-900">
                We specialize in creating stunning and responsive websites
                tailored to your business needs.
              </p>
              <div className="card-actions">
                <Link href="/contact">
                  {' '}
                  <button className="btn btn-secondary mt-1 text-zinc-100">
                    Request Now
                  </button>
                </Link>
              </div>
            </div>
          </div>{' '}
        </SwiperSlide>
        {/* Third */}
        <SwiperSlide>
          <div className="card dark:bg-zinc-800  md:ml-0 ml-1 w-[18rem] min-h-[95%]  sm:w-96 bg-base-100 cursor-pointer shadow-xl">
            <figure className="px-10 -mb-4 pt-10">
              <Image
                src={mobile}
                alt="logo"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title dark:text-secondary text-gray-900">
                Mobile Development
              </h2>
              <p className="mt-5 dark:text-zinc-100 text-gray-900">
                Reach a broader audience with our custom mobile applications for
                Android and iOS.
              </p>
              <div className="card-actions">
                <Link href="/contact">
                  {' '}
                  <button className="btn btn-secondary mt-1 text-zinc-100">
                    Request Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Fourth */}
        <SwiperSlide>
          <div className="card  dark:bg-zinc-800 md:ml-0 ml-1 w-[18rem] min-h-[95%] sm:w-96 bg-base-100 cursor-pointer shadow-xl">
            <figure className="px-10 -mb-4 pt-10">
              <Image
                src={management}
                alt="logo"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title dark:text-secondary text-gray-900">
                Management Service
              </h2>
              <p className="dark:text-zinc-100 text-gray-900">
                our team will Manage and Service your web & app for you so you
                can foucs on your business.
              </p>
              <div className="card-actions">
                <Link href="/contact">
                  {' '}
                  <button className="btn btn-secondary mt-1 text-zinc-100">
                    Request Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
