import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Section1() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-40 md:px-20 px-8 py-28">

            <div className="text-3xl sm:text-4xl px-4 font-bold flex justify-center items-center text-center sm:text-start">
                Why Choosing Us
            </div>

            <div>
                <h1 className="text-xl sm:text-2xl font-semibold">Luxury Facilities</h1>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                    The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
                </p>
                <button className="text-orange-600 mt-4 text-sm flex gap-2 items-center">
                    Many Choices <FaArrowRightLong />
                </button>
            </div>

            <div>
                <h1 className="text-xl sm:text-2xl font-semibold">Luxury Facilities</h1>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                    The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
                </p>
                <button className="text-orange-600 mt-4 text-sm flex gap-2 items-center">
                    Many Choices <FaArrowRightLong />
                </button>
            </div>

            <div>
                <h1 className="text-xl sm:text-2xl font-semibold">Luxury Facilities</h1>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                    The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
                </p>
                <button className="text-orange-600 mt-4 text-sm flex gap-2 items-center">
                    Many Choices <FaArrowRightLong />
                </button>
            </div>

        </div>
    )
}

export default Section1
