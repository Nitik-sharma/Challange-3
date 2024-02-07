import React from "react";
import { Link } from "react-router-dom";
function Component1({
  pera,
  image,
  pera1,
  heading,
  image1,
  heading1,
  pera2,
  pera11,
  pera12,
  flag,
}) {
  return (
    <div className=" flex flex-col items-center justify-center mt-5">
      <p className=" font-mono text-xl md:text-3xl p-24 font-bold">{pera}</p>

      <div className=" mt-5 flex flex-col md:flex-row gap-5">
        <img src={image} className=" rounded-md p-4" />
        <div>
          <h1 className=" text-md md:text-5xl font-bold font-serif p-5 m-5 ">
            {heading}
          </h1>
          <p className=" text-sm md:text-3xl p-9 leading-tight text-gray-400 ">
            {pera1}
          </p>
          <p className=" text-sm md:text-3xl p-9 leading-tight text-gray-400 ">
            {pera11}
          </p>
        </div>
      </div>
      <div className=" mt-5 flex flex-col  gap-5 md:flex-row-reverse">
        <img src={image1} className=" rounded-md p-4" />
        <div>
          <h1 className=" text-md md:text-5xl font-bold font-serif p-5 m-5 ">
            {heading1}
          </h1>
          <p className=" text-sm md:text-3xl p-9 leading-tight text-gray-400 ">
            {pera2}
          </p>
          <p className=" text-sm md:text-3xl p-9 leading-tight text-gray-400 ">
            {pera12}
            {flag === true && (
              <Link>
                <button className=" items-start p-4 bg-purple-900 rounded-md text-white font-mono">
                  Learn More
                </button>
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Component1;
