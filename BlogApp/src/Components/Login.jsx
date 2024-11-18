import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(null)


    async function login(data) {
        setError(" ")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentuser()
                if (userData) dispatch(authLogin(userData))
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center justify-center'>
                <Logo />
                <h2 className='text-2xl font-bold text-white'>Login to your account</h2>
            </div>
            <div className='flex flex-col items-center justify-center'>
                {error && <p className='text-red-500 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='flex flex-col items-center justify-center'>
                    <div className='space-y-5'>
                        <Input label="Email: " type="email" placeholder='Email' {...register('email', {
                            required: true,
                            validate: {
                                matchPttern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                            }
                        })} />
                        <Input label="Password: " placeholder='Password' type='password' {...register('password', { required: true })} />
                        <Button type='submit' className='w-full'>Login</Button>
                    </div>
                </form>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white'>Don't have an account? <Link to='/signup' className='text-blue-500'>Signup</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login