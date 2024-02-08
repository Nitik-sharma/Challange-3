import React from "react";
import { List, List2 } from "./ItemList";
import HomeDecor from "../../assets/Homedecoration.avif";
import Image from "../Trip/Image";
import { Link } from "react-router-dom";
import frame from "../../assets/Frame-1.avif";

function BestSeler() {
  return (
    <div>
      <div className=" flex items-center justify-center flex-col p-2 mt-7">
        <h1 className=" text-sm md:text-5xl capitalize font-mono font-medium mb-6">
          Our bestsellers
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
          {List.map((item) => (
            <Link
              to={{
                pathname: `/information/${item.id}`,
                state: { item },
              }}
              key={item.id}
            >
              <div>
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
      <div className=" mt-4">
        <Image
          img={HomeDecor}
          text={"Find your new favorite pieces."}
          htext={"Homedecor items"}
          buttonText={"Shop now"}
          url={"/allProduct"}
          falag={false}
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 p-5">
        {List2.map((item) => (
          <div key={item.id}>
            <img
              src={item.pic}
              alt={item.id}
              className=" h-[500px] rounded-md"
            />
            <div>
              <h3 className=" text-xl md:text-4xl font-serif font-semibold m-3 text-start ml-2 ">
                {item.title}
              </h3>
              <p className=" text-sm md:text-2xl text-start ml-2 text-gray-400 ">
                {item.discription}
              </p>
              <div className=" flex items-start ml-2 mt-2">
                <Link>
                  <button className=" items-start p-4 bg-purple-900 rounded-md text-white font-mono">
                    {item.button}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Image
          img={frame}
          falag={true}
          htext={"Sign-up for our newsletter"}
          buttonText={"Submit"}
        />
      </div>
    </div>
  );
}

export default BestSeler;
