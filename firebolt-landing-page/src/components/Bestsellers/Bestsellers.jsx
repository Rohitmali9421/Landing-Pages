import React from 'react'
import Slider from "react-slick";
import Card from './Card';
function Bestsellers() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        swipe: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full pt-10 border-t'>
            <div className='flex w-full justify-center'>
                <h1 className='font-bold text-2xl md:text-4xl '>Explore </h1>
                <h1 className='font-bold text-2xl md:text-4xl pl-2 text-orange-600'>Bestsellers</h1>
            </div>
            <div className=' overflow-x-clip mt-8 md:mx-4 mx-1 '>
                <Slider {...settings} >

                    <Card imageURL="https://res.cloudinary.com/dhturqqs5/video/upload/v1722356727/Firebolt-landing-page/w6bakleokqh0vdoveet3.mp4" name="Dream" />
                    <Card imageURL="https://res.cloudinary.com/dhturqqs5/video/upload/v1722356819/Firebolt-landing-page/a9yeqg2yjvmhh8a0bips.mp4" name="Retro" />
                    <Card imageURL="https://res.cloudinary.com/dhturqqs5/video/upload/v1722356897/Firebolt-landing-page/hk8rf0lntv9cu197v14u.mp4" name="Blizzard Ultra" />
                    <Card imageURL="https://res.cloudinary.com/dhturqqs5/video/upload/v1722356971/Firebolt-landing-page/sc0r9t2eta4acgc2uwti.mp4" name="Royale" />
                    <Card imageURL="https://res.cloudinary.com/dhturqqs5/video/upload/v1722357085/Firebolt-landing-page/tzhq6x3k9s8dg1qzoupv.mp4" name="Blizzard" />
                    <Card imageURL="https://res.cloudinary.com/dhturqqs5/video/upload/v1722357202/Firebolt-landing-page/g5fvspbflhl2kpnpcnnj.mp4" name="Supernova" />
                    <Card imageURL="https://res.cloudinary.com/dhturqqs5/video/upload/v1722357306/Firebolt-landing-page/si2jrekpdithbrxufi5s.mp4" name="Solaris" />

                </Slider>
            </div>
        </div>
    )
}

export default Bestsellers
