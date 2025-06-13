import React from 'react'
import Card from '../Card';
import CardScrollLayout from '../CardScrollLayout';
function Deals() {

    return (
        <div className='w-full border-t'>
            <div className='w-full pt-10'>
                <div className='flex w-full justify-center'>
                    <h1 className='font-bold text-2xl md:text-4xl '>Audio </h1>
                </div>

            </div>
            <CardScrollLayout>
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358806/Firebolt-landing-page/fj6p8h3rahff0acirtce.webp" name="Fire Band Athena  " description="10mm Driver | ENC Mic  " price="₹799" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358838/Firebolt-landing-page/bcwkkfgo2waqzhnxk4r4.webp" name="FirePods Antares " description="10mm Driver | Game Mode " price="₹1,299" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358849/Firebolt-landing-page/lvuzz9bwisdgptfdbtcv.webp" name="Lycan GamePods " description="IPX5 Quad | ENC Mics   " price="₹999" />
                <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722358870/Firebolt-landing-page/abf6jjjfrogwytz8uq2y.webp" name="Fire Band Nebula " description="14.2mm Driver | IPX5 " price="₹899" />
            </CardScrollLayout>

        </div>
    )
}

export default Deals
