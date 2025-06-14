import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import t1 from "../assets/t1.png"; // background image

function Section3() {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='w-full flex flex-col items-center bg-white py-20'>
            {/* Titles */}
            <h1 className='text-sm md:text-base text-orange-500 font-thin uppercase text-center px-4 py-2'>
                T e s t i m o n i a l s
            </h1>
            <h2 className='text-2xl md:text-4xl font-semibold text-center px-4'>
                Our Client Reviews
            </h2>

            {/* Carousel Section */}
            <div className='relative w-full mt-10 px-6 '>
                {/* Scroll Buttons (desktop only) */}
                <button
                    onClick={scrollLeft}
                    className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                >
                    <FaChevronLeft className='text-gray-600' />
                </button>
                <button
                    onClick={scrollRight}
                    className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
                >
                    <FaChevronRight className='text-gray-600' />
                </button>

                {/* Carousel Items */}
                <div
                    ref={carouselRef}
                    className='flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 md:px-20 lg:px-40 py-4 '
                >
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] snap-start bg-cover bg-center pt-60 rounded-2xl p-4 relative shadow-lg"
                            style={{ backgroundImage: `url(${t1})` }}
                        >
                            {/* White Card */}
                            <div className='relative bg-white p-6 pt-16 flex flex-col rounded-2xl gap-2 items-center shadow-md'>
                                {/* Circular Image */}
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                    <img
                                        className="w-20 h-20 rounded-full border-4 border-white object-cover"
                                        src="https://i.pravatar.cc/100"
                                        alt="Client"
                                    />
                                </div>

                                {/* Text Content */}
                                <h3 className='text-lg md:text-xl font-bold'>Bang Upin</h3>
                                <p className='text-xs md:text-sm text-gray-600'>Pedagang Asongan</p>
                                <p className='text-sm text-gray-800 mt-4 text-center px-2 md:px-4'>
                                    "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat maha"
                                </p>
                                <div className='mt-4 text-orange-400 text-lg'>⭐⭐⭐⭐⭐</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Section3;
