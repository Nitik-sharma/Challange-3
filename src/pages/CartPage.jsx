import React, { useEffect, useState } from "react";
import img1 from "../assets/New-2.avif";
import { MdOutlineDeleteOutline } from "react-icons/md";
function CartPage() {
  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });
  useEffect(() => {
    const saveCart = localStorage.getItem("cart");
    if (saveCart) {
      setCart(JSON.parse(saveCart));
    }
    console.log("cartPage", cart);
  }, []);
  const handleDelteItem = (UniqId) => {
    const UpadateCart = cart.filter((item) => item.UniqId != UniqId);
    setCart(UpadateCart);
    localStorage.setItem("cart", JSON.stringify(UpadateCart));
  };

  return (
    <div className=" p-5 m-5">
      {cart.map((item) => (
        <div
          className=" flex flex-col md:flex-row items-center justify-between border  p-3 mb-3 "
          key={item.id}
        >
          <img src={item.img} alt="" className=" w-40" />
          <div className=" flex  justify-between gap-4 mt-3">
            <div className=" ">
              <h1 className=" font-bold text-xl md:text-2xl">{item.title}</h1>
              <p className=" font text-sm md:text-xl text-gray-600 ">
                {item.price}
              </p>
            </div>
            <div className=" ">
              <MdOutlineDeleteOutline
                size={20}
                className=" items-start"
                onClick={() => handleDelteItem(item.UniqId)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
