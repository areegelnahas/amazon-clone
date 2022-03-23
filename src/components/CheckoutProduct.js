import React from "react";
import { useDispatch } from "react-redux";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import { removeFromBasket, addToBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  amount,
  category,
  description,
  image,
  rating,
  prime,
}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeFromBasket(id));
  };

  const addToCart = () => {
    const item = {
      id,
      title,
      price,
      category,
      description,
      image,
      rating,
      prime,
    };
    dispatch(addToBasket(item));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_) => (
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
          <span className="text-xs">{`x${amount}`}</span>
        </div>

        {prime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              src="https://links.papareact.com/fdw"
              alt=""
              className="w-12"
            />
            <p className="text-xs text-grey-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="space-y-3 my-auto">
        <button onClick={addToCart} className="button">
          Add More to Basket
        </button>
        <button onClick={removeFromCart} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
