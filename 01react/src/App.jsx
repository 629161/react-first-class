import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


let [counter, setCounter]=useState(0)
// if(leti=0,i<=15,i++){

// }

  // let counter = 15
  const addValue =() =>{
    console.log("clicked",counter);
    // counter=counter+1
    setCounter(counter+1)
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
      
     <h1>Hello world</h1>
     <h2>count value:{counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br/>
     <button oneClick={removeValue}>remove value{counter}</button>
     <p>foter:{counter}</p>
    </>
  )
}

export default App
