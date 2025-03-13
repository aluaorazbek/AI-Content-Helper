"use client"
import React from 'react'
import { Button } from '@/components/ui/button'

function CopyButton({aiResponse}: any) {
  return (
    <div>
      <Button 
        variant='ghost' 
        className='text-primary cursor-pointer text-base'
        onClick={() => navigator.clipboard.writeText(aiResponse)}
      >
        Copy Response
      </Button>
    </div>
  )
}

export default CopyButton