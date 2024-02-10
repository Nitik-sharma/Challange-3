import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { List, Product, NewCollaction } from "../components/Seler/ItemList";
import { Label, Select } from "flowbite-react";
import { Button } from "flowbite-react";

function Information() {
  const [stock, setStock] = useState(0);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const { id } = useParams();

  const selectedItem = List[id - 1] || Product[id - 1] || NewCollaction[id - 1];
  console.log(selectedItem);
  const stockLenth = selectedItem.color.length;

  const incrementStock = () => {
    if (stock < stockLenth) {
      setStock(stock + 1);
    }
  };
  const decrementStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    const existingIndex = cart.findIndex(
      (item) => item.UniqId === selectedItem.UniqId
    );

    if (existingIndex !== -1 && stock > 0) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += stock;
      updatedCart[existingIndex].price += selectedItem.price2 * stock;
      setCart(updatedCart);
    } else if (stock > 0) {
      setCart([
        ...cart,
        {
          id: selectedItem.id,
          UniqId: selectedItem.UniqId,
          title: selectedItem.title,
          price: selectedItem.price2,
          img: selectedItem.pic,
          quantity: stock,
        },
      ]);
    }
  };
  console.log(cart);

  return (
    <div className=" p-7 mt-10 mb-10">
      <div className=" flex items-center  gap-6 flex-col md:flex-row">
        <div className=" flex-1">
          <img src={selectedItem.pic} alt="pics" />
        </div>
        <div className="flex-1">
          <h1 className=" font-bold text-2xl md:text-4xl">
            {selectedItem.title}
          </h1>
          <div className=" flex items-center gap-6 mt-4 text-xl md:text-2xl ">
            {" "}
            <p className=" mr-2 text-gray-400 line-through ">
              {selectedItem.price1 && selectedItem.price1}
            </p>
            <p>{selectedItem.price2}</p>
          </div>

          <div>
            <div className="mb-2  flex flex-col text-start mt-7 ">
              <Label
                htmlFor="Color"
                value="Colors"
                className=" text-xl md:text-3xl"
              />
            </div>
            <Select id="Colors" required>
              {selectedItem.color &&
                selectedItem.color.map((item, i) => (
                  <option key={i} className=" text-xl md:text-2xl">
                    {item}
                  </option>
                ))}
            </Select>
          </div>
          {/* for staock */}
          <div className=" flex items-center justify-between gap-8 mt-6">
            <div className=" flex w-44 h-10 border mt-7 cursor-pointer ">
              <div
                className=" border border-gray-500 border-2-x flex-1 text-center flex items-center justify-center text-xl font-bold"
                onClick={incrementStock}
              >
                +
              </div>
              <div className=" border border-gray-500 border-2-x flex-1 text-center flex items-center justify-center text-xl font-bold">
                {stock}
              </div>
              <div
                className=" border border-gray-500 border-2-x flex-1 text-center flex items-center justify-center text-xl font-bold"
                onClick={decrementStock}
              >
                -
              </div>
            </div>
            {stockLenth > 0 ? (
              <h3 className=" mt-7 text-xl md:text-3xl text-gray-600 font-bold">
                {stockLenth} in Stock
              </h3>
            ) : (
              <h3 className=" mt-7 text-xl md:text-3xl text-gray-600 font-bold">
                Stock is empty?
              </h3>
            )}
          </div>
          <Button
            color="blue"
            className=" mt-6 w-56 "
            onClick={handleAddToCart}
          >
            Add to Bag
          </Button>
          <p className="text-xl  text-gray-600 mt-5">
            {selectedItem.discription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
