import React from 'react'

const MessageCard = ({message}) => {
  return (
    <div className='bg-white shadow-black h-11 mt-5 mb-5 w-96 rounded-md'>
        <h1 className='text-teal-950 text-center'>
            {message}
        </h1>
    </div>
  )
}

export default MessageCard