import React from 'react'
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import BannersData from "../api/banners.json"

export default function Campaigns() {

    const [banners, setBanners] = useState([])

    useEffect(() => {
        setBanners(BannersData)
    }, [])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplayspeed: 3500,
        cssEase: "linear",
    };


    return (
        <div>
            <div className='container mx-auto py-8'>
                <h3 className='font-semibold text-sm mb-2'>Kampanyalar</h3>
                <Slider {...settings} className="container -mx-2">
                    {banners.length && banners.map((banner, index) => (
                        <div key={banner.id}>
                            <picture className='block px-2'>
                                <img src={banner.image} className='rounded-lg' />
                            </picture>

                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    )
}
