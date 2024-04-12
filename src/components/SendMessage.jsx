import React from 'react'
import Pin from '../images/Pin.png'

const SendMessage = () => {
  return (
    <div className='flex justify-between bg-white rounded-lg p-1 w-96 border border-borderColor'>
        <input type="text" placeholder="Type your message" className='flex-grow px-2 border-none focus:outline-none'/>
        <img src={Pin} alt="Pin media" className='h-5 w-5 ml-2'/>
    </div>
  )
}

export default SendMessage