'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GrHomeRounded } from "react-icons/gr"
import { GrHistory } from "react-icons/gr"
import { GrUserSettings } from "react-icons/gr"

export default function SideNav() {
  const pathname = usePathname()
  
  const MenuList = [
    {
      name: 'Home',
      icon: GrHomeRounded,
      path: '/dashboard'
    },
    {
      name: 'History',
      icon: GrHistory,
      path: '/dashboard/history'
    },
    {
      name: 'Settings',
      icon: GrUserSettings,
      path: '/dashboard/settings'
    },
  ]

  return (
    <nav className='h-screen p-5 shadow-sm border'>
      <Link className='flex justify-center mb-9' href={'/'}>
        <Image src={'/logo.svg'} alt='logo' width={130} height={130}/>
      </Link>
      <hr className='shadow-sm'/>
      <div className='py-5'>
        {MenuList.map((menu, index)=>(
          <Link 
            className={`flex items-center gap-3 mb-2 p-3 rounded-lg cursor-pointer 
              ${pathname === menu.path ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
            key={index} 
            href={menu.path}          
          >
            <menu.icon className='h-5 w-5'/>
            <h2 className='text-lg'>{menu.name}</h2>
          </Link>
        ))}
      </div>
    </nav>
  )
}
