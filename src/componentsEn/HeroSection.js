import React, { useState } from "react";
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    IT: "+7",
    IN: "+15",
    DE: "+50",
    TR: "+90",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplayspeed: 3500,
    cssEase: "linear",
  };
  return (
    <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
          />
        </div>
      </Slider>

      <div className="container flex justify-between items-center absolute top-0 left-1/2  -translate-x-1/2 h-full z-20 ">
        <div>
          <img src="https://getir.com/_next/static/images/groceriesInMinutes-20f12c15098e8fd2bae874e2a40e343b.svg" />
          <h3 className="mt-4 mt-8 text-4xl text-white font-semibold">
            At your door in <br />
            minutes
          </h3>
        </div>

        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-brand-color text-center font-semibold  mb-4 ">
            Login or register
          </h4>

          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color outline-none peer text-sm pt-2"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 tansition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                  Phone Number
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-brand-color transition-color hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
              Continue with phone number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
