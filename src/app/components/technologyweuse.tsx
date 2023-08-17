import Image from 'next/image';
import React, { useState } from 'react';
import type from '../../../public/001-typescript.png';
import html from '../../../public/004-html-5.png';
import react from '../../../public/002-atom.png';
import nextjs from '../../../public/next.png';
import tailwind from '../../../public/tailwind.png';
import vue from '../../../public/vue.png';
import flutter from '../../../public/flutter.png';
import csharp from '../../../public/005-c-sharp.png';
import django from '../../../public/django.png';
import dart from '../../../public/dart.png';
import dotnet from '../../../public/dotnet.png';
import python from '../../../public/003-python.png';
import redux from '../../../public/redux.png';
import sqllite from '../../../public/sqllite.png';
import mongo from '../../../public/mongo.png';
import oracle from '../../../public/oracle.png';
import sqlserver from '../../../public/sqlserver.png';
import azure from '../../../public/azure.png';
import nodejs from '../../../public/node-js.png';
import sanity from '../../../public/sanity.png';
const TechlogyWeUse = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(
    'front-end'
  );
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName);
  };
  const renderDiv = () => {
    switch (selectedButton) {
      case 'front-end':
        return (
          <section className="text-gray-600  mt-5 rounded-lg body-font">
            <div className="container px-5  py-8 mx-auto">
              <div className="md:flex md:flex-wrap justify-center grid grid-rows-4 grid-flow-col   -m-4  text-center">
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36  shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image className="p-4" width={200} src={html} alt="html" />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={type}
                      alt="typescript"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={react}
                      alt="react"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={tailwind}
                      alt="tailwindcss"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={nextjs}
                      alt="nextjs"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={flutter}
                      alt="flutter"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image className="p-4" width={200} src={vue} alt="vue" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'back-end':
        return (
          <section className="text-gray-600 -mt-10 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="md:flex md:flex-wrap justify-center grid grid-rows-4 grid-flow-col  -m-4 text-center">
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image className="p-4" width={200} src={dart} alt="dart" />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={django}
                      alt="django"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={csharp}
                      alt="csharp"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={dotnet}
                      alt="dotnet"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={python}
                      alt="python"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={redux}
                      alt="redux"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={nodejs}
                      alt="nodejs"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={sanity}
                      alt="sanity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'database':
        return (
          <section className="text-gray-600 -mt-10 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="md:flex md:flex-wrap justify-center grid grid-rows-4 grid-cols-2 gap-4 lg:gap-8 -m-4 text-center">
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4 "
                      width={200}
                      src={azure}
                      alt="azure"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4 "
                      width={200}
                      src={sqllite}
                      alt="sqllite"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36 shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={sqlserver}
                      alt="sqlserver"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36  shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={oracle}
                      alt="oracle"
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/6 sm:w-1/6 ">
                  <div className="border-2 hover:scale-110 hover:animate-pulse hover:duration-300 border-zinc-500 md:w-44 w-36  shadow-lg bg-zinc-200 px-4 py-2 rounded-lg">
                    <Image
                      className="p-4"
                      width={200}
                      src={mongo}
                      alt="mongo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
  };
  return (
    <div className="p-4  ">
      <div className="flex text-center justify-center row space-x-4">
        <button
          className={`btn  ${
            selectedButton === 'front-end' ? 'bg-zinc-700 text-white ' : ''
          }`}
          onClick={() => handleButtonClick('front-end')}
        >
          Front-end
        </button>
        <button
          className={`btn  ${
            selectedButton === 'back-end' ? ' bg-zinc-700 text-white ' : ''
          }`}
          onClick={() => handleButtonClick('back-end')}
        >
          Back-end
        </button>
        <button
          className={`btn   ${
            selectedButton === 'database' ? 'bg-zinc-700 text-white ' : ''
          }`}
          onClick={() => handleButtonClick('database')}
        >
          Database
        </button>
      </div>
      {renderDiv()}
    </div>
  );
};

export default TechlogyWeUse;
