import React from "react";
import { Link } from "react-router-dom";
function Image({ img, text, htext, buttonText, url }) {
  return (
    <>
      <img src={img} className=" w-[100%] relative" />
      <div className="flex flex-col items-start justify-center">
        <h1 className=" absolute top-[70%] left-[23%] tracking-[.25em] text-6xl font-extrabold text-white uppercase">
          {htext}
        </h1>
        <p className=" absolute top-[90%] left-[41%] text-xxl md:text-2xl text-white">
          {text}
        </p>
        <Link to={url} className=" absolute top-[100%] left-[46%] p-5 bg-white">
          {buttonText}
        </Link>
      </div>
    </>
  );
}

export default Image;
