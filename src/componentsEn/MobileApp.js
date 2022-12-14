import React from 'react'

export default function MobileApp() {
    return (
        <div className='container mx-auto bg-primary-brand-color flex justify-between items-center bg-mobile-app h-80  rounded-lg  mt-6 text-white'>
            <div className='flex flex-col gap-y-3 p-10'>
                <h3 className='text-white text-3xl font-bold tracking-tight '>Download Getir!</h3>
                <p className='text-white text-xl font-semibold'>Let us deliver your order to your door in <br /> minutes.</p>
                <nav className='mt-5 flex gap-x-2'>
                    <a href='#'>
                        <img className='p-1' src='https://getir.com/_next/static/images/appstore-en-c661eed8e5955c0a422054a9021698ce.svg' />
                    </a>
                    <a href='#'>
                        <img className='p-1' src='https://getir.com/_next/static/images/googleplay-en-46ff50211cf4b7b1c29309f3526af930.svg' />
                    </a>
                    <a href='#'>
                        <img className='p-1' src='https://getir.com/_next/static/images/huawei-appgallery-en-aed8ae3ea827fedc197b350496164d3f.svg' />
                    </a>
                </nav>
            </div>
            <picture className='pt-6'>
                <img src='https://getir.com/_next/static/images/phoneLandingEn-5e918947c1bcf3088c762a1b52c89c7d.png'/>
            </picture>



        </div>
    )
}
