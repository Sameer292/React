import { useState } from 'react'
// import './App.css'
import UserContextprovider from './context/UserContextprovider'
import Login from './Conponents/Login'
import Profile from './Conponents/Profile'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextprovider>
       <h1 className='text-center text-2xl font-bold'>  Hello my name is sameer paudel</h1> 
       <Login/>
       <Profile/>
    </UserContextprovider>
  )
}

export default App

