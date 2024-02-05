import React from "react";
import Trip from "../components/Trip/Trip";
import Image from "../components/Trip/Image.jsx";
import img from "../assets/desktop-2.avif";

function Home() {
  return (
    <div className="  ">
      <Trip text={"Free shipping on orders over $50 amount"} />
      <Image
        img={img}
        text={"Painted clay ceramics made with love."}
        htext={"Handmade ceramics"}
        buttonText={"Shop now"}
        url={"/shop"}
      />
    </div>
  );
}

export default Home;
