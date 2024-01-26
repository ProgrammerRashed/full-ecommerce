import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center text-sm">
      <div className="login-form">
        {/* PAGE HEADER  */}
        <div className="py-5">
          <h1 className="text-foreground font-bold text-xl">
            Create an Account 👋
          </h1>
          <p className="text-muted-foreground text-sm">Please Enter Details!</p>
        </div>
        {/* LOGIN FORM */}
        <form>
          {/* NAME INPUT */}
          <div className="grid w-full items-center gap-1.5">
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

          {/* SUBMIT BUTTON */}
          <Button className="w-full mt-4" type="submit">
            Sign Up
          </Button>
        </form>

        {/* LOGIN CTA */}
        <div className="my-5  w-full flex justify-between gap-8">
          <Link href="/login">
            Already have an account?{" "}
            <span className="text-blue-500 hover:underline">Login Here!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
