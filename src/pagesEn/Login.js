import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { VscClose } from "react-icons/vsc";

export default function Login() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    IT: "+7",
    IN: "+15",
    DE: "+50",
    TR: "+90",
  };

  return (
    <div>
      {" "}
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label
          class="modal-box relative rounded-lg w-[450px] h-[360px] bg-gray-50 p-6"
          for=""
        >
          <div className="flex">
            <div className="flex-none w-14 h-14 "></div>
            <div className="grow h-14">
              <h4 class="text-primary-brand-color  text-center font-semibold text-lg mb-10">
              Login or register
              </h4>
            </div>
            <div className="flex-none w-14 h-14 pl-8 pt-2">
              <label for="my-modal-4" className="cursor-pointer bg-gray-100">
                <VscClose size={25} className="text-slate-500" />
              </label>
            </div>
          </div>

          <div className="grid gap-y-3 mb-10">
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
                  Mobile Phone
                </span>
              </label>
            </div>

            <button className="bg-brand-yellow text-primary-brand-color transition-color hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
              Contiune with phone number
            </button>
            <p className=" text-xs text-gray-500">
            For the GDPR document regarding your personal information:{" "}
              <a href="#" className="text-primary-brand-color">
              Click

              </a>
            </p>
          </div>
          <div className=" flex flex-col w-full rounded-lg ">
            <div className="grid h-14 card bg-base-300  place-items-center">
              <h4 class=" text-center text-base mb-0 text-gray-500 ">
              Still haven't signed up? {" "}
                <a href="#" className="text-primary-brand-color">
                  Sign Up
                </a>
              </h4>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}
