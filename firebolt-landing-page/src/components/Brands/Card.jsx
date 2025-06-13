import React from 'react'

function Card({imageURL,name}) {
    return (
        <div className='mx-auto'>
            <img className='rounded-3xl border-2 border-orange-500 w-24 h-24 mx-auto' src={imageURL} alt="" />
            <h1 className='text-center font-bold pt-2'>{name}</h1>
        </div>
    )
}
export default Card
