import React from 'react'

export default function Card() {
    return (
        <div className='  px-12 my-8'>
            <div className='mt-14 flex items-center justify-between  gap-x-10 '>
                

                <div class="card w-96 bg-base-100 shadow-xl rounded-lg  mb-16">
                    <figure class="px-10 pt-10">
                        <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 className="card-title  font-semibold text-primary-brand-color">Her siparişinize bir kampanya!</h2>
                        <p className='text-gray-500'>Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</p>
                    </div>
                </div>

                <div class="card w-98 bg-base-100 shadow-xl  rounded-lg mb-16">
                    <figure class="px-10 pt-10">
                        <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-semibold text-primary-brand-color">Dakikalar içinde kapınızda!</h2>
                        <p className='text-gray-500'>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl  rounded-lg mb-16">
                    <figure class="px-10 pt-10">
                        <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title font-semibold text-primary-brand-color">Binlerce çeşit mutluluk</h2>
                        <p className='text-gray-500'>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</p>
                    </div>
                </div>


            </div >
        </div>
    )
}
