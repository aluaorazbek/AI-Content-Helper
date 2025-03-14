"use client"
import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link'
import moment from 'moment'
import TemplatesData from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ITemplate } from '@/app/dashboard/_components/TemplateListSection'
import FormSection from '@/app/dashboard/content/_components/FormSection'
import OutputSection from '@/app/dashboard/content/_components/OutputSection'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db';
import { AiOutputSchema } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';

type TCreateNewContent = {
  params:{
    'template-slug': string
  }
}

function CreateNewContent(props: TCreateNewContent) {
   
  const selectedTemplate: ITemplate | undefined = TemplatesData?.find((item) => item.slug == props.params['template-slug'])

  const [loading, setLoading] = useState<boolean>(false)
  const [aiOutput, setAiOutput] = useState<string>('');

  const {user} =  useUser();

  const GenerateAIContent = async(formData: any) => {
    setLoading(true)

    const SelectedPrompt = selectedTemplate?.aiPrompt
    const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt 

    const result = await chatSession.sendMessage(FinalAIPrompt);

    // console.log(result.response.text())
    setAiOutput(result.response.text())

    await SaveInDb(formData, selectedTemplate?.slug, result.response.text() )
    setLoading(false)
  }

  const SaveInDb = async(formData: any, slug: any, aiResponse: string) => {
    const result =  await db.insert(AiOutputSchema).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResponse,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD/MM/yyyy'),
    });

    console.log(result);
}

  return (
    <main className='p-5'>
        <Link href = {"/dashboard"}>
          <Button className='cursor-pointer'> <FaArrowLeft/> Back</Button>
        </Link>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
          <FormSection 
            selectedTemplate = {selectedTemplate}
            loading = {loading} 
            userFormInput={(v:any) => GenerateAIContent(v)}
          />
          <div className='col-span-2'>
            <OutputSection aiOutput={aiOutput}/> 
          </div>
        </div>
    </main>
  )
}

export default CreateNewContent

