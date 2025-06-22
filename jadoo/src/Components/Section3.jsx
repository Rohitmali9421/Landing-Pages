import React from 'react';
import s31 from '../assets/s31.png';
import { LuSquareMousePointer } from 'react-icons/lu';

function Section3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full px-4 md:px-16 lg:px-28 py-12 gap-10">
      {/* Left Section - Text */}
      <div>
        <h2 className="text-gray-500 text-sm md:text-lg tracking-widest mb-2">Easy and Fast</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-950 mb-6">
          Book your next trip in 3 easy steps
        </h1>

        <div className="flex flex-col gap-6">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="flex items-start gap-4 bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 text-white rounded-2xl">
                <LuSquareMousePointer className="text-3xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Choose Destination</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center">
        <img src={s31} alt="Travel steps illustration" className="w-full  object-contain" />
      </div>
    </div>
  );
}

export default Section3;
