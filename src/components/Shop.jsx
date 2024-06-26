import React from 'react';
import Bag from '../images/Bag.png'
import Vector from '../images/Vector.png'
import Right from '../images/chevron-right.png'
import Filter from '../images/Filter.png'
import cross from '../images/cross.png'
import bluecross from '../images/bluecross.png'
const Shop = () => {
  return (
    <>
    <div className='pt-3 w-3/4'>
      <div className='p-2 rounded-xl overflow-hidden bg-gradient-to-r from-messageboxone to-white'>
        <div className='rounded-xl bg-white flex justify-between items-center'>
          <img src={Bag} className='h-15 w-20 ml-1 mt-1 mb-1'/>
          <div>
            <div className='flex justify-between items-center'>
              <h1>Bags on <b>Timpu</b></h1>
              <img src={Vector} className='h-4 w-4 ml-2' />
            </div>
            <div className='flex justify-between items-center cursor-pointer'>
              <p className='text-gray-500'>1123 Products</p>
              <img src={Right} />
            </div>
          </div>
        </div>
        <p className='pt-1 text-sm'>Or set filter and help us choose the best bag for you.</p>
      </div>
      <div>
        <p className='text-xs text-gray-800 pl-2'>4:48 pm</p>
      </div>
    </div>
    <div className='mt-2'>
      <div className='flex justify-between'>
        <p className='text-gray-400'>Select Filters</p>
        <div className='flex justify-between items-center'>
          <img src={Filter} alt="Filter icon" className='h-4 w-4' />
          <p className='text-xs text-gray-600'>Filter</p>
        </div>
      </div>
      <div class="overflow-y-auto max-h-40 flex flex-wrap mt-1">
        <div className="px-3 py-1 rounded mr-2 mb-2 bg-gray-100 inline-flex items-center border-2 border-textColor"><p class="text-textColor font-semibold mr-1">Strap - Long</p> <img src={bluecross} className='h-3 w-3' /></div>
        <div className="px-3 py-1 rounded mr-2 mb-2 bg-gray-100 inline-flex items-center"><p class="text-gray-700 mr-1">Colour</p> <img src={cross} className='h-3 w-3' /></div>
        <div className="px-3 py-1 rounded mr-2 mb-2 bg-gray-100 inline-flex items-center"><p class="text-gray-700 mr-1">Size</p> <img src={cross} className='h-3 w-3' /></div>
        <div className="px-3 py-1 rounded mr-2 mb-2 bg-gray-100 inline-flex items-center"><p class="text-gray-700 mr-1">Brand</p> <img src={cross} className='h-3 w-3' /></div>
        <div className="px-3 py-1 rounded mr-2 mb-2 bg-gray-100 inline-flex items-center"><p class="text-gray-700 mr-1">Material</p> <img src={cross} className='h-3 w-3' /></div>
      </div>
    </div>
    </>
  )
}

export default Shop