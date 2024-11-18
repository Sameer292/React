import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function Logoutbtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => { dispatch(logout()) }).catch((error) => { console.log(error) })
    }
    return (
        <button onClick={logoutHandler} className='duration-200 rounded-lg bg-red-500 hover:bg-red-600'>Logout</button>
    )
}

export default Logoutbtn