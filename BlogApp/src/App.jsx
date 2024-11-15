import { useState } from 'react'
import './App.css'
import conf from '../src/conf/conf'

function App() {
  const [count, setCount] = useState(0)
  console.log(conf);

  return (
    <>
      <h1>A blog app with appwrite</h1>
    </>
  )
}

export default App
