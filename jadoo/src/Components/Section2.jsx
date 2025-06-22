import React from 'react';
import s21 from "../assets/s21.png";
import { FaLocationArrow } from 'react-icons/fa6';

const destinations = [
    { title: "Rome, Italy", price: "$5,42k", duration: "10 Days Trip", image: s21 },
    { title: "Paris, France", price: "$4,22k", duration: "7 Days Trip", image: s21 },
    { title: "London, UK", price: "$6,75k", duration: "12 Days Trip", image: s21 },
];

const DestinationCard = ({ title, price, duration, image }) => (
    <div className='bg-white rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105 max-w-sm mx-auto'>
        <img src={image} alt={title} className="w-full  object-cover" />
        <div className="p-4">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
                <span className="text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded">{price}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
                <FaLocationArrow className="mr-2 text-indigo-500" />
                <span>{duration}</span>
            </div>
        </div>
    </div>
);

function Section2() {
    return (
        <div className='py-14 px-4 md:px-16 lg:px-28 font-semibold '>
            <h2 className='text-center text-gray-500 text-base md:text-lg tracking-widest'>Top Selling</h2>
            <h1 className='text-center text-indigo-950 text-3xl sm:text-4xl md:text-5xl font-bold py-6'>
                Top Destinations
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10'>
                {destinations.map((dest, index) => (
                    <DestinationCard key={index} {...dest} />
                ))}
            </div>
        </div>
    );
}

export default Section2;
