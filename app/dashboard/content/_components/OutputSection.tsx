import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor';
import { GrCopy } from "react-icons/gr";
import { Button } from '@/components/ui/button';


type TOutputSection = {
  aiOutput: string
}
   
export default function OutputSection({aiOutput}: TOutputSection ) {
  const editorRef = useRef<Editor | null>(null)

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance()
    editorInstance.setMarkdown(aiOutput) 
  }, [aiOutput])
  
  return (
    <section className='bg-white shadow-lg border rounded-lg '>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2 cursor-pointer'><GrCopy/> Copy </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will be displayed here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </section>
  )
}
