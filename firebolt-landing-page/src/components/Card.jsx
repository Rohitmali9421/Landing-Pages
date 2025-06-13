import React from 'react'

function Card({ imageURL, name ,description,price }) {
    return (
        <div className='min-w-60      mx-auto'>
            <div className='mx-3 py-3 bg-gray-100 rounded-xl'>
                <img className=' mx-auto p-4' loading="lazy" src={imageURL} alt="" />
                <h1 className='text-center font-bold pt-2 text-2xl'>{name}</h1>
                <p className='text-center text-xs font-medium'>{description}</p>
                <h1 className='text-center font-bold pt-2 text-xl'>{price}</h1>
                <div className='flex justify-center mb-4'>
                    <button className='text-center font-bold w-full mt-2 mx-4 py-2 rounded-xl  text-lg text-white bg-orange-500'>View Product</button>
                </div>

            </div>
        </div>
    )
}
export default Card
