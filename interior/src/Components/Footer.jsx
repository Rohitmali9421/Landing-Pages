import React from 'react';

function Footer() {
    return (
        <div className='w-full bg-gray-200 py-8 px-6 sm:px-10 md:px-20 lg:px-40'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold'>Panto</h1>
                    <p className='text-sm font-thin text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-orange-500 font-semibold'>Services</h1>
                    <span className='text-gray-700 text-sm'>Email Marketing</span>
                    <span className='text-gray-700 text-sm'>Campaigns</span>
                    <span className='text-gray-700 text-sm'>Branding</span>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-orange-500 font-semibold'>Furniture</h1>
                    <span className='text-gray-700 text-sm'>Beds</span>
                    <span className='text-gray-700 text-sm'>Chairs</span>
                    <span className='text-gray-700 text-sm'>All</span>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-orange-500 font-semibold'>Follow Us</h1>
                    <span className='text-gray-700 text-sm'>Twitter</span>
                    <span className='text-gray-700 text-sm'>Facebook</span>
                    <span className='text-gray-700 text-sm'>Instagram</span>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-start md:items-center pt-10 gap-4 text-sm text-gray-500'>
                <h1>Copyright © 2021</h1>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
