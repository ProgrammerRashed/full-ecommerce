import Link from "next/link";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareYoutube,
  FaSquarePhone, 
  FaLocationDot,
  FaMapLocationDot
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const FooterComponent = () => {
  return (
    <div className="bg-muted">
      <div className="flex items-end w-full">
        <footer className="w-full text-muted-foreground">
          {/* FOOTER CONTENT START */}
          <div className="max-w-[1240px] mx-auto">
            {/* LOGO INFO */}
            <div className="">
              <Link href="/" className="flex items-center justify-center font-medium text-black title-font md:justify-start">
                ZossGadget
              </Link>
              <p className="mt-2">Elevating Your Tech Experience</p>
              {/* SOCIAL ICONS */}
              <div className="mt-4 flex gap-4 text-xl">
                <FaSquareFacebook />
                <FaSquareInstagram />
                <FaSquareYoutube />
              </div>
            </div>

            {/* ABOUT US */}
            <div className="">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <Link href="/about" className=" cursor-pointer hover:text-black">Company</Link>
                </li>
                <li className="mt-3">
                  <Link href="/career" className=" cursor-pointer hover:text-black">Careers</Link>
                </li>
                <li className="mt-3">
                  <Link href="/team" className=" cursor-pointer hover:text-black">Team</Link>
                </li>
              </nav>
            </div>

            {/* INFORMATION */}
            <div className="">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font">
                Support
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className=" cursor-pointer hover:text-black">
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a className=" cursor-pointer hover:text-black">
                    Help Resources
                  </a>
                </li>
                <li className="mt-3">
                  <a className=" cursor-pointer hover:text-black">
                    Release Updates
                  </a>
                </li>
              </nav>
            </div>

            {/* CONTACT */}
            <div className="">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3 flex gap-2 items-center">
                  <FaSquareWhatsapp className="text-xl" />
                  <Link
                    href="https://api.whatsapp.com/send?phone=8801318044400"
                    rel="noopener noreferrer"
                    target="_blank"
                    className=" cursor-pointer text-blue-500 hover:underline "
                  >
                    Send a Message
                  </Link>
                </li>
                <li className="mt-3 cursor-pointer hover:text-black flex items-center gap-2">
                  <MdEmail className="text-xl" />
                  <p>support@zossgadget.com.bd</p>
                </li>
                <li className="mt-3 cursor-pointer hover:text-black flex items-center gap-2">
                  <FaSquarePhone  className="text-xl" />
                  <p> +8801318-944400</p>
                </li>
                <li className="mt-3 cursor-pointer hover:text-black flex items-start gap-2">
                  <FaLocationDot className="text-xl" />
                  <p>
                    Haldibari Hat, Baliadangi, <br /> Thakuragaon. Bangladesh
                  </p>
                </li>
                <li className="mt-1 cursor-pointer  flex items-center gap-2">
                <FaMapLocationDot className="text-xl"/>
                  <Link
                    href="https://maps.app.goo.gl/Pc9c16Z2zgRtJScY6"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    See on Map
                  </Link>
                </li>
              </nav>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="bg-foreground text-white">
            <div className="max-w-[1240px] mx-auto py-4">
              <p className="text-sm capitalize lg:text-center">
                &copy; 2024 ZossGadget All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterComponent;
