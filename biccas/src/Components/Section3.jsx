import React from 'react';
import s1 from '../assets/s1.png';
import { MdCheckCircle } from "react-icons/md";

function Section3() {
    return (
        <div className="w-full py-20 px-4 md:px-16 lg:px-28 bg-white  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div>
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-snug">
                        What Benefit Will You Get
                    </h1>
                    <ul className="flex flex-col gap-5 mt-10 font-medium">
                        {[
                            "Free Consulting With Expert Saving Money",
                            "Free Consulting With Expert Saving Money",
                            "Online Banking",
                            "Investment Report Every Month",
                            "Saving Money For The Future",
                            "Online Transaction"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                                <MdCheckCircle className="text-emerald-400 text-2xl md:text-3xl mt-1" />
                                <span className="text-lg md:text-xl text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Section */}
                <div className="w-full flex justify-center relative z-10">
                    <img src={s1} alt="Benefits Illustration" className="w-full max-w-md md:max-w-full object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Section3;
