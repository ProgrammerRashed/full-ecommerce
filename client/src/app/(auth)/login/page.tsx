import { getSession } from "@/actions"
import Login from "@/components/authentication/login/login"
import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: 'ZossGadget | Login',
    description: 'Login to ZossGadget',
  }

const LoginPage = async () => {
  const session = await getSession()

  if (session.email) {
   redirect("/profile") 
  }

  return (
    <div>
      <Login/>
    </div>
  )
}

export default LoginPage
