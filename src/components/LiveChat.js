import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='w-full h-[600px] ml-2 p-2  border-black bg-slate-100 rounded-lg' >
      <ChatMessage name="jkp" message='hello'/>
    </div>
  )
}

export default LiveChat
