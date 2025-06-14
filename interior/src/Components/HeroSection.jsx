import React from 'react';
import Hero from '../assets/Hero.svg';
import { IoIosSearch } from "react-icons/io";

function HeroSection() {
    return (
        <div
            className="bg-cover bg-center min-h-screen w-full pt-32 flex flex-col items-center px-4 "
            style={{ backgroundImage: `url(${Hero})` }}
        >
            <p className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold max-w-4xl text-center leading-normal">
                Make Your Interior More Minimalistic & Modern
            </p>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-thin max-w-xl text-center leading-relaxed mt-4">
                Turn your room with panto into a lot more minimalist and modern with ease and speed
            </p>

            <div className="flex items-center bg-white/20 border border-white rounded-full px-4 mt-6 py-2 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search Future"
                    className="bg-transparent outline-none text-white placeholder-white flex-1 text-sm sm:text-base"
                />
                <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-2">
                    <IoIosSearch className="text-white text-xl" />
                </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    );
}

export default HeroSection;
