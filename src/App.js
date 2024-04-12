import React from 'react';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';

function App() {
  return (
    <div className='bg-blueColor h-screen w-screen flex justify-center overlfow-hidden'>
      <div className="bg-white p-2 rounded-lg border-7 border-white mt-14 w-96">
        <First />
        <Second />
        <Third />
      </div>
    </div>
  );
}

export default App;
