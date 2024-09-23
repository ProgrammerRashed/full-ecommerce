import { logout } from "@/actions"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { FaUserCircle } from "react-icons/fa"
import { IoMdLogOut } from "react-icons/io"

export function ProfileDropdownMenu() {
  return (

    <DropdownMenu >
      <DropdownMenuTrigger className="flex justify-center items-center"> <FaUserCircle className="h-7 w-7" /></DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mb-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/orders">Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/cart">Cart</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <form action={logout} className=" w-full" >
            <button type="submit" className="flex w-full h-full gap-2 items-center p-2 hover:bg-muted/70 "><IoMdLogOut />Logout</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
