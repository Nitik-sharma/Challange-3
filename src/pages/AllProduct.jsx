import React from "react";
import { List } from "../components/Seler/ItemList";
import { Product } from "../components/Seler/ItemList";
import Trip from "../components/Trip/Trip";
import Image from "../components/Trip/Image";
import Pic from "../assets/shop.avif";
function AllProduct() {
  const AllList = { ...List };

  console.log("List", List);
  console.log("product", Product);

  console.log("first", AllList);
  return (
    <div>
      <Trip text={"Free shipping on orders over $50 amount"} />
      <Image img={Pic} htext={"Shop"} />
      <div></div>
    </div>
  );
}

export default AllProduct;
