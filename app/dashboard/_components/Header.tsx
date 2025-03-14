import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className='flex justify-between items-center p-5 shadow-sm border-b-2'>
      <Button className='cursor-pointer'>
        Advanced Tools +
      </Button>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 rounded-full text-white text-xs px-2 font-medium'>You are a pro member!</h2>
        <UserButton />
      </div>
    </header>
  )
}
