import React from 'react'
import { BiUserCircle } from 'react-icons/bi'

const LiveChatMessage = ({name, text}) => {
  return (
    <div className='flex ml-4 my-2'>
      <div className='w-6 h-6'>
        <BiUserCircle className='w-6 h-6'/>
      </div>
      <div className='flex ml-3 px-1 items-center'>
        <p className='font-bold text-sm'>{name}</p>
        <p className='text-sm ml-2'>{text}</p>
      </div>
    </div>
  )
}

export default LiveChatMessage
