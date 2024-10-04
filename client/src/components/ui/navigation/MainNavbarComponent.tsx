import Link from "next/link";
import { Button } from "../button";
import Image from "next/image";
import zossGadgetLogo from "../../../assets/zossgadget-logo.png";
import { ProfileDropdownMenu } from "./ProfileDropdown";
const MainNavbarComponent = ({ session }: { session: any | null }) => {
  
  return (
    <nav className="flex justify-between max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5 ">
      <div className="logo flex justify-center items-center">
        <Link href="/">
          <Image
            src={zossGadgetLogo}
            alt="zossgadget logo"
            height={80}
            width={230}
          />
        </Link>
      </div>
      <ul className="flex gap-3 justify-center items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          {!session?.email ? <ProfileDropdownMenu/> : <Link href="/login">
            <Button>Login</Button>
          </Link>}
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbarComponent;
