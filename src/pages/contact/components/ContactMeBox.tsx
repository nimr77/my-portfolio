import React from "react";
import json from "../../../../assets/contact.json";

export default function ContactMeBox() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-full rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm shadow-md m-4">
        <div className="w-full  flex flex-col justify-start items-start px-4 pb-4 text-center pt-2">
          <div className="w-full  flex flex-col justify-center items-center px-4 pb-4 text-center pt-2">
            <h3 className="text-lg font-bold">{json.title}</h3>
          </div>

          <input
            placeholder="You'r eMail"
            type="email"
            className="bg-gray-50 border border-gray-300
               text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500  p-2.5 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500
               w-full
                   "
          />

          <textarea
            placeholder="Your message"
            className="bg-gray-50 border border-gray-300
               text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500  p-2.5 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500
                   dark:focus:border-blue-500
               w-full mt-2
                   "
          ></textarea>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2
          w-full
          "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
