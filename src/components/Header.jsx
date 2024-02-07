import React, { useState } from "react";
import Logo from "../assets/build-play-logo-AE0vXbXy0pHLopxp.avif";
import { Link } from "react-router-dom";
import { CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Dropdown } from "flowbite-react";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "Home",
      link: "/",
    },

    {
      title: "About",
      link: "/about",
    },
    {
      title: "Sustainability",
      link: "/sustainability",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="w-[100%] box-border sticky top-0 z-[999] bg-white  ">
      <header className="flex   w-full  md:flex-row items-center justify-between shadow-2xl	 p-5  ">
        {/* Logo image */}
        <Link to={"/"}>
          {" "}
          <img src={Logo} alt="logo" className=" h-16 md:h-24 " />
        </Link>
        {/* links  */}
        <div className=" flex items-start  gap-1 md:gap-8">
          <ul className=" hidden md:flex items-center justify-between gap-4 font-semibold text-xl ">
            {links.map((items, i) => (
              <Link key={i} to={items.link}>
                <li className=" hover:text-orange-600 hover:scale-105">
                  {items.title}
                </li>
              </Link>
            ))}
          </ul>
          <Dropdown label="Shop" inline className=" text-xl font-bold">
            <Link to={"/allProduct"}>
              <Dropdown.Item>All Product</Dropdown.Item>
            </Link>
            <Link to={"/newCollection"}>
              {" "}
              <Dropdown.Item>New Collaction</Dropdown.Item>
            </Link>
          </Dropdown>
          {/* cart logo */}
          <div className=" flex items-center justify-center font-bold text-xl mr-2">
            <CiShoppingCart size={30} />
            <span>0</span>
          </div>
        </div>
        {/* responsive navbar */}
        <div className=" flex md:hidden  relative">
          <div
            className=" w-12 h-12  text-2xl flex items-center justify-center text-gray-600 "
            onClick={() => setOpen(!open)}
          >
            {/* <CiMenuBurger size={50} />
            <MdClose size={50} /> */}
            {open ? <MdClose size={50} /> : <CiMenuBurger size={50} />}
            <div>
              {open && (
                <div className="absolute top-0 right-0   p-10  ">
                  <ul className="flex flex-col  items-center justify-between  font-semibold mt-5    transition-all gap-8 text-2xl   ">
                    {links.map((items, i) => (
                      <Link key={i} to={items.link}>
                        <li className=" hover:text-orange-600 hover:scale-105">
                          {items.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
