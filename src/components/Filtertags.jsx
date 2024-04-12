import React from 'react'
import Right from '../images/chevron-right.png'

const Filtertags = () => {
  return (
    <div className='mt-4'>
      <p className='text-gray-300'>Popular tags for handbags</p>
      <div className='flex justify-center items-center mt-4'>
      <div class="flex absolute fixed ml-16 overflow-hidden">
        <span class="text-md inline-block bg-tagColor text-textColor px-2 py-1 rounded-lg mr-1 mb-2 border border-textColor">Clutch</span>
        <span class="text-md inline-block bg-tagColor text-textColor px-2 py-1 rounded-lg mr-1 mb-2 border border-textColor">Fabric Lining</span>
        <span class="text-md inline-block bg-tagColor text-textColor px-2 py-1 rounded-lg mr-1 mb-2 border border-textColor">Baggit</span>
        <span class="text-md inline-block bg-tagColor text-textColor px-2 py-1 rounded-lg mr-1 mb-2 border border-textColor overflow-hidden">Mutli Compartment</span>
      </div>
      <div className='relative bg-white h-7 w-7 ml-72'>
        <img src={Right} alt="Right"/>
      </div>
      </div>
    </div>
  )
}

export default Filtertags