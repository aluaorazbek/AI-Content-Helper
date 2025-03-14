import React from 'react'
import { GrSearch } from "react-icons/gr"

export default function SearchSection({onSearchInput}: any) {
  return (
    <section className='p-10 bg-gradient-to-br from-blue-500 via-blue-700 
    to-blue-400 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold mb-2 '>Start your journey now</h2>
      <p>What would you like to create today?</p>
      <div className='w-full  flex justify-center'>
        <div className='flex gap-2 items-center
          p-2 border rounded-md bg-white my-5 w-[50%]'>
            <GrSearch className='text-primary' />
            <input type="text" placeholder='Search'
            onChange={(event)=>onSearchInput(event.target.value)}
            className='bg-transparent w-full outline-none text-black'
            />
        </div>
      </div>
    </section>
  )
}
