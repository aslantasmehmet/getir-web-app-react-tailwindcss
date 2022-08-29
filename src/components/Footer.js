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
                    <p className='ml-6 text-brand-color text-xl'>Getir'i indirin!</p>
                    <nav className=''>
                        <a href='#'>
                            <img className='m-4' src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
                        </a>
                        <a href='#'>
                            <img className='m-4' src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
                        </a>
                        <a href='#'>
                            <img className='m-4' src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
                        </a>
                    </nav>
                </div>
                <div >
                    <span class="text-brand-color text-xl">Getir'i keşfedin</span>
                    <a href='#'>Hakkımızda</a>
                    <a href='#'>Kariyer</a>
                    <a href='#'>Teknoloji Kariyerleri</a>
                    <a href='#'>İletişim</a>
                    <a href='#'>Sosyal Sorumluluk Projeleri</a>
                </div>
                <div>
                    <span class="text-brand-color text-xl">Yardıma mı ihtiyacınız var?</span>
                    <a href='#'>Sıkça Sorulan Sorular </a>
                    <a href='#'>Kişisel Verilerin Korunması</a>
                    <a href='#'>Gizlilik Politikası</a>
                    <a href='#'>Kullanım Koşulları </a>
                    <a href='#'>Çerez Politikası </a>
                </div>
                <div>
                    <span class="text-brand-color text-xl">İş Ortağımız Olun</span>
                    <a href='#'>Bayimiz Olun</a>
                    <a href='#'>Deponuzu Kiralayın</a>
                    <a href='#'>GetirYemek Restoranı Olun</a>
                    <a href='#'>GetirÇarşı İşletmesi Olun</a>
                    <a href='#'>Zincir Restoranlar</a>
                </div>


            </footer >
            <hr />
            <footer className='grid grid-cols-3 gap-4 h-20 flex items-center'>
                <div className='ml-8'>
                    <p className='text-base' >© 2022 Getir <a href='#' className='text-sm text-primary-brand-color text-base'>  Bilgi Toplumu Hizmetleri</a></p>
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
                            Türkçe(TR)
                        </a>

                    </nav>
                </div>
            </footer>

        </div >
    )
}
