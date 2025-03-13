import React, { useEffect, useState } from 'react'
import TemplateData from '@/app/(data)/Templates'
import TemplateCard from '@/app/dashboard/_components/TemplateCard'

export interface IForm{
  label: string,
  field: string,
  name: string,
  required?: boolean
}

export interface ITemplate{
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: IForm[]
}

export default function TemplateListSection({userSearchInput}:any) {

  const [templateList, setTemplateList] = useState(TemplateData)

  useEffect(() => {
    if(userSearchInput)
      {
        const filterData = TemplateData.filter(item=>
          item.name.toLowerCase().includes(userSearchInput.toLowerCase())
        );
        setTemplateList(filterData);
      }
      else{
        setTemplateList(TemplateData)
      }
  }, [userSearchInput])


  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {templateList.map((item: ITemplate, index: number)=>(
        <TemplateCard {...item} key={item.slug || index} />
      ))}
    </div>
  )
}