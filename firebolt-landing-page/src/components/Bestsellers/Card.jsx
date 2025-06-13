import React from 'react'

function Card({ imageURL, name }) {
    return (
        <div className='min-w-60    mx-auto'>
            <div className='mx-3 '>
            <video className='rounded-xl border border-orange-500'  src={imageURL} autoPlay playsInline muted loop preload="none"></video>
                <h1 className='text-center font-bold pt-2 text-2xl'>{name}</h1>
            </div>
        </div>
    )
}
export default Card
