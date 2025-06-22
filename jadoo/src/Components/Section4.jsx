import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RiTelegram2Fill } from "react-icons/ri";

function Section4() {
    return (
        <div className="w-full px-4 md:px-16 lg:px-28 pb-12">
            <div className="p-6 rounded-tl-3xl rounded-br-3xl bg-gray-50 py-16 sm:py-20 relative ">

                {/* Telegram Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-400 to-pink-500 absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 rounded-full flex justify-center items-center shadow-md">
                    <RiTelegram2Fill className="text-white text-2xl sm:text-3xl" />
                </div>

                {/* Title */}
                <h1 className="w-full max-w-3xl text-center mx-auto text-2xl sm:text-3xl font-bold text-indigo-950 leading-snug px-2">
                    Subscribe to get information, latest news and other interesting offers about <span className="text-pink-500">Jadoo</span>
                </h1>

                {/* Form */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 sm:mt-16 max-w-xl mx-auto w-full px-2">
                    {/* Email Input Field */}
                    <div className="flex items-center bg-white border-2 border-purple-500 rounded-md px-4 py-3 w-full">
                        <HiOutlineMail className="text-gray-500 mr-2 text-xl" />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="outline-none w-full text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                        />
                    </div>

                    {/* Subscribe Button */}
                    <button className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition text-sm sm:text-base">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Section4;
