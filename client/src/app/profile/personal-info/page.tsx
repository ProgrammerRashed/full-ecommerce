"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

const PersonalInfoPage = () => {
  // State to manage whether fields are disabled or editable
  const [isEditing, setIsEditing] = useState(false);

  // Function to toggle editing mode
  const handleEditClick = (event:any) => {
    event.preventDefault(); // Prevents page reload
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <form 
        className='info grid lg:grid-cols-3 gap-2 lg:gap-5' 
        onSubmit={handleEditClick} // Handle form submission
      >
        <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Full Name</h1>
          <Input name='name' type='text' disabled={!isEditing} value='Md Rashed Ali' />
        </div>
        <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Email Address</h1>
          <Input name='email' type='email' disabled={!isEditing} value='shopping.rashed@gmail.com' />
        </div>
        <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Phone Number</h1>
          <Input name='phone' type='number' disabled={!isEditing} value='01738313337' />
        </div>
        <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Birthday</h1>
          <Input name='date-of-birth' type='date' disabled={!isEditing} value='2001-01-25' />
        </div>
        <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Gender</h1>
          <Input name='gender' type='text' disabled={!isEditing} value='Male' />
        </div>
        <div className='p-5'>
          <h1 className='text-sm text-muted-foreground mb-2'>Address Line 1</h1>
          <Input name='address' type='text' disabled={!isEditing} value='Haldibari hat, Baliadangi, Thakurgaon' />
        </div>

        {/* ACTIONS */}
        <div className='flex justify-start items-center gap-5 mt-4 p-5'>
          <Button type='submit'>
            {isEditing ? 'Save Profile' : 'Edit Profile'}
          </Button>
          <Button variant='outline' disabled={isEditing}>Change Password</Button>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfoPage