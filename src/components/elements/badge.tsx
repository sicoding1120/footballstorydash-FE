import { Badge } from '@nextui-org/badge'
import React from 'react'

interface BagdeProps {
  type: 'none' | 'add'
  content: number
    icon: any
    color: "success" | "danger" | "warning" | "primary" | "secondary" | "default" 
}
const BadgeElement = ({ type, content, icon ,color}: BagdeProps) => {
  if (type === 'add' && content > 0) {
    return (
        <Badge color={color} content={content} className='text-white'>
        <div className='w-10 h-10 rounded-lg bg-muted flex justify-center items-center'>
          {icon}
        </div>
      </Badge>
    )
  }

  return (
    <div className='w-10 h-10 rounded-lg bg-muted flex justify-center items-center'>
      {icon}
    </div>
  )
}

export default BadgeElement
