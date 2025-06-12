import React from 'react'
import { MdCheckCircle } from 'react-icons/md'

function Section4() {
    return (
        <div className='w-full py-20 px-4 md:px-16 lg:px-28 bg-white flex flex-col justify-center '>
            <h1 className='text-center text-4xl md:text-5xl font-bold leading-snug'>
                Choose Plan <br /> That’s Right For You
            </h1>
            <p className='py-6 text-center text-lg font-semibold text-gray-400'>
                Choose plan that works best for you, feel free to contact us
            </p>

            {/* Billing Toggle */}
            <div className='mx-auto p-2 bg-white text-xl rounded-lg shadow-lg flex gap-4 font-semibold'>
                <button className='rounded-lg px-6 py-3'>Bill Monthly</button>
                <button className='bg-emerald-400 rounded-lg px-6 py-3 text-white'>Bill Yearly</button>
            </div>

            {/* Pricing Cards Grid */}
            <div className='grid grid-cols-1  lg:grid-cols-3 gap-6 py-12 relative z-10'>
                {/* Free Plan */}
                <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-8 shadow-xl rounded-xl bg-white w-full mt-10">
                    <h1 className="text-3xl md:text-4xl font-semibold">Free</h1>
                    <p className="text-lg md:text-xl text-center leading-snug font-medium text-gray-500 px-4">
                        Have a go and test your superpowers
                    </p>
                    <h2 className="text-4xl font-bold text-gray-800">
                        <sup className="text-2xl font-semibold">$</sup>0
                    </h2>

                    <ul className="flex flex-col gap-4 w-full bg-gray-50 rounded-xl p-6">
                        {[
                            "Public Share & Comments",
                            "Basic Analytics",
                            "Limited Storage",
                            "Email Support",
                        ].map((feature, index) => (
                            <li key={index} className="flex gap-3 items-center">
                                <MdCheckCircle className="text-emerald-400 text-2xl md:text-3xl" />
                                <span className="text-base md:text-lg text-gray-700">{feature}</span>
                            </li>
                        ))}

                        <button className="mt-4 w-full text-center text-lg md:text-xl px-6 py-3 rounded-xl text-white font-semibold bg-emerald-500 hover:bg-emerald-600 transition-all shadow-md">
                            Signup for free
                        </button>
                    </ul>
                </div>

                {/* Pro Plan */}
                <div className="relative flex flex-col justify-center items-center gap-4 p-6 md:p-8 shadow-xl rounded-xl w-full bg-emerald-400 text-white overflow-hidden">
                    {/* Bubble background */}
                    <div className="absolute top-36 w-[37rem] h-[37rem] bg-emerald-300 rounded-full z-0"></div>

                    <h1 className="text-3xl md:text-4xl font-semibold z-10">Pro</h1>
                    <p className="text-lg md:text-xl text-center leading-snug font-medium px-4 z-10">
                        Experiment the power of infinite possibilities
                    </p>
                    <h2 className="text-4xl font-bold z-10">
                        <sup className="text-2xl font-semibold">$</sup>8
                    </h2>
                    <button className="z-10 bg-emerald-300 rounded-lg text-white px-4 py-2">
                        Save $50 a year
                    </button>

                    <ul className="z-10 flex flex-col gap-4 w-full bg-gray-50 rounded-xl p-6 mt-4">
                        {[
                            "Public Share & Comments",
                            "Basic Analytics",
                            "Private Projects",
                            "Unlimited Storage",
                            "Priority Support",
                        ].map((feature, index) => (
                            <li key={index} className="flex gap-3 items-center">
                                <MdCheckCircle className="text-emerald-400 text-2xl md:text-3xl" />
                                <span className="text-base md:text-lg text-gray-700">{feature}</span>
                            </li>
                        ))}

                        <button className="mt-4 w-full text-center text-lg md:text-xl px-6 py-3 rounded-xl text-white font-semibold bg-emerald-500 hover:bg-emerald-600 transition-all shadow-md">
                            Upgrade to Pro
                        </button>
                    </ul>
                </div>

                {/* Enterprise Plan */}
                <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-8 shadow-xl rounded-xl bg-white w-full mt-10">
                    <h1 className="text-3xl md:text-4xl font-semibold">Enterprise</h1>
                    <p className="text-lg md:text-xl text-center leading-snug font-medium text-gray-500 px-4">
                        Best for large teams and organizations
                    </p>
                    <h2 className="text-4xl font-bold text-gray-800">
                        <sup className="text-2xl font-semibold">$</sup>20
                    </h2>

                    <ul className="flex flex-col gap-4 w-full bg-gray-50 rounded-xl p-6">
                        {[
                            "Team Collaboration Tools",
                            "Advanced Analytics",
                            "Unlimited Projects",
                            "Dedicated Manager",
                            "24/7 Premium Support",
                        ].map((feature, index) => (
                            <li key={index} className="flex gap-3 items-center">
                                <MdCheckCircle className="text-emerald-400 text-2xl md:text-3xl" />
                                <span className="text-base md:text-lg text-gray-700">{feature}</span>
                            </li>
                        ))}

                        <button className="mt-4 w-full text-center text-lg md:text-xl px-6 py-3 rounded-xl text-white font-semibold bg-emerald-500 hover:bg-emerald-600 transition-all shadow-md">
                            Contact Sales
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Section4
