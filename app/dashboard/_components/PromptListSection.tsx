import React, { useEffect, useState } from 'react'
import Prompts from '@/app/(data)/Prompts'
import PromptCard from '@/app/dashboard/_components/PromptCard'

export interface IForm{
  label: string,
  field: string,
  name: string,
  required?: boolean
}

export interface IPrompt{
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: IForm[]
}

export default function PromptListSection({userSearchInput}:any) {

  const [promptList, setPromptList] = useState(Prompts)

  useEffect(() => {
    if(userSearchInput)
      {
        const filterData = Prompts.filter(item=>
          item.name.toLowerCase().includes(userSearchInput.toLowerCase())
        );
        setPromptList(filterData);
      }
      else{
        setPromptList(Prompts)
      }
  }, [userSearchInput])


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {promptList.map((item: IPrompt, index: number)=>(
        <PromptCard {...item} key={item.slug || index} />
      ))}
    </div>
  )
}