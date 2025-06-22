import React from 'react';
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";

const services = [
    { img: s2, title: "Calculated Weather", desc: "Built Wicket longer admire do barton vanity itself do in it." },
    { img: s3, title: "Best Flights", desc: "Engrossed listening. Park gate sell they west hard for the." },
    { img: s4, title: "Local Events", desc: "Barton vanity itself do in it. Preferd to men it engrossed listening." },
    { img: s5, title: "Customization", desc: "We deliver outsourced aviation services for military customers." },
];

function Section1() {
    return (
        <div className='py-14 px-4 md:px-16 lg:px-28 font-semibold relative overflow-hidden'>
            <img className='w-[10vw] absolute top-6 right-[5vw]' src={s1} alt="" />

            <h2 className='text-center text-gray-500 text-base md:text-lg tracking-widest'>CATEGORY</h2>
            <h1 className='text-center text-indigo-950 text-3xl sm:text-4xl md:text-5xl font-bold py-6'>
                We Offer Best Services
            </h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10'>
                {services.map((service, index) => (
                    <div className='relative group w-full max-w-xs mx-auto'>
                        {/* Background Corner Shape */}
                        <div key={index} className='absolute -bottom-8 -left-3 w-1/4 aspect-square bg-orange-500 rounded-tl-2xl rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0'></div>

                        {/* Card */}
                        <div className='relative flex flex-col gap-6 items-center text-center p-6 mx-8 bg-white rounded-3xl shadow-sm group-hover:shadow-xl transition-shadow duration-300 z-10'>
                            <img src={service.img} alt="Weather Icon" className="w-20 h-20 object-contain" />
                            <h1 className='text-lg font-semibold text-indigo-950'>{service.title}</h1>
                            <p className='text-gray-500 text-sm leading-snug'>
                                {service.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section1;
