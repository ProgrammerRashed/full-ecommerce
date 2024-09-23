import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { ProfileDropdownMenu } from "./ProfileDropdown";
const MobileNav = ({ session }: { session: any | null }) => {
  return (
    <div className="bg-white w-screen fixed z-[9999] bottom-0">
      <nav className="flex border justify-between items-center w-full">
        <Link href="/" className="pointer   h-[40px] w-full flex items-center justify-center">
          <IoMdHome className="h-7 w-7" />
        </Link>
        <Link href="/shop" className="pointer   h-[40px] w-full flex items-center justify-center">
          <FaShop className="h-7 w-7"/>
        </Link>
        <Link href="/cart" className="pointer   h-[40px] w-full flex items-center justify-center">
          <FaShoppingCart  className="h-7 w-7"/>
        </Link>
        <div className="pointer   h-[40px] w-full flex items-center justify-center">
          <ProfileDropdownMenu />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
