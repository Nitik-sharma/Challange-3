import React from "react";
import Trip from "../components/Trip/Trip";
import Image from "../components/Trip/Image";
import Component1 from "../components/ReUse/Component1";
import Pic from "../assets/About.avif";
import Pic1 from "../assets/About1.avif";
import Pic2 from "../assets/About2.avif";
function About() {
  return (
    <div>
      <Trip text={"Free shipping on orders over $50 amount"} />
      <Image
        img={Pic}
        falag={false}
        s
        htext={"About Build&Play"}
        buttonText={"Shoap Now"}
      />
      <Component1
        pera={
          "Mina is a brand born out of love for ceramics, vivid colours and passion for life."
        }
        image={Pic1}
        heading={"Alex & Laura"}
        pera1={
          "Two creative minds that came together at art school, Alex and Laura founded Mina with a shared passion for design and sustainability. For them, success is more than just about having a bestselling product."
        }
        pera11={
          "Every piece in our store has been created with love by Alex and Laura. They take inspiration from the world around them when it comes to shapes, colors, and the clay that they work with."
        }
        image1={Pic2}
        heading1={"Sustainability"}
        pera2={
          "Our thoughts about the planet impact everything we do, from the clay we use to the packaging we provide. Find out how we stay responsible."
        }
        flag={true}
      />
    </div>
  );
}

export default About;
