import React from 'react'
import Slider from "react-slick";
function Discount() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container bg-orange-400 py-3 text-sm overflow-x-clip text-white mt-6">
            <Slider {...settings}>
                <div>
                    <li>Up to 80% off on top selling products</li>
                </div>
                <div>
                    <li>Up to 80% off on top selling products</li>
                </div>
                <div>
                    <li>Up to 80% off on top selling products</li>
                </div>
                <div>
                    <li>Up to 80% off on top selling products</li>
                </div>
                <div>
                    <li>Up to 80% off on top selling products</li>
                </div>
                <div>
                    <li>Up to 80% off on top selling products</li>
                </div>
                
            </Slider>
        </div>
    );
}


export default Discount
