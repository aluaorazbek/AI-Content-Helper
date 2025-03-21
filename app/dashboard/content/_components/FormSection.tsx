"use client"

import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ITemplate } from '@/app/dashboard/_components/TemplateListSection'

type TFormSection = {
  selectedTemplate?: ITemplate
  userFormInput: any 
  loading: boolean
}

function FormSection({ selectedTemplate, userFormInput, loading }: TFormSection) {

  const [formData, setFormData] = useState<any>()

  const handleInputChange : React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const {name, value} = event.target
    setFormData({...formData,[name]:value})
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    userFormInput(formData)
  }

  return (
    <section className='p-5 shadow-md border rounded-lg bg-white'>
        
      {selectedTemplate?.icon && (
        <Image src={selectedTemplate.icon} alt="icon" width={70} height={70} />
      )}
      <h2 className='font-bold text-2xl mb-2 mt-4 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
            <label className='font-bold'>{item.label}</label>
            {item.field === 'input' ? 
              <Input 
                name={item.name} 
                required={item?.required}
                onChange={handleInputChange}
              />
              : item.field === 'textarea' ?
              <>
                <Textarea 
                  name={item.name} 
                  required={item?.required}
                  rows={5}
                  maxLength={2000}
                  onChange={handleInputChange} 
                /> 
                <label className='text-xs text-gray-400'>Note:Max 2000 Words</label>
              </> 
              : null
            }
          </div>
        ))}
        <Button 
          type="submit" 
          className='w-full py-6 cursor-pointer'
          disabled={loading}
        >
          {loading ? <AiOutlineLoading3Quarters className='animate-spin'/> : <span>Generate Content</span>}
        </Button>
      </form>
    </section>
  )
}

export default FormSection