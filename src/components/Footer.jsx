import React from "react";
import { FaFacebookF, FaInstagram, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className=" h-60 bg-gray-300">
      <div className=" flex flex-col md:flex-row justify-between  ">
        <div className=" m-6">
          <h1 className=" text-2xl md:text-5xl  font-bold ">MINA</h1>
          <div className=" flex gap-5 mt-7">
            <FaFacebookF size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
        <div className=" m-6 mr-8  flex flex-col gap-5 ">
          <h1 className=" text-xl font-bold underline">Contact us</h1>
          <h1 className=" text-xl font-bold underline">Return</h1>
          <h1 className=" text-xl font-bold underline">Payments & Delivery</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
