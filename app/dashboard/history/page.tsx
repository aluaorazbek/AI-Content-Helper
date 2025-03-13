import React from 'react'
import Image from 'next/image'
import { desc, eq } from 'drizzle-orm'
import { currentUser } from '@clerk/nextjs/server'
import TemplatesData from '@/app/(data)/Templates'
import { db } from '@/utils/db'
import { AiOutputSchema } from '@/utils/schema'
import { ITemplate } from '@/app/dashboard/_components/TemplateListSection'
import CopyButton from '@/app/dashboard/history/_components/CopyButton'

export interface IHistory{
  id: Number,
  formData: string,
  aiResponse: string,
  templateSlug: string,
  createdBy: string,
  createdAt: string
}

async function History() {
  const user = await currentUser()

  {/* @ts-ignore */}
  const HistoryList: IHistory[] = await db.select().from(AiOutputSchema).where(eq(AiOutputSchema?.createdBy,user?.primaryEmailAddress?.emailAddress))
  .orderBy(desc(AiOutputSchema.id))

  const GetTemplateName = (slug: string) => {
    const template: ITemplate | any = TemplatesData?.find((item) => item.slug == slug)
    return template
  }
  
  return (
    <main className='p-5'>
      <div className='p-5 border rounded-lg bg-white'>
        <h2 className='font-bold text-3xl'>History</h2>
        <p className='text-gray-500'>See your previously generated AI content</p>
        {HistoryList.length > 0 ? (
          <>
            <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
              <h2 className='col-span-2'>Template</h2>
              <h2 className='col-span-2'>AI Response</h2>
              <h2>Date</h2>
              <h2>Words</h2>
            </div>
            {HistoryList.map((item: IHistory, index: number) => (
              <React.Fragment key={index}>
                <div className='grid grid-cols-7 my-5 py-3 px-3'>
                  <h2 className='col-span-2 flex gap-2 items-center'>
                    <Image
                      src={GetTemplateName(item?.templateSlug)?.icon}
                      width={25}
                      height={25}
                      alt='icon'
                    />
                    {GetTemplateName(item.templateSlug)?.name}
                  </h2>
                  <h2 className='col-span-2 line-clamp-3 mr-3'>{item?.aiResponse}</h2>
                  <h2>{item.createdAt}</h2>
                  <h2>{item?.aiResponse.length}</h2>
                  <h2>
                    <CopyButton aiResponse={item.aiResponse} />
                  </h2>
                </div>
                <hr />
              </React.Fragment>
            ))}
          </>
        ) : (
        <div className="text-center text-gray-500 mt-5">
          <h3 className='text- mb-5'>There is no history yet 🕒</h3>
        </div>
      )}
      </div>
    </main>
  )
}

export default History