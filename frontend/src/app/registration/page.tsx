import Register from '@/components/authentication/registration/register'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'ZossGadget | User Registration',
    description: 'Create an Account on ZossGadget',
  }

const RegistrationPage = () => {
  return (
    <div>
      <Register/>
    </div>
  )
}

export default RegistrationPage
