
import React from 'react';
import s4 from "../assets/s4.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Section5() {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20  py-12'>
            {/* Image */}


            {/* Text Content */}
            <div className='flex flex-col gap-4  px-4 md:px-12 lg:px-24'>
                <h1 className='text-xs md:text-sm text-orange-500 font-medium uppercase tracking-widest'>
                    M a t e r i a l s
                </h1>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-snug'>
                    Very serious materials for making furniture
                </h2>

                <p className='text-sm md:text-base text-gray-700 leading-relaxed'>
                    Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
                </p>

                <button className="text-orange-600 mt-4 text-sm flex gap-2 items-center">
                    More Info <FaArrowRightLong />
                </button>
            </div>
            <img src={s4} alt="experience" className='w-full h-auto object-cover' />
        </div>
    );
}

export default Section5;
