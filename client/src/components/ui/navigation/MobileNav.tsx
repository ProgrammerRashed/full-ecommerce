import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { ProfileDropdownMenu } from "./ProfileDropdown";
const MobileNav = () => {
  return (
    <div className="bg-white p-3 w-full">
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
        <div >
          <ProfileDropdownMenu/>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
