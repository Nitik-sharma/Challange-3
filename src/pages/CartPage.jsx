import React, { useEffect } from "react";
import img1 from "../assets/New-2.avif";
function CartPage() {
  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem("cart"));
    console.log(saveCart);
  }, []);
  return (
    <div className=" p-5 m-5">
      <div className=" flex flex-col md:flex-row items-center justify-center gap-5">
        <img src={img1} alt="" className=" w-40" />
        <div className=" flex items-center justify-between gap-4">
          <div>
            <h1>Name</h1>
            <p>Price</p>
          </div>
          <div>item</div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
