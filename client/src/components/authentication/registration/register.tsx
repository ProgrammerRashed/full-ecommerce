"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import registerImage from "../../../assets/auth/image-2.png";
import { signup } from "@/actions";
import { useFormState } from "react-dom";

const Register = () => {
  const [state, formAction] = useFormState<any, FormData>(signup, null)
  console.log(state)
  return (
    <div className="w-full max-h-screen lg:grid lg:grid-cols-5 justify-center items-center overflow-hidden">
      {/* IMAGE */}
      <div className="hidden lg:block col-span-3 w-full h-screen -mt-2">
        <Image
          src="http://localhost:8080/uploads/images/image-2.58742bfd.png"
          width={1000}
          height={1000}
          alt="register-image"
          className="w-full object-cover h-screen"
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
          <form action={formAction}>
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
                Choose Image 
              </label>
              <input
                name="image"
                placeholder="Choose Profile Picture"
                type="file"
               
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
      {state && <p className="mt-2 text-red-500">{state.error}</p>}
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
