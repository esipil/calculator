import { useState } from 'react';
import './App.css';

function App() {

  const [clickedNumber, setClickedNumber] = useState([])  
  const [symbol, setSymbol] = useState()
  const [secondClicked, setSecondClicked] = useState([])
  const [answer, setAnswer] = useState()
  const [symbolTwo, setSymbolTwo] = useState()

  function twofiguresTotal (figure1, figure2, operator) {
    const left  = Number(figure1.join(''))
    const right = Number(figure2.join(''))
    let total; 

    switch(operator) {
      case '+' : 
      total = left + right; 
      setAnswer(total);
      break;
      case '-' : 
      total = left - right ; 
      setAnswer(total);
      break;
      case 'x' :
      total = left * right ;
      setAnswer(total);
      break;
      case '÷':
        total = left / right ;
        setAnswer(total)
        break;
    }
  }

  function handleClick (number ) { 
    if (clickedNumber.length < 1) {
      setClickedNumber([7])
    } else {
      const newArray = clickedNumber
      console.log(newArray)

      setClickedNumber(newArray.push(7))
  }
  console.log(clickedNumber)
  }
  return (
    <div className="App">
      <div className='h-screen w-full flex  justify-center place-items-center '>
        <div className='w-full h-screen sm:mx-36 md:mx-40 lg:w-96'>
          <div className='h-48 lg:mt-8'>{clickedNumber}{symbol}{secondClicked}{symbolTwo}</div>
          <div className=' h-24 flex'> { answer}</div>
          <div className=' h-24 flex  space-x-2 mx-2 mt-4'>
          <div className='w-1/4 h-full text-center flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            setClickedNumber([])
            setSecondClicked([])
            setSymbol()
            setSymbolTwo()
            setAnswer([])
          }} > c </div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl	rounded-full shadow-2xl'>()</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={ () => {
              // setSymbol('%')
            }}>%</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={ () => {
              if (!symbol) {
                setSymbol('÷')
              } else {
                setSymbolTwo("÷")
              }
              }}>÷</div>
          </div>
          <div className='  h-24 flex flex  space-x-2 mx-2 mt-4'>
          <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 7]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 7]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>7</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 8]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 8]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>8</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 9]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 9]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>9</div>
            <div className='w-1/4 h-full flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={ () => {
              if (!symbol) {
                setSymbol('x')
              } else {
                setSymbolTwo("x")
              }
            }} >×</div>
          </div>
          <div className='  h-24 flex  space-x-2 mx-2 mt-4'>
          <div className='w-1/4 h-full flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 4]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 4]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>4</div>
            <div className='w-1/4 h-full flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 5]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 5]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>5</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl'
             onClick={() => {
              if (symbol) {
                const array = [...secondClicked, 6]
                setSecondClicked(array)
              }else{
                const newArray = [...clickedNumber, 6]
                setClickedNumber(newArray)
                console.log(clickedNumber)
              }
      }}>6</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={ () => {
              if (!symbol) {
                setSymbol('-')
              } else {
                setSymbolTwo("-")
              }
            }}>-</div>
          </div>
          <div className=' h-24 flex  space-x-2 mx-2 mt-4'>
          <div className=' w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 1]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 1]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>1</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 2]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 2]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>2</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 3]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 3]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>3</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
              if (!symbol) {
                setSymbol('+')
              } else {
                setSymbolTwo("+")
              }
            }}>+</div>
          </div>
          <div className='h-24 flex space-x-2 mx-2 mt-4'>
          <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl  rounded-full shadow-2xl' onClick={() => {
            if (secondClicked > 0) { 
              let afterDelete = [...secondClicked]
              afterDelete.pop()
              setSecondClicked(afterDelete)
            } else if (symbol){
              setSymbol()
              console.log(symbol)
            }else {
              let afterDelete = [...clickedNumber]
              afterDelete.pop()
              setClickedNumber(afterDelete)
            }
          }} >⌫</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, 0]
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, 0]
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>0</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
            if (symbol) {
              const array = [...secondClicked, '.']
              setSecondClicked(array)
            }else{
              const newArray = [...clickedNumber, '.']
              setClickedNumber(newArray)
              console.log(clickedNumber)
            }
          }}>.</div>
            <div className='w-1/4 h-full  flex justify-center place-items-center text-2xl rounded-full shadow-2xl' onClick={() => {
              twofiguresTotal(clickedNumber, secondClicked, symbol)
            } }>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
