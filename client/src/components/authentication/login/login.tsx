import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import loginImage from "../../../assets/auth/image-1.png";
import { login } from "@/actions";

const Login = () => {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-5">
      {/* IMAGE */}
      <div className="hidden lg:block col-span-3 w-full h-screen">
        <Image
          src={loginImage}
          width={1000}
          height={1000}
          alt="login-image"
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      {/* CONTENT */}
      <div className="col-span-2 w-full h-full flex justify-center items-center">
        <div className="login-form ">
          {/* PAGE HEADER  */}
          <div className="py-5">
            <h1 className="text-foreground font-bold text-xl">Welcome 👋</h1>
            <p className="text-muted-foreground text-sm">Please Login Here</p>
          </div>
          {/* LOGIN FORM */}
          <form action={login}>
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

            {/* PASSWORD INPUT */}
            <div className="grid w-full items-center gap-1.5 mt-3">
              <label htmlFor="email">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password.."
                required
                className="border border-border focus:outline-input rounded p-2"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <Button className="w-full mt-4" type="submit">
              Login
            </Button>
          </form>

          {/* LOGIN CTA */}
          <div className="mt-5 w-full flex justify-between gap-5 lg:gap-8">
            <Link
              className="text-blue-500 hover:underline"
              href="/registration"
            >
              Create an account?
            </Link>
            <Link
              className="text-blue-500 hover:underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
