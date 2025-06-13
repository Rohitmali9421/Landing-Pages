import React from 'react'

function Features() {
    return (
        <div className='w-full pt-10  '>
            <div className='flex w-full justify-center'>
                <h1 className='font-bold text-xl md:text-3xl '>Fire-Boltt |</h1>
                <h1 className='font-bold text-xl md:text-3xl pl-2 text-orange-600'>Ignite the fire in you</h1>
            </div>
            <div className='grid  md:grid-cols-4 grid-cols-2 gap-4 mt-10 mx-4'>
                <div className='w-full bg-gray-100 rounded-md  border-2 flex justify-center py-3'>
                    <div className='flex gap-3 '>
                        <img className='h-14' src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355630/Firebolt-landing-page/ic5lcp0hknvmtk89sdfl.webp" loading="lazy" alt="" />
                        <div>
                            <h1 className='text-xl font-bold '>20Mn+</h1>
                            <h1 className='text-gray-600 font-semibold  text-xs font-mono'>UNITS SOLD</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-100 rounded-md  border-2 flex justify-center py-3'>
                    <div className='flex gap-3 '>
                        <img className='h-14' src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355683/Firebolt-landing-page/rnkolrx5zt3rflwvw4mf.webp" loading="lazy" alt="" />
                        <div>
                            <h1 className='text-xl font-bold '>02Mn+</h1>
                            <h1 className='text-gray-600 font-semibold  text-xs font-mono'>PRODUCT REVIEWS</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-100 rounded-md  border-2 flex justify-center py-3'>
                    <div className='flex gap-3 '>
                        <img className='h-14' src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355744/Firebolt-landing-page/iyijxuaspvjttodhfuxr.webp" loading="lazy" alt="" />
                        <div>
                            <h1 className='text-xl font-bold '>100% YOY</h1>
                            <h1 className='text-gray-600 font-semibold  text-xs font-mono'>400% QOQ GROWTH</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-gray-100 rounded-md  border-2 flex justify-center py-3'>
                    <div className='flex gap-3 '>
                        <img className=' h-14' src="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355780/Firebolt-landing-page/zlsyuqlpam2yye9ibkdu.webp" loading="lazy" alt="" />
                        <div>
                            <h1 className='text-xl font-bold '>1 UNIT SOLD </h1>
                            <h1 className='text-gray-600 font-semibold  text-xs font-mono'>EVERY 05 SEC</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Features
