import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from '../src/appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './Components/index'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentuser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className=' text-3xl font-bold text-white  '>
      <div className='w-full block'>
        {/* <Header /> */}
        <main>
          Todo
          {/* <Outlet /> */}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : (null)
}

export default App
