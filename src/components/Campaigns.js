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

            <Slider {...settings} className="container mx-auto">
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                <div>
                    <h3>7</h3>
                </div>
                <div>
                    <h3>8</h3>
                </div>
                <div>
                    <h3>9</h3>
                </div>
            </Slider>



        </div >
    )
}
