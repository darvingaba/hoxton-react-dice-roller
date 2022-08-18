import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function roll(){
    let diceRoll =Math.floor(Math.random()* 6)+1;
    console.log(diceRoll)
    if(diceRoll===1){
       setCount(1)
    }else if(diceRoll===2){
      setCount(2)
    }else if(diceRoll===3){
      setCount(3)
    }
    else if(diceRoll===4){
      setCount(4)
    }else if(diceRoll===5){
      setCount(5)
    }else if(diceRoll===6){
      setCount(6)
    }
  }


  
  return (
    <div className="App">
      <h1>Dice Roll</h1>
      <p className="dice">{count}</p>
      <button onClick={roll}>Roll</button>
    </div>
  )
}

export default App
