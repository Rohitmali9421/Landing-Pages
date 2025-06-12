import React from 'react';
import { HiRectangleGroup } from "react-icons/hi2";
import { BsDatabaseFillDown } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-gray-900 px-4 md:px-16 lg:px-28 py-20'>
            {/* Top Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {/* Testimonial */}
                <div className='flex flex-col gap-6 text-gray-500 font-normal text-lg'>
                    <h1 className='text-4xl md:text-5xl text-white font-semibold leading-snug'>
                        People are Saying About DoWhith
                    </h1>
                    <p>
                        Everything you need to accept to payment and grow your money of manage anywhere on planet
                    </p>
                    <HiRectangleGroup className='text-6xl text-white' />
                    <p>
                        I am very helped by this E-wallet application, my days are very easy to use this application and it's very helpful in my life, even I can pay in a short time 😍
                    </p>
                    <h1>_ Aria Zinanrio</h1>
                </div>

                {/* Contact Form */}
                <div className='flex flex-col gap-6 bg-gray-800 rounded-xl py-6 px-6 md:px-10 text-white items-center'>
                    <BsDatabaseFillDown className='text-7xl text-emerald-400' />
                    <h1 className='text-2xl font-semibold'>Get Started</h1>
                    <form className='flex flex-col gap-6 w-full'>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='mb-2'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Enter your email'
                                className='p-4 rounded-lg text-black'
                                required
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="message" className='mb-2'>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Enter your message'
                                className='p-4 rounded-lg text-black'
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className='bg-emerald-400 hover:bg-emerald-300 text-white font-medium py-4 rounded-xl'
                        >
                            Request Demo
                        </button>
                    </form>
                </div>
            </div>

            {/* Links Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 px-2 mt-10 text-white'>
                {/* Logo + Input */}
                <div className='col-span-1 lg:col-span-2'>
                    <h1 className='font-bold text-4xl md:text-5xl text-emerald-400 py-3'>Biccas</h1>
                    <p className='py-3 text-base text-gray-400'>
                        Get started noew try our product
                    </p>
                    <div className='relative mt-6 w-full max-w-xs'>
                        <input
                            type="email"
                            placeholder='Enter your email here'
                            className='w-full py-3 px-5 pr-14 text-sm text-white bg-transparent border border-gray-500 rounded-full focus:outline-none placeholder:text-gray-400'
                            required
                        />
                        <button
                            type="submit"
                            className='absolute right-1 top-1/2 transform -translate-y-1/2 bg-emerald-400 p-3 rounded-full text-black hover:bg-emerald-500 transition'
                        >
                            <FaArrowRightLong size={16} />
                        </button>
                    </div>
                </div>

                {/* Support Column */}
                <div className='flex flex-col gap-3'>
                    <h2 className='font-medium text-white mb-2'>Support</h2>
                    <ul className='text-gray-400 space-y-2 text-sm'>
                        <li>Help centre</li>
                        <li>Account information</li>
                        <li>About</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                {/* Help Column */}
                <div className='flex flex-col gap-3'>
                    <h2 className='font-medium text-white mb-2'>Help and Solution</h2>
                    <ul className='text-gray-400 space-y-2 text-sm'>
                        <li>Talk to support</li>
                        <li>Support docs</li>
                        <li>System status</li>
                        <li>Covid responde</li>
                    </ul>
                </div>

                {/* Product Column */}
                <div className='flex flex-col gap-3'>
                    <h2 className='font-medium text-white mb-2'>Product</h2>
                    <ul className='text-gray-400 space-y-2 text-sm'>
                        <li>Update</li>
                        <li>Security</li>
                        <li>Beta test</li>
                        <li>Pricing product</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='flex flex-col md:flex-row justify-between gap-4 items-center text-sm text-gray-400 pt-8 border-t border-gray-700 mt-8'>
                <p>© 2022 Biccas Inc. All rights reserved</p>
                <p>Terms and Conditions • Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;
