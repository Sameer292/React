import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Logo, Input } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'



function Signup() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()
    const signup = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userInfo = await authService.getCurrentuser()
                if (userInfo) dispatch(login(userData));
                navigate("/");
            }

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='w-80 border border-black/10 roundex-xl mx-auto flex flex-col justify-center items-center'>
                <span className='flex flex-col justify-center items-center'>
                    <Logo />
                </span>
            </div>
            <div className='w-80 border border-black/10 roundex-xl mx-auto flex flex-col justify-center items-center'>
                <h2 className='text-2xl font-bold text-white'>Signup to your account</h2>
                <form onSubmit={handleSubmit(signup)} className='flex flex-col justify-center items-center'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <Input label="Name: " className='w-full' {...register("name", { required: true })} placeholder="Name" />
                        <Input label="Email: " className='w-full' {...register("email",
                            {
                                required: true,
                                validate: {
                                    matchPttern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                }
                            }
                        )} placeholder="Email" />
                        <Input label="Password: " className='w-full' {...register("password", { required: true })} placeholder="Password" />
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <p className='text-red-500 mt-8 text-center'>{error}</p>
                        <Button type='submit' className='w-full'>Signup</Button>
                        <p className='text-white text-center'>Already have an account ? <Link to="/login" className='text-blue-500'>Login</Link></p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signup