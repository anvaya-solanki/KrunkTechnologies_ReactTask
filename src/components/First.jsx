import React from 'react';
import Timpu from '../images/Timpu.png'
import Vector from '../images/Vector.png'

const First = () => {
  return (
    <div className='bg-blueColor flex justify-between p-2 rounded-t-lg'>
      <div className='flex justify-between'>
        <div className='flex justify-center relative'>
            <img src={Timpu} alt="Timpu image" className='h-14 w-14 rounded-full relative -z-1' />
            <div className="h-2 w-2 bg-green-500 rounded-full absolute bottom-0 right-0 mb-1 mr-1">
              {/* Green dot */}
            </div>
        </div>
        <div className='pl-3'>
            <div className='flex justify-between'>
              <h1 className='text-textColor font-bold text-lg'>Timpu</h1>
              <span className='text-textColor'>
                <img src={Vector} alt="Vector image" className='mt-2 mr-3'/>
              </span>
            </div>
            <div>
              <p className='text-textColor font-semibold text-sm'>Chat Assistant</p>
            </div>
        </div>
      </div>
      <div className='flex items-center pr-3'>
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <span className="ml-2">Online</span>
      </div>
    </div>
  )
}

export default First