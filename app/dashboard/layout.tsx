import React from 'react'
import SideNav from '@/app/dashboard/_components/SideNav'
import Header from '@/app/dashboard/_components/Header'

export default function DashboardLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav/>
      </div>
      <div className='md:ml-64'>
        <Header />
        <div className='bg-slate-100 min-h-screen'>
          {children}
        </div>
      </div>
    </div>
  )  
}
