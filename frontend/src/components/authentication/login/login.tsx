import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center text-sm">
      <div className="login-form">
        {/* PAGE HEADER  */}
        <div className="py-5">
          <h1 className="text-foreground font-bold text-xl">Welcome 👋</h1>
          <p className="text-muted-foreground text-sm">Please Login Here</p>
        </div>
        {/* Login Form */}
        <form>
          {/* Email Input */}
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter your email.."
              type="email"
              required
              className="border border-border focus:outline-input rounded p-2"
            />
          </div>

          {/* Password Input */}
          <div className="grid w-full items-center gap-1.5 mt-3">
            <label htmlFor="email">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password.."
              required
              className="border border-border focus:outline-input rounded p-2"
            />
          </div>

          {/* Submit Button */}
          <Button className="w-full mt-4" type="submit">
            Login
          </Button>
        </form>

        {/* login cta */}
        <div className="mt-5  w-full flex justify-between gap-8">
          <Link className="text-blue-500 hover:underline" href="/register">Create an account?</Link>
          <Link className="text-blue-500 hover:underline" href="/forgot">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
