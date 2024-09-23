import Image from "next/image";
import Link from "next/link";
import nagadLogo from "../../assets/nagad-logo.png";
import bkashLogo from "../../assets/bkash-logo.png";
import rocketLogo from "../../assets/rocket-logo.jpg";
import upayLogo from "../../assets/upay-logo.png";
import surecashLogo from "../../assets/surecash-logo.png";
import visaLogo from "../../assets/visa-logo.png";
import mastercardLogo from "../../assets/mastercard-logo.png";
import americanExpress from "../../assets/amex-logo.png";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquareYoutube,
  FaSquarePhone,
  FaLocationDot,
  FaMapLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const FooterComponent = () => {
  return (
    <div className="bg-muted">
      <div className="flex items-end w-full">
        <footer className="w-full text-muted-foreground">
          {/* FOOTER CONTENT START */}
          <div className="max-w-[1240px] mx-auto grid lg:grid-cols-4 pt-10 px-2 md:px-3 lg:px-5">
            {/* LOGO INFO */}
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start pb-10">
              <Link
                href="/"
                className="flex items-center justify-center font-medium text-black title-font md:justify-start"
              >
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
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none flex flex-col justify-center items-center lg:justify-start lg:items-start" >
                <li className="mt-3">
                  <Link
                    href="/about"
                    className=" cursor-pointer hover:text-black"
                  >
                    Company
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="/career"
                    className=" cursor-pointer hover:text-black"
                  >
                    Careers
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="/team"
                    className=" cursor-pointer hover:text-black"
                  >
                    Team
                  </Link>
                </li>
              </nav>
            </div>

            {/* INFORMATION */}
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font">
                Information
              </h2>
              <nav className="mb-10 list-none flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <li className="mt-3">
                  <Link
                    href="terms"
                    className=" cursor-pointer hover:text-black"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="return"
                    className=" cursor-pointer hover:text-black"
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="privacy"
                    className=" cursor-pointer hover:text-black"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="after-sales-support"
                    className=" cursor-pointer hover:text-black"
                  >
                    After-Sale Support
                  </Link>
                </li>
                <li className="mt-3">
                  <Link
                    href="refund"
                    className=" cursor-pointer hover:text-black"
                  >
                    Refund Policy
                  </Link>
                </li>
              </nav>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-black uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none flex flex-col justify-center items-center lg:justify-start lg:items-start">
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
                  <a href="mailto:contact@zossgadget.com.bd">contact@zossgadget.com.bd</a>
                </li>
                <li className="mt-3 cursor-pointer hover:text-black flex items-center gap-2">
                  <FaSquarePhone className="text-xl" />
                  <a href="tel:+8801318944400"> +8801318-944400</a>
                </li>
                <li className="mt-3 cursor-pointer hover:text-black flex items-start gap-2">
                  <FaLocationDot className="text-xl" />
                  <p>
                    Haldibari Hat, Baliadangi, <br /> Thakuragaon. Bangladesh
                  </p>
                </li>
                <li className="mt-1 cursor-pointer  flex items-center gap-2">
                  <FaMapLocationDot className="text-xl" />
                  <Link
                    href="https://maps.app.goo.gl/Yk3r3KoNaGr3Wo117"
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
          {/* PAYMENT METHOD DISPLAY */}
          <div className="payment-methods-display flex flex-col lg:flex-row gap-2 lg:gap-5 items-center justify-center max-w-[1240px] px-2 md:px-3 lg:px-5 mx-auto py-5">
            <p className="text-xl text-foreground">Pay With</p>
            <div className="methods grid grid-cols-8 gap-4 lg:border-l-2  border-t-2 lg:border-t-0 border-l-0 border-black pt-3 lg:pt-0">
              <div className="ml-2 method-card bg-white flex justify-center items-center rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={nagadLogo}
                  alt="nagad-logo"
                />
              </div>
              <div className="method-card bg-white flex justify-center items-center rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={bkashLogo}
                  alt="bkash-logo"
                />
              </div>
              <div className="method-card bg-white flex justify-center items-center rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={rocketLogo}
                  alt="rocket-logo"
                  className="rounded"
                />
              </div>
              <div className="method-card bg-white flex justify-center items-center rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={surecashLogo}
                  alt="surecash-logo"
                />
              </div>
              <div className="method-card bg-white flex justify-center items-center rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={upayLogo}
                  alt="upay-logo"
                />
              </div>
              <div className="method-card bg-white flex justify-center items-center rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={visaLogo}
                  alt="visa-logo"
                />
              </div>
              <div className="method-card bg-white flex justify-center items-center rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={mastercardLogo}
                  alt="mastercard-logo"
                />
              </div>
              <div className="method-card bg-white flex justify-center items-center rounded overflow-hidden">
                <Image
                  width={100}
                  height={100}
                  src={americanExpress}
                  alt="americanExpress-logo"
                />
              </div>
            </div>
          </div>
          {/* COPYRIGHT */}
          <div className="bg-foreground text-white">
            <div className="max-w-[1240px] mx-auto py-4 px-2 md:px-3 lg:px-5 ">
              <p className="text-sm capitalize text-center">
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
