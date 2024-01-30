import { Button } from '@/components/ui/button'
import React from 'react'

const PersonalInfoPage = () => {
  return (
    <div>
      <div className='info grid grid-cols-3 gap-5'>
        <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Full Name</h1>
          <p>Md Rashed Ali</p>
        </div>
         <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Email Address</h1>
          <p>shopping.rashed@gmail.com</p>
        </div>
         <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Phone Number</h1>
          <p>+8801738313337</p>
        </div>

         <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Birthday</h1>
          <p>25/01/2001</p>
        </div>
         <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Gender</h1>
          <p>Male</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className='flex justify-start items-center gap-5 mt-4 p-5'>
        <Button >Edit Profile</Button>
        <Button variant="outline">Change Password</Button>
      </div>
    </div>
  )
}

export default PersonalInfoPage
