"use client"
import { logout } from "@/actions"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import { FaRegUser } from "react-icons/fa6"
import { FiShoppingBag } from "react-icons/fi"
import { IoMdLogOut } from "react-icons/io"

import { HiOutlineMenuAlt3 } from "react-icons/hi";

export function ProfileMenuDrawer() {
  return (

<Sheet>
  <SheetTrigger><HiOutlineMenuAlt3 /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-left pl-2">My Profile</SheetTitle>
      <SheetDescription>
       
      <nav className="flex flex-col justify-start items-start text-lg gap-1">
              <Link href="/profile/personal-info" className="flex gap-2 items-center p-2 hover:bg-muted/70 w-full"><FaRegUser/> Personal Information</Link>
              <Link href="/profile/orders" className="flex gap-2 items-center p-2 hover:bg-muted/70 w-full"><FiShoppingBag/> Orders</Link>
              <form action={logout} className="w-full">
              <button type="submit" className="flex gap-2 items-center p-2 hover:bg-muted/70 w-full"><IoMdLogOut/>Logout</button>
              </form>
            </nav>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}
