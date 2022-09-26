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
            A promotion for every order
          </h2>
          <p className="text-gray-500 ">
            At Getir, you can find a promotion for every order.
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
            At your door in minutes
          </h2>
          <p className="text-gray-500 ">
            Your order is at your door in minutes with Getir.
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
            Thousand kinds of happiness
          </h2>
          <p className="text-gray-500 ">
            At Getir, you can choose from thousands of varieties.
          </p>
        </div>
      </div>
    </div>
  );
}

//<div className=' grid grid-cols-3 gap-4 p-16'>
//   <div class="self-auto mr-2 card max-w-xl bg-base-100 drop-shadow-md rounded-lg  ">
//     <figure class="px-2 pt-10">
//       <img
//         src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
//         alt="Shoes"
//         class="rounded-xl"
//       />
//     </figure>
//     <div class="card-body items-center text-center">
//       <h2 className="card-title  font-semibold text-primary-brand-color">
//         A promotion for every order
//       </h2>
//       <p className="text-gray-500 ">
//         At Getir, you can find a promotion for every order.
//       </p>
//     </div>
//   </div>

//   <div class="self-auto mx-2  card w-full bg-base-100 drop-shadow-md  rounded-lg ">
//     <figure class="px-2 pt-10">
//       <img
//         src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
//         alt="Shoes"
//         class="rounded-xl"
//       />
//     </figure>
//     <div class="card-body items-center text-center">
//       <h2 class="card-title font-semibold text-primary-brand-color">
//         At your door in minutes
//       </h2>
//       <p className="text-gray-500">
//         Your order is at your door in minutes with Getir.
//       </p>
//     </div>
//   </div>

//   <div class="self-auto ml-2  card w-full bg-base-100 drop-shadow-md  rounded-lg ">
//     <figure class="px-2 pt-10">
//       <img
//         src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
//         alt="Shoes"
//         class="rounded-xl"
//       />
//     </figure>
//     <div class="card-body items-center text-center">
//       <h2 class="card-title font-semibold text-primary-brand-color">
//         Thousand kinds of happiness
//       </h2>
//       <p className="text-gray-500">
//         At Getir, you can choose from thousands of varieties.
//       </p>
//     </div>
//   </div>
// </div>
