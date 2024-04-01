import Login from "@/components/authentication/login/login"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'ZossGadget | Login',
    description: 'Login to ZossGadget',
  }

const LoginPage = () => {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default LoginPage
