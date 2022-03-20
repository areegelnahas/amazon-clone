import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";

const Product = ({ id, title, price, category, description, image }) => {
  const [rating] = useState(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  const [prime] = useState(Math.random() > 0.5);
  return (
    <div className="relative flex flex-col bg-white z-30 p-10 m-5">
      <p className="absolute right-2 top-2 text-sm text-gray-400 italic">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 font-medium">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={Math.random()} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs line-clamp-2 my-2">{description}</p>
      <div className="mb-5">
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      {prime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
          <p className="text-xs">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="button mt-auto w-full">Add to Basket</button>
    </div>
  );
};

export default Product;
