import React from 'react'
import { GrSearch } from "react-icons/gr";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm border-b-2'>
      <div className='flex gap-2 items-center p-2 border rounded-md md:w-[500px]'>
        <GrSearch />
        <input 
          type='text' 
          placeholder='Search...' 
          className='outline-none w-fit'
        />
      </div>
      <div>
        <h2 className='bg-primary p-1 rounded-full text-white text-xs px-2 font-medium'>Join Membership just for 5$/Month!</h2>
      </div>
    </div>
  )
}
