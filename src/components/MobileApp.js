import React from 'react'

export default function MobileApp() {
    return (
        <div className=' bg-primary-brand-color flex justify-between items-center bg-mobile-app h-80  rounded-lg  mt-6 text-white'>
            <div className='flex flex-col gap-y-3 p-10'>
                <h3 className='text-white text-3xl font-bold tracking-tight '>Getir'i indirin!</h3>
                <p className='text-white text-xl font-semibold'>İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
                <nav className='mt-5 flex gap-x-2'>
                    <a href='#'>
                        <img className='p-1' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
                    </a>
                    <a href='#'>
                        <img className='p-1' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
                    </a>
                    <a href='#'>
                        <img className='p-1' src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
                    </a>
                </nav>
            </div>
            <picture className='pt-6'>
                <img src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'/>
            </picture>



        </div>
    )
}
