import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ForgotPass() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleClick = () => {
        const reqBody = {
            email : email
        }
        axios.post("http://localhost:5000/api/verifyUser", reqBody)
        .then(res => {
            if(res.data.status){
                navigate('/vefPass', {state: { data : res.data}})
            }
        }).catch(err => {
            console.log(err)
        })
    }
  return (
    <div className='flex justify-center items-center min-h-screen bg-custom-gradient1'>
        <div className='flex flex-col py-4 px-8 rounded-xl shadow-2xl bg-transparent w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
            <h1 className='text-3xl text-center mb-4'>Forgot Password</h1>
            <div className='flex flex-col w-full mt-2 space-y-3'>
                <label className='text-base'>Provide your email to verify you : </label>
                <div className='flex flex-row w-full justify-center items-center'>
                    <input
                        type='email'
                        placeholder='jhondoe1@gmail.com'
                        required
                        onChange={(e) => {setEmail(e.target.value)}}
                        className='p-2 rounded focus:outline-none focus:ring-violet-700 focus:ring-2 w-3/4'
                    />
                    <button onClick={handleClick} className='p-2 bg-green-600 hover:bg-green-900 hover:text-white rounded w-1/5 ml-1 text-center'>Send</button>
                </div>
            </div>
            <p className='mt-5 text-red-700'>*Note:Provide the email of your account. A verification code will send to the email</p>
        </div>
    </div>
  )
}

export default ForgotPass
