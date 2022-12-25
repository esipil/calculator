import { useState } from 'react';
import './App.css';

function App() {

  const [clickedNumber, setClickedNumber] = useState([])
  return (
    <div className="App">
      <div className='h-screen w-full flex  justify-center place-items-center '>
        <div className='w-full h-screen sm:mx-36 md:mx-40 lg:w-96'>
          <div className='h-48 lg:mt-8'>{clickedNumber}</div>
          <div className=' h-24 flex'>
          </div>
          <div className=' h-24 flex  space-x-2 mx-2 mt-4'>
          <div className='w-1/4 h-full text-center flex justify-center place-items-center text-2xl rounded-full shadow-2xl' > c </div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl	rounded-full shadow-2xl'>()</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>%</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>÷</div>
          </div>
          <div className='  h-24 flex flex  space-x-2 mx-2 mt-4'>
          <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => { setClickedNumber(...clickedNumber , 7 )}}>7</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>8</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>9</div>
            <div className='w-1/4 h-full flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>×</div>
          </div>
          <div className='  h-24 flex  space-x-2 mx-2 mt-4'>
          <div className='w-1/4 h-full flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>4</div>
            <div className='w-1/4 h-full flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>5</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>6</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>-</div>
          </div>
          <div className=' h-24 flex  space-x-2 mx-2 mt-4'>
          <div className=' w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>1</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>2</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>3</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>+</div>
          </div>
          <div className='h-24 flex space-x-2 mx-2 mt-4'>
          <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl  rounded-full shadow-2xl'>+/-</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>0</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>.</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
