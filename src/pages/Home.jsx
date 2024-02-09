import React from "react";
import Trip from "../components/Trip/Trip";
import Image from "../components/Trip/Image.jsx";
import img from "../assets/desktop-2.avif";
import BestSeler from "../components/Seler/BestSeler.jsx";
import InstaPage from "../components/InstaPage/InstaPage.jsx";

function Home() {
  return (
    <div className="  ">
      <Trip text={"Free shipping on orders over $50 amount"} />
      <Image
        img={img}
        falag={false}
        button={true}
        text={"Painted clay ceramics made with love."}
        htext={"Handmade ceramics"}
        buttonText={"Shop now"}
        url={"/allProduct"}
      />
      <BestSeler />
      <InstaPage />
    </div>
  );
}

export default Home;
