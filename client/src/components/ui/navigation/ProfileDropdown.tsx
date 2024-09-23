import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaUserCircle } from "react-icons/fa"

export function ProfileDropdownMenu() {
  return (
 
    <DropdownMenu >
  <DropdownMenuTrigger> <FaUserCircle className="h-7 w-7"/></DropdownMenuTrigger>
  <DropdownMenuContent className="mr-2 mb-2">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}
