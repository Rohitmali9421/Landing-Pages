import React from 'react';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';

function Section2() {
    return (
        <div className="w-full py-20 px-4 md:px-16 lg:px-28 bg-white">
            {/* Header Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    Our Features You Can Get
                </h1>
                <p className="text-base md:text-lg text-gray-500 font-light">
                    We offer a variety of interesting features that can help increase your productivity at work and manage your projects easily.
                </p>
                <div className="flex justify-center ">
                    <button className="bg-emerald-400 hover:bg-emerald-500 transition-colors text-white py-3 px-6 rounded-full">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Features Cards Section */}
            <div className="grid grid-cols-1  md:grid-cols-3 gap-8 pt-16">
                {[{ img: s2 }, { img: s3 }, { img: s4 }].map((item, index) => (
                    <div key={index} className="text-center">
                        <img src={item.img} alt={`Feature ${index + 1}`} className="mx-auto w-full h-auto" />
                        <h2 className="text-2xl sm:text-3xl font-semibold pt-6">Collaboration Teams</h2>
                        <p className="text-base sm:text-lg text-gray-500 px-4 pt-2">
                            Here you can handle projects together with your team virtually.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section2;
