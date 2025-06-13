import React from 'react'

function Card({ imageURL, Description }) {
    return (
        <div className='min-w-60      mx-auto'>
            <div className='mx-3  rounded-xl'>
                <img className=' rounded-xl h-48' loading="lazy" src={imageURL} alt="" />
                <p className='text-xl mt-4 font-bold '>{Description}</p>
                

            </div>
        </div>
    )
}
export default Card
