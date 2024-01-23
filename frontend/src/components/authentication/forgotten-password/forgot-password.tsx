import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center text-sm">
      <div className="login-form">
        {/* PAGE HEADER  */}
        <div className="py-5">
          <Link
            className="flex gap-1 items-center hover:text-blue-500 transition-all ease-in-out"
            href="/login"
          >
            <span className="-translate-y-[1px]">
              <FaArrowLeft />
            </span>
            <span> Back</span>
          </Link>
          <h1 className="text-foreground font-bold text-xl pt-5 pb-2">
            Forgot Password
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your registered email address. <br /> We'll send you an email
            to reset your password
          </p>
        </div>
        {/* LOGIN FORM */}
        <form>
          {/* EMAIL INPUT */}
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter your email.."
              type="email"
              name="email"
              required
              className="border border-border focus:outline-input rounded p-2"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <Button className="w-full mt-4" type="submit">
            Recover Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
