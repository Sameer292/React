import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function plus()
  {
setCount(count+1)
}
function minus()
{
    setCount(count-1)

  }

  return (
    <>
     <h1>Counter</h1>
     <h3>Value is {count}</h3>
     <button onClick={plus}>Increase</button><button onClick={minus}>Decrease</button>
    </>
  )
}

export default App
