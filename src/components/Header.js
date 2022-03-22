import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header>
      {/* top header */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 z-10 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden cursor-pointer sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400">
          <input
            type="text"
            className="flex-grow flex-shrink h-full w-6 p-2 px-4 rounded-l-md focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="flex items-center text-xs text-white space-x-6 mx-6">
          <div onClick={session ? signOut : signIn} className="link">
            <p> {session ? `Hello, ${session?.user?.name}` : `Signin`}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 w-4 h-4 rounded-full text-xs text-black font-bold text-center">
              3
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden font-extrabold md:text-sm md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom header */}
      <div className="flex items-center space-x-5 p-2 pl-6 text-sm bg-amazon_blue text-white">
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden lg:inline link">Electronics</p>
        <p className="hidden lg:inline link">Food & Grocery</p>
        <p className="hidden lg:inline link">Prime</p>
        <p className="hidden lg:inline link">Buy Again</p>
        <p className="hidden lg:inline link">Shopper Toolkit</p>
        <p className="hidden lg:inline link">Health & Personal are</p>
      </div>
    </header>
  );
};

export default Header;
