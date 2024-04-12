import React from 'react';
import Timpu from '../images/Timpu.png'

const First = () => {
  return (
    <div className='bg-blueColor flex justify-between p-2 rounded-t-lg'>
      <div>
        <div className='flex justify-center relative'>
          <div>
            <img src={Timpu} alt="Timpu image" className='h-14 w-14 rounded-full relative -z-1' />
            <div className="h-2 w-2 bg-green-500 rounded-full absolute bottom-0 right-0 mb-1 mr-1">
              {/* Green dot */}
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <span className="ml-2">Online</span>
      </div>
    </div>
  )
}

export default First