"use client"

import React, { useState } from 'react'
import SearchSection from '@/app/dashboard/_components/SearchSection'
import PromptListSection from '@/app/dashboard/_components/PromptListSection'

export default function DashboardPage() {
  const [userSearchInput, setUserSearchInput] = useState<string>()
  
  return (
    <div>
       <SearchSection onSearchInput = {(value:string) => setUserSearchInput(value)}/>
       <PromptListSection userSearchInput={userSearchInput} />
    </div>
  )
}
