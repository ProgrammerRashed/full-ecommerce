import ContinueShoppingCard from "@/components/cart/ContinueShoppingCard";
import type { Metadata } from "next";

import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
export const metadata: Metadata = {
  title: "ZossGadget | Profile",
  description: "One of the best E-commerce website in bangladesh",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="max-w-[1240px] mx-auto px-2 md:px-3 lg:px-5">
      <h1 className="text-4xl font-bold">My Profile</h1>

      <div className="grid grid-cols-12 gap-5 mt-8 min-h-[60vh]">
        <div className="col-span-3">
         
            <nav className="flex flex-col justify-start items-start text-lg gap-1">
              <Link href="/profile/personal-info" className="flex gap-2 items-center p-2 hover:bg-muted/70 w-full"><FaRegUser/> Personal Information</Link>
              <Link href="/profile/orders" className="flex gap-2 items-center p-2 hover:bg-muted/70 w-full"><FiShoppingBag/> Orders</Link>
              <Link href="/profile/orders" className="flex gap-2 items-center p-2 hover:bg-muted/70 w-full"><IoMdLogOut/>Logout</Link>
            </nav>
        
        </div>
        <div className="col-span-9">{children}</div>
      </div>

      <div>
        <ContinueShoppingCard/>
      </div>
    </div>
  );
}
