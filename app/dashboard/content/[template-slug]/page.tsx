"use client"
import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import TemplatesData from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ITemplate } from '@/app/dashboard/_components/TemplateListSection'
import FormSection from '@/app/dashboard/content/_components/FormSection'
import OutputSection from '@/app/dashboard/content/_components/OutputSection'

type TCreateNewContent = {
  params:{
    'template-slug': string
  }
}

function CreateNewContent(props: TCreateNewContent) {
   
  const selectedTemplate: ITemplate | undefined = TemplatesData?.find((item) => item.slug == props.params['template-slug'])
  const [loading, setLoading] = useState(false)

  return (
    <div className='p-5'>
        <Link href = {"/dashboard"}>
          <Button className='cursor-pointer'> <ArrowLeft/> Back</Button>
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
          <FormSection 
            selectedTemplate = {selectedTemplate}
            loading = {loading} 
            userFormInput = {undefined} 
          />
          <div className='col-span-2'>
            <OutputSection /> 
          </div>
        </div>
    </div>
  )
}

export default CreateNewContent