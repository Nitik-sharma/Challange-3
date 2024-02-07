import React from "react";
import { Link } from "react-router-dom";
function Image({ img, text, htext, buttonText, url, falag, button }) {
  return (
    <div className=" w-full relative z-1">
      <img src={img} className="w-[100%]  " />
      <div className="flex flex-col items-start justify-center absolute top-[20%] left-[20%] md:top-[40%] md:left-[34%] ">
        <h1 className="text-xl md:text-6xl font-semibold font-mono text-white  tracking-wide">
          {htext}
        </h1>
        {falag === true ? (
          <div className=" flex flex-col w-[80%] h-6 ">
            <label className=" text-start mb-3 text-xl font-medium text-white ">
              email
            </label>
            <input
              type="email"
              className=" w-[100%] rounded-md border-none outline-none"
              placeholder="your email address"
            />
          </div>
        ) : (
          ""
        )}
        <p className="text-sm md:text-4xl m-4 text-clip text-white font-serif">
          {text}
        </p>
        {falag === false && (
          <Link
            to={url}
            className=" text-xl p-2 mb-3  ml-16 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-yellow-50 font-mono capitalize md:text-3xl md:p-6 md:m-16 md:ml-48"
          >
            {buttonText}
          </Link>
        )}
        {falag === true ? (
          <button className=" text-xl p-2 mb-3  ml-16 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-yellow-50 font-mono capitalize md:text-3xl md:p-4 md:m-16 md:ml-48">
            {buttonText}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Image;
