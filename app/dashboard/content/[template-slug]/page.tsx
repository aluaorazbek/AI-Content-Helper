"use client"
import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import FormSection from '@/app/dashboard/content/_components/FormSection'
import { ITemplate } from '@/app/dashboard/_components/TemplateListSection'
import TemplatesData from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'

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
          <Button> <ArrowLeft/> Back</Button>
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
          <FormSection 
            selectedTemplate = {selectedTemplate}
            loading = {loading} 
            userFormInput = {undefined} 
          />
        </div>
    </div>
  )
}

export default CreateNewContent