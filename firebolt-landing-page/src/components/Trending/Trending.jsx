import React from 'react'
import Card from '../Card';
import CardScrollLayout from '../CardScrollLayout';
function Trending() {

    return (
        <div className='w-full pt-10 border-t'>
            <div className='flex w-full justify-center'>
                <h1 className='font-bold text-4xl '>Just  </h1>
                <h1 className='font-bold text-4xl pl-2 text-orange-600'>Trending</h1>
            </div>
            <CardScrollLayout>
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722357925/Firebolt-landing-page/nwbn1bbi4lleyd34ty1t.webp" name="Cyclone " description="40.6mm Display | BT Calling " price="₹1,199" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722357975/Firebolt-landing-page/hh4meow6tcdj5saxyj5p.webp" name="Oracle  " description="Android | Cellular Calling " price="₹3,999" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358032/Firebolt-landing-page/p0qeq9lsiknzdocgc3qz.webp" name="Supernova " description="AMOLED | BT Calling " price="₹1,599" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358070/Firebolt-landing-page/a6xixpygb8z0nevkbelv.webp" name="Sphere " description="40.6mm Display | BT Calling " price="₹1,299" />
                
            </CardScrollLayout>

        </div>
    )
}

export default Trending
