import React from "react";
import { Link } from "react-router-dom";
function Image({ img, text, htext, buttonText, url, falag, button }) {
  return (
    <div className=" w-full relative z-1">
      <img src={img} className="w-[100%]  " />
      {falag === false ? (
        <div className="flex flex-col items-start justify-center absolute top-[20%] left-[30%] md:top-[40%] md:left-[34%] ">
          <h1 className="text-xl md:text-6xl font-semibold font-mono text-white  tracking-wide ml-10 md:ml-0">
            {htext}
          </h1>
          <p className="text-sm md:text-4xl m-4 text-clip text-white font-serif">
            {text}
          </p>
          <Link
            to={url}
            className="text-sm p-4 mb-3 ml-[4rem] md:ml-[10rem]  rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-yellow-50 font-mono capitalize md:text-2xl   "
          >
            {buttonText}
          </Link>
        </div>
      ) : (
        <div className=" flex flex-col w-[80%] h-6  flex-start left-[20%] absolute top-[5%] md:top-[10%]  ">
          <h1 className="text-xl md:text-6xl font-semibold font-mono text-white  tracking-wide mr-32 md:mr-0">
            {htext}
          </h1>
          <label className=" text-start mb-3 text-xl font-medium text-white md:ml-20 md:mt-10 ml-10 mt-5  ">
            email
          </label>
          <input
            type="email"
            className=" w-[60%] md:ml-20 ml-10  rounded-md border-none outline-none"
            placeholder="your email address"
          />
          <button className=" text-xl w-[40%] p-2  mb-3  ml-16 mt-4 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-yellow-50 font-mono capitalize md:text-3xl md:p-4 md:m-16 md:ml-48">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default Image;
