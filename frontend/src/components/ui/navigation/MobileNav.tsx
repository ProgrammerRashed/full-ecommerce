import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
const MobileNav = () => {
  return (
    <div className="bg-gray-300 p-3 w-full">
      <nav className="flex gap-3  mx-auto justify-between items-center px-3">
        <Link href="/">
          <IoMdHome />
        </Link>
        <Link href="/shop">
          <FaShop />
        </Link>
        <Link href="/cart">
          <FaShoppingCart />
        </Link>
        <Link href="/profile">
          <FaUserCircle />
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
