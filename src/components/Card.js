import React from "react";

export default function Card() {
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div class="rounded overflow-hidden shadow-lg rounded-lg bg-white">
        <figure class=" px-32 pt-14 flex items-center">
          <img
            class=" rounded-xl"
            src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
            alt=""
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 className="card-title  font-semibold text-primary-brand-color">
            Her siparişinize bir kampanya
          </h2>
          <p className="text-gray-500 ">
            Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
          </p>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg rounded-lg bg-white">
        <figure class=" px-32 pt-14  flex items-center">
          <img
            class=" rounded-xl"
            src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
            alt=""
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 className="card-title  font-semibold text-primary-brand-color">
            Dakikalar içinde kapınızda
          </h2>
          <p className="text-gray-500 ">
            Getir’le siparişiniz dakikalar içinde kapınıza gelir.
          </p>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg rounded-lg bg-white">
        <figure class=" px-32 pt-14  flex items-center">
          <img
            class=" rounded-xl"
            src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
            alt=""
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 className="card-title  font-semibold text-primary-brand-color">
            Binlerce çeşit mutluluk
          </h2>
          <p className="text-gray-500 ">
            Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
