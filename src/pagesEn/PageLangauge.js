import React from "react";
import { VscClose } from "react-icons/vsc";

export default function PageLangauge() {
  return (
    <div>
      <input type="checkbox" id="my-modal-1" class="modal-toggle" />
      <label for="my-modal-1" class="modal cursor-pointer">
        <label
          class="modal-box relative rounded-lg w-[450px] h-[300px] bg-gray-50"
          for=""
        >
          <div className="flex">
            <div className="flex-none w-14 h-14 "></div>
            <div className="grow h-14">
              <h4 class="text-primary-brand-color  text-center font-semibold text-lg mb-10">
              Change Language
              </h4>
            </div>
            <div className="flex-none w-14 h-14 pl-8 pt-2">
              <label for="my-modal-1" className="cursor-pointer bg-gray-100">
                <VscClose size={25} className="text-slate-500" />
              </label>
            </div>
          </div>

          <div className="grid gap-2 grid-cols">
            <div>
              <label className="flex flex-row">
                <input
                  type="radio"
                  name="radio-3"
                  class="radio radio-primary"
                  checked
                />
                <h4 className="ml-2 mt-1 text-slate-500">Türkçe</h4>
              </label>
            </div>
            <div>
              <label className="flex flex-row">
                <input
                  type="radio"
                  name="radio-3"
                  class="radio radio-primary"
                />
                <h4 className="ml-2 mt-1 text-slate-500">English</h4>
              </label>
              <button className="bg-primary-brand-color text-brand-yellow transition-color hover:bg-brand-yellow hover:text-primary-brand-color h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold mt-6 ">
                Update
              </button>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}
