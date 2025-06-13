import React from 'react'
import Slider from "react-slick";
import Card from './Card';


function Brands() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=' overflow-x-clip mt-8 mx-auto max-w-[1000px]'>
      <Slider {...settings} >
        
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355132/Firebolt-landing-page/lqbwx1tf6at3g9jry50j.avif" name="Blizzard"/>
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355180/Firebolt-landing-page/planxexfbdvpq6gxswr2.avif" name="Asphalt"/>
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355292/Firebolt-landing-page/kpsrdjqqlgae4unpyiro.avif" name="4g Pro"/>
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355350/Firebolt-landing-page/ydsxhzrvbrh9uxwff5wi.avif" name="Moonwatch"/>
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355416/Firebolt-landing-page/pfarrkymadbpl3u99xdx.avif" name="Supernova"/>
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355480/Firebolt-landing-page/dpp9s4e7dr0d7ajj50tl.avif" name="Avalanche"/>
          <Card imageURL="https://res.cloudinary.com/dhturqqs5/image/upload/v1722355535/Firebolt-landing-page/evqb7gfxe2onhwbeeuq3.webp" name="Sphere"/>
        
        
      </Slider>
    </div>
  )
}

export default Brands
