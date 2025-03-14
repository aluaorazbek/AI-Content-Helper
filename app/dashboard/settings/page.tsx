import React from 'react'
import { UserProfile } from '@clerk/nextjs'

export default function SettingsPage() {
  return (
    <main className='flex items-center justify-center p-5 pt-10'>
      <UserProfile />
    </main>
  )
}
