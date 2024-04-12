import React from 'react'
import './Sent.css';

const Sent = () => {
  return (
    <div className='text-right'>
        <div className='p-4 rounded-xl overflow-hidden bg-messageboxtwo ml-auto w-40'>
            <p className='text-gray-800 text-sm text-left'>I am looking for a hand bag, with long strap .</p>
        </div>
        <div>
            <p className='text-xs text-gray-800 pr-2'>4:46 pm</p>
        </div>
    </div>
  )
}

export default Sent