import React from "react";
import Trip from "../components/Trip/Trip";
import Pic from "../assets/Frame-1.avif";
import Pic1 from "../assets/sus-1.avif";
import Pic2 from "../assets/sus-2.avif";

import Image from "./../components/Trip/Image";
import Component1 from "./../components/ReUse/Component1";
function Sustainability() {
  return (
    <div>
      <Trip text={"Free shipping on orders over $50 amount"} />
      <Image
        img={Pic}
        falag={false}
        s
        htext={"Sustainability"}
        buttonText={"Shoap Now"}
      />
      <Component1
        pera={
          "We care about our planet. For this reason, Mina aims to be operating sustainably and ethically at every level."
        }
        image={Pic1}
        heading={"Working Ethos"}
        pera1={
          "or Alex and Laura, planning ahead is a central component of sustainable design. Work begins with sketches of ideas before any clay is modeled. Fully conceptualizing and refining each design beforehand helps us to reduce material waste."
        }
        pera11={
          "We strive to work collaboratively at every stage. Our team efforts minimize energy usage in the studio."
        }
        image1={Pic2}
        heading1={"Materials"}
        pera2={
          "Surrounded by beautiful landscapes, it is only right that our studio is stocked with only the finest local materials that haven't had to travel far to get to us. Our clay is as locally sourced as possible for every product.We ensure that the paint we use on our products is low-VOC and never washed into local waterways during production."
        }
        pera12={
          "We ensure that the paint we use on our products is low-VOC and never washed into local waterways during production."
        }
      />
    </div>
  );
}

export default Sustainability;
