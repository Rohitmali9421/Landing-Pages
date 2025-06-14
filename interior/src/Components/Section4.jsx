import React from 'react';
import s3 from "../assets/s3.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Section4() {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20  py-12'>
            {/* Image */}
            <img src={s3} alt="experience" className='w-full h-auto object-cover' />

            {/* Text Content */}
            <div className='flex flex-col gap-4 px-4 md:px-0 md:pr-6'>
                <h1 className='text-xs md:text-sm text-orange-500 font-medium uppercase tracking-widest'>
                    e x p e r i e n c e s
                </h1>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-snug'>
                    We provide you the best experience
                </h2>

                <p className='text-sm md:text-base text-gray-700 leading-relaxed'>
                    You don’t have to worry about the result because all of these interiors are made by people
                    who are professionals in their fields with an elegant and luxurious style and with premium
                    quality materials.
                </p>

                <button className="text-orange-600 mt-4 text-sm flex gap-2 items-center">
                    More Info <FaArrowRightLong />
                </button>
            </div>
        </div>
    );
}

export default Section4;
