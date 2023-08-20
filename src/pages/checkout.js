import React from "react";
import { useSession, signIn } from "next-auth/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import {
  selectItems,
  selectTotal,
  selectTotalPrice,
} from "../slices/basketSlice";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const totalPrice = useSelector(selectTotalPrice);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-xl mx-auto lg:flex">
        <div className="m-5 shadow-sm flex-grow">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="bg-white flex flex-col p-5 space-y-10">
            <h1 className="text-3xl border-b pb-4">
              {total === 0 ? `Your Basket is Empty!` : `Shopping Basket`}
            </h1>
            {items.map(
              ({
                id,
                title,
                price,
                amount,
                category,
                description,
                image,
                rating,
                prime,
              }) => (
                <CheckoutProduct
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  amount={amount}
                  category={category}
                  description={description}
                  image={image}
                  rating={rating}
                  prime={prime}
                />
              )
            )}
          </div>
        </div>

        {total > 0 && (
          <div className="flex flex-col m-5 p-10 bg-white shadow-md">
            <h2 className="whitespace-nowrap">
              {`Subtotal (${total} ${total > 1 ? "items" : "item"}): `}
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </h2>

            <button className="button mt-5" disabled={!session}>
              {session ? "Checkout" : "Signin to Checkout"}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
