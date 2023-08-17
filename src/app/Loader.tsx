'use client';
import React from 'react';
import { RotateSpinner } from 'react-spinners-kit';

export default function Loader() {
  return (
    <div className="bg-neutral-900 h-screen text-center flex justify-center">
      <div className="mt-[14rem] ">
        <RotateSpinner color="#CC444B" size={100} />
      </div>
    </div>
  );
}
