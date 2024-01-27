import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import registerImage from "../../../assets/auth/image-2.png";

const Register = () => {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-5 justify-center items-center">
      {/* IMAGE */}
      <div className="hidden lg:block col-span-3 w-full h-screen">
        <Image
          src={registerImage}
          width={1000}
          height={1000}
          alt="register-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="col-span-2 w-full h-full flex justify-center items-center p-5">
        <div className="registration-form">
          {/* PAGE HEADER  */}
          <div className="py-5">
            <h1 className="text-foreground font-bold text-xl">
              Create an Account 👋
            </h1>
            <p className="text-muted-foreground text-sm">
              Please Enter Details!
            </p>
          </div>
          {/* LOGIN FORM */}
          <form>
            {/* NAME INPUT */}

            <div className="grid w-full items-center gap-1.5 ">
              <label htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                placeholder="Enter Full Name.."
                type="text"
                required
                className="border border-border focus:outline-input rounded p-2"
              />
            </div>
            {/* FILE INPUT */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <label htmlFor="name">
                Choose Image <span className="text-red-500">*</span>
              </label>
              <input
                name="image"
                placeholder="Choose Profile Picture"
                type="file"
                required
                className="border border-border focus:outline-input rounded p-1 file:bg-muted file:border-none file:rounded file:mr-3 file:p-1 file:px-2 text-muted-foreground"
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter your email.."
                name="email"
                type="email"
                required
                className="border border-border focus:outline-input rounded p-2"
              />
            </div>

            {/* PASSWORD INPUTS */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* PASSWORD INPUT */}

              <div className="grid w-full items-center gap-1.5 mt-3">
                <label htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password.."
                  required
                  className="border border-border focus:outline-input rounded p-2"
                />
              </div>

              {/*CONFIRM PASSWORD INPUT */}
              <div className="grid w-full items-center gap-1.5 mt-3">
                <label htmlFor="confirm-password">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  placeholder="Enter your password.."
                  required
                  className="border border-border focus:outline-input rounded p-2"
                />
              </div>
            </div>
            {/* SUBMIT BUTTON */}
            <Button className="w-full mt-4" type="submit">
              Sign Up
            </Button>
          </form>

          {/* LOGIN CTA */}
          <div className="my-5 w-full">
            <Link href="/login" className="w-full flex justify-between">
              <span>Already have an account?</span>
              <span className="text-blue-500 hover:underline">Login Here!</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
