import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className='grid grid-cols-2 bg-gray-100 md:grid-cols-4 gap-4 pt-10 px-4'>
            <div>
                <img className='p-3 pr-8 md:pr-28 ' src="https://www.fireboltt.com/cdn/shop/files/Background_x32@2x.png?v=1620478900" alt="" />
                <h1 className='font-bold text-xl mt-3'>Follow Us</h1>
                <ul className='text-base'>
                    <li className='p-2 text-wrap flex flex-wrap '><FaFacebookF className='w-6 h-6 mr-2 border-2 border-black rounded-full p-1' />Like us on Facebook </li>
                    <li className='p-2 text-wrap flex flex-wrap '><FaInstagram className='w-6 h-6 mr-2 border-2 border-black rounded-full p-1' />Join us on Instagram  </li>
                    <li className='p-2 text-wrap flex flex-wrap '><FaYoutube className='w-6 h-6 mr-2 border-2 border-black rounded-full p-1' />Join us on Youtube </li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-xl mt-3'>Our Products</h1>
                <ul className='text-sm'>
                    <li className='p-1 text-wrap'>Audio</li>
                    <li className='p-1 text-wrap'>Smart watches</li>
                </ul>
                <h1 className='font-bold text-xl mt-3'>Shop By Feature</h1>
                <ul className='text-sm'>
                    <li className='p-1 text-wrap'>Luxury Stainless steel Smartwatch</li>
                    <li className='p-1 text-wrap'>Bluetooth calling Smartwatch</li>
                    <li className='p-1 text-wrap'>Rugged Smartwatches</li>
                    <li className='p-1 text-wrap '>AMOLED Display Smartwatches</li>
                    <li className='p-1 text-wrap'>Essential smartwatches</li>
                    <li className='p-1 text-wrap'>Round Display smartwatch</li>
                    <li className='p-1 text-wrap'>Android Smartwatch</li>
                    <li className='p-1 text-wrap'>Smartwatch with 4g Sim</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-xl mt-3'>Smartwatch By Price</h1>
                <ul className='text-sm'>
                    <li className='p-1 text-wrap'>Smartwatch Under 1500</li>
                    <li className='p-1 text-wrap'>Smartwatch Under 2000 </li>
                    <li className='p-1 text-wrap'>Smartwatch Under 3000 </li>
                    <li className='p-1 text-wrap'>best smartwatch under 4000 </li>
                    <li className='p-1 text-wrap'>best smartwatch under 5000  </li>
                    <li className='p-1 text-wrap'>Best Smartwatch Under 10000 </li>
                </ul>
                <h1 className='font-bold text-xl mt-3'>Help Desk</h1>
                <ul className='text-sm'>
                    <li className='p-1 text-wrap'>Support  </li>
                    <li className='p-1 text-wrap'>Track Complaint Status </li>
                    <li className='p-1 text-wrap'>Track Your Order </li>
                    <li className='p-1 text-wrap'>Warranty Registration </li>
                    <li className='p-1 text-wrap '>Warranty Policy </li>
                    <li className='p-1 text-wrap'>Register a Complaint </li>
                    <li className='p-1 text-wrap'>Influencer Programme </li>
                    <li className='p-1 text-wrap'>Shipping and Returns </li>
                    <li className='p-1 text-wrap'>Bulk Orders </li>
                    <li className='p-1 text-wrap'>Contact Us</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-xl mt-3'>About Boltt </h1>
                <ul className='text-sm'>
                    <li className='p-1 text-wrap'>About Us </li>
                    <li className='p-1 text-wrap'>Privacy Policy </li>
                    <li className='p-1 text-wrap'>Shipping & Returns </li>
                    <li className='p-1 text-wrap'>Read Our Blogs </li>
                    <li className='p-1 text-wrap'>Recent Stories   </li>
                </ul>
                <h1 className='font-bold text-xl mt-3'>Legal </h1>
                <ul className='text-sm'>
                    <li className='p-1 text-wrap'>Terms & Conditions </li>
                    <li className='p-1 text-wrap'>Privacy Policy</li>
                </ul>
            </div>
            <div className='text-sm md:text-xl col-span-2 text-center font-bold py-4 border-y md:col-span-4'>© 2024 Boltt Games Pvt. Ltd. All Rights Reserved. | Site Map</div>
        </div>
    )
}

export default Footer
