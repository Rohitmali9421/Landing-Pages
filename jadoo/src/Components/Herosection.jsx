import React from 'react';
import hero from "../assets/hero.png";
import hero2 from "../assets/hero2.png";
import { IoPlayCircleOutline } from 'react-icons/io5';

function Herosection() {
    return (
        <div className='pt-20 grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 lg:px-28 relative overflow-hidden'>
            <img
                className='w-[80vh] hidden md:block absolute -top-40 -right-20 z-0 '
                src={hero2}
                alt=""
            />
            {/* Left Section */}
            <div className='flex flex-col gap-6 py-10 md:py-20 text-center md:text-left'>
                <h1 className='text-[#DF6951] font-bold text-sm md:text-base lg:text-xl uppercase'>
                    Best Destinations around the world
                </h1>
                <h1 className='text-indigo-950 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                    Travel, enjoy and live a new and full life
                </h1>
                <p className='text-gray-600 font-medium leading-snug text-sm sm:text-base'>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                    <button className="px-5 py-3 bg-yellow-500 hover:bg-yellow-600 transition rounded-xl text-white font-medium">
                        Find out more
                    </button>
                    <button className="flex items-center gap-2 font-medium hover:underline">
                        <IoPlayCircleOutline className="text-3xl text-[#DF6951]" />
                        <span className='text-gray-700'>View Demo</span>
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className=' mt-10 md:mt-0 flex justify-center items-center'>

                <img
                    className='relative z-20 '
                    src={hero}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Herosection;
