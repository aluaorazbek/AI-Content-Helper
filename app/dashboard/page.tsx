"use client"

import React, { useState } from 'react'
import SearchSection from '@/app/dashboard/_components/SearchSection'
import TemplateListSection from '@/app/dashboard/_components/TemplateListSection'

export default function DashboardPage() {
  const [userSearchInput, setUserSearchInput] = useState<string>()
  
  return (
    <div>
       <SearchSection onSearchInput = {(value:string) => setUserSearchInput(value)}/>
       <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}
