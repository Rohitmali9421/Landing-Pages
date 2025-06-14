import React, { useRef } from 'react';
import Chair1 from "../assets/Chair1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Section2() {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='w-full flex flex-col items-center bg-gray-200 py-12 '>
            {/* Title */}
            <h1 className='text-3xl md:text-4xl font-semibold text-center px-4'>Best Selling Product</h1>

            {/* Category Buttons */}
            <div className='list-none flex flex-wrap justify-center gap-2 p-2 bg-gray-300 rounded-full mt-8'>
                <li className='px-4 py-2 bg-white rounded-full cursor-pointer'>Chair</li>
                <li className='px-4 py-2 rounded-full cursor-pointer'>Beds</li>
                <li className='px-4 py-2 rounded-full cursor-pointer'>Sofa</li>
                <li className='px-4 py-2 rounded-full cursor-pointer'>Lamp</li>
            </div>

            {/* Carousel */}
            <div className='relative w-full mt-10'>
                {/* Scroll Buttons */}
                <button
                    onClick={scrollLeft}
                    className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 "
                >
                    <FaChevronLeft className='text-gray-600' />
                </button>
                <button
                    onClick={scrollRight}
                    className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 "
                >
                    <FaChevronRight className='text-gray-600' />
                </button>

                {/* Carousel Items */}
                <div
                    ref={carouselRef}
                    className='flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 md:px-20 lg:px-40 py-4'
                >
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="min-w-[70%] sm:min-w-[300px] md:min-w-[250px] bg-white rounded-2xl flex flex-col items-center text-center text-black shadow-md hover:shadow-xl transition-all duration-300 snap-center"
                        >
                            <img
                                src={Chair1}
                                alt="Chair"
                                className="w-full object-contain p-4 bg-white/50 rounded-t-2xl overflow-hidden"
                            />
                            <div className='bg-white w-full rounded-b-2xl p-4 text-start gap-2 flex flex-col'>
                                <p className="text-sm text-gray-400 uppercase">Chair</p>
                                <h1 className="text-base md:text-lg font-semibold">Sakarias Armchair</h1>
                                <div className="flex gap-1">
                                    {Array(5).fill(0).map((_, index) => (
                                        <span key={index}>⭐</span>
                                    ))}
                                </div>
                                <div className="text-base md:text-lg font-bold">$450</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Section2;
