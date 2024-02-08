import React from "react";
import pic1 from "../../assets/insta1.avif";
import pic2 from "../../assets/insta2.avif";
import pic3 from "../../assets/insta3.avif";
import { Button } from "flowbite-react";

function InstaPage() {
  const images = [
    {
      id: 1,
      img: pic1,
    },
    {
      id: 2,
      img: pic2,
    },
    {
      id: 3,
      img: pic3,
    },
  ];
  return (
    <div className=" p-7 mt-7 mb-16">
      <h1 className=" text-2xl md:text-6xl font-bold font-serif">
        Follow us on Instagram
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 mt-7 items-center gap-4">
        {images.map((item) => (
          <img src={item.img} key={item.id} alt={item.id} />
        ))}
      </div>
      <div className=" flex items-center justify-center mt-9">
        <Button color="purple" className=" w-40">
          @Nitik
        </Button>
      </div>
    </div>
  );
}

export default InstaPage;
