import React from 'react'
import { BiGlobe } from "react-icons/bi"
import { FaInstagram } from "react-icons/fa"
import { GrTwitter } from "react-icons/gr"
import { IoLogoFacebook } from "react-icons/io"

export default function Footer() {
    return (
        <div >
            <footer class="footer p-10 bg-white  ">
                <div>
                    <p className='ml-6 text-brand-color text-xl'>Download Getir!</p>
                    <nav className=''>
                        <a href='#'>
                            <img className='m-4' src='https://getir.com/_next/static/images/appstore-en-c661eed8e5955c0a422054a9021698ce.svg' />
                        </a>
                        <a href='#'>
                            <img className='m-4' src='https://getir.com/_next/static/images/googleplay-en-46ff50211cf4b7b1c29309f3526af930.svg' />
                        </a>
                        <a href='#'>
                            <img className='m-4' src='https://getir.com/_next/static/images/huawei-appgallery-en-aed8ae3ea827fedc197b350496164d3f.svg' />
                        </a>
                    </nav>
                </div>
                <div >
                    <span class="text-brand-color text-xl">Discover Getir</span>
                    <a href='#'>About us</a>
                    <a href='#'>Careers</a>
                    <a href='#'>Technology Careers</a>
                    <a href='#'>Contact us</a>
                    <a href='#'>Social Responsibility Projects</a>
                </div>
                <div>
                    <span class="text-brand-color text-xl">Need help?</span>
                    <a href='#'>FAQ </a>
                    <a href='#'>Protection of Personal Data</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms & Conditions </a>
                    <a href='#'>Cookie Policy </a>
                </div>
                <div>
                    <span class="text-brand-color text-xl">Become Our Business Partner</span>
                    <a href='#'> Become a Franchisee</a>
                    <a href='#'>Rent Your Warehouse</a>
                    <a href='#'>Become a GetirFood Restaurant</a>
                    <a href='#'>Become a GetirLocals Business</a>
                    <a href='#'>Chain Restaurants</a>
                </div>
                <div>
                    <picture>
                        <img
                        src='https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png'
                        />
                        
                    </picture>
                </div>


            </footer >
            <hr />
            <footer className='grid grid-cols-3 gap-4 h-20 flex items-center'>
                <div className='ml-8'>
                    <p className='text-base' >© 2022 Getir <a href='#' className='text-sm text-primary-brand-color text-base'>  Information Society Services</a></p>
                </div>
                <div className='visible'> </div>
                <div className='mr-8 '>
                    <nav className='flex flex-row-reverse space-x-6 space-x-reverse  '>
                        <a href='#' className='flex items-center gap-x-2 text-gray transition-all text-opacity-80 hover:text-opacity-100'>
                            <IoLogoFacebook  size={25} />
                        </a>
                        <a href='#' className='flex items-center gap-x-2 text-gray transition-all text-opacity-80 hover:text-opacity-100'>
                            <GrTwitter  size={25} />
                        </a>

                        <a href='#' className='flex items-center gap-x-2 text-gray transition-all text-opacity-80 hover:text-opacity-100'>
                            <FaInstagram  size={25} />
                        </a>
                        <a href='#' className='flex items-center gap-x-2  transition-all text-opacity-80 hover:text-opacity-100'>
                            <BiGlobe size={20} />
                            English(EN)
                        </a>

                    </nav>
                </div>
            </footer>

        </div >
    )
}
