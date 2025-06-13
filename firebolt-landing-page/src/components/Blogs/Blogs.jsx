import React from 'react'
import Card from './Card';
import CardScrollLayout from '../CardScrollLayout';
function Blogs() {

    return (
        <div className='w-full pt-10 border-t'>
            <h1 className='font-bold text-2xl text-center '>Fire-Boltt Blogs  </h1>
            <p className='text-center pt-2 text-sm'>Guidance and motivation to ignite the fire in you</p>
            <CardScrollLayout>
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722359237/Firebolt-landing-page/rcxlyxlbcxgbmfv4ujaq.webp" Description="Fire-Boltt Onyx- What to expect from the all-in-one smartwatch?" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722359263/Firebolt-landing-page/pkbzrpsjhz4oo1bl6xkm.webp" Description="How Fire-Boltt Maverick Simplifies Your Day?" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722359266/Firebolt-landing-page/hiqih5xw7yg686bwry5v.webp" Description="Things You Can Do With Fire-Boltt Dapper Smartwatch" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722359304/Firebolt-landing-page/k5vag7qb5yry5i2fuyov.webp" Description="Explore the Universe with Fire-Boltt Spacewatch: Stainless Steel Edition" />

            </CardScrollLayout>

        </div>
    )
}

export default Blogs
