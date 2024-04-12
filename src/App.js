import React from 'react';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

function App() {
  return (
    <div className='bg-gradient-to-b from-blueColor to-white flex justify-center overlfow-hidden'>
      <div className="bg-white p-2 rounded-xl border-7 border-white mt-8 mb-8 w-96">
        <First />
        <Second />
        <Third />
      </div>
    </div>
  );
}

export default App;
