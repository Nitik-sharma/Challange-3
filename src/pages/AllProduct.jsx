import React from "react";

import { Product } from "../components/Seler/ItemList";
import Trip from "../components/Trip/Trip";
import Image from "../components/Trip/Image";
import Pic from "../assets/shop.avif";
import { Link } from "react-router-dom";
function AllProduct() {
  console.log("product", Product);

  return (
    <div>
      <Trip text={"Free shipping on orders over $50 amount"} />
      <Image
        img={Pic}
        htext={"Shop Now"}
        falag={false}
        buttonText={"Shop Now"}
        button={false}
      />
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
        {Product.map((item) => (
          <Link
            key={item.id}
            to={{
              pathname: `/information/${item.id}`,
              state: { item },
            }}
          >
            <div key={item.id}>
              <img src={item.pic} alt={item.id} />
              <div>
                <h3 className=" text-xs md:text-xl font-serif font-semibold m-3">
                  {item.title}
                </h3>
                <p className=" text-sm md:text-xl">
                  <span className=" mr-2 text-gray-400 line-through ">
                    {item.price1}
                  </span>
                  <span className=" ml-2">{item.price2}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
