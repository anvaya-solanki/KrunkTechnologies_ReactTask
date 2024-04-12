import React from 'react';
import Sent from './Sent';
import Received from './Received';
import Filtertags from './Filtertags';
import Shop from './Shop';

const Second = () => {
  return (
    <div className='mt-8 ml-5 mr-5'>
      <Received />
      <Sent />
      <Filtertags />
      <Shop />
    </div>
  )
}

export default Second