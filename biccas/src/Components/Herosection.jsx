import React from 'react';
import hero from "../assets/hero.png";
import line from "../assets/line.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaUnsplash } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { SiIntercom } from "react-icons/si";
import { MdDescription } from "react-icons/md";
import { SiGrammarly } from "react-icons/si";
function Herosection() {
    const companies = [
        { text: "Unsplash", logo: <FaUnsplash /> },
        { text: "Notion", logo: <SiNotion /> },
        { text: "INTERCOM", logo: <SiIntercom /> },
        { text: "Descript", logo: <MdDescription /> },
        { text: "Grammarly", logo: <SiGrammarly /> },
    ];
    return (
        <div className='overflow-hidden relative'>
            <div className="absolute -top-1/2 -left-1/2 translate-x-1/2  
                    w-[50rem] h-[50rem] bg-emerald-400/20 rounded-full blur-3xl z-0">
            </div>

            <div className="w-full min-h-screen bg-white grid grid-cols-1 md:grid-cols-2 items-center pt-20 md:pt-16">
                {/* Left Section */}
                <div className="px-6 sm:px-12 md:px-16 lg:px-28 flex flex-col gap-6 items-center text-center md:items-start md:text-left z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
                        We’re here to Increase your Productivity
                    </h1>
                    <img className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 mx-auto md:mx-0" src={line} alt="line design" />
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
                        Let's make your work more organized and easy using the Taskio Dashboard with many of the latest features in managing work every day.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                        <button className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 transition rounded-full text-white font-medium">
                            Try free trial
                        </button>
                        <button className="flex items-center gap-2 text-emerald-500 font-medium hover:underline">
                            <IoPlayCircleOutline className="text-3xl" />
                            <span>View Demo</span>
                        </button>
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex justify-center p-6 md:p-12">
                    <img
                        className="w-4/5 sm:w-3/4 md:w-full max-w-lg rounded-3xl drop-shadow-2xl"
                        src={hero}
                        alt="hero"
                    />
                </div>
            </div>
            <div className='w-full px-6 sm:px-12 md:px-16 lg:px-28'>
                <h1 className='w-full text-center text-3xl sm:text-4xl font-bold py-6'>
                    More than 25,000 teams use Collabs
                </h1>
                <div className='flex flex-wrap justify-center sm:justify-evenly items-center gap-6 py-6'>
                    {companies.map((item, i) => (
                        <div
                            key={i}
                            className='flex items-center gap-2 text-2xl sm:text-3xl font-bold text-gray-500'
                        >
                            {item.logo && <span>{item.logo}</span>}
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Herosection;
