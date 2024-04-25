import { useState } from 'react'
import './App.css'

function App() {
  const[counter,setCounter]=useState(0)
  return (
    <>
        <h1>
          hi my name is zakaria
          <p>{counter}</p>
          <button onClick={()=>setCounter(counter+1)}>Count:  {counter}</button>
        </h1>

        <Add time="2" ms="5" ></Add>

    </>
  )
}

function Add({time,ms}) {
  return (
    <>
    <h1>
      hi this is another {time} templete {ms} 
    </h1>
    </>
  )
}

export default App
