import React from 'react';
import Logo from '../images/Logo.png'
import SendMessage from './SendMessage';
import Sendicon from '../images/Sendicon.png'
const Third = () => {
  return (
    <div className='bg-blueColor rounded-b-lg p-2'>
      <div className='flex justify-between items-center'>
        <SendMessage />
        <div className='bg-textColor rounded-lg w-16 h-7 ml-3'>
          <img src={Sendicon} alt="Sendicon" className='absolute object-cover ml-5 mt-1'/>
        </div>
      </div>
      <div className='flex justify-center items-center mt-1'>
        <p className='text-grayone mr-2'>Powered by</p>
        <p className='text-graytwo font-bold mr-2'>Krunk.ai</p>
        <img src={Logo} alt="Krunk.ai Logo" className='h-6 w-6'/>
      </div>
    </div>
  )
}

export default Third