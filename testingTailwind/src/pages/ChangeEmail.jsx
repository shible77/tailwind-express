import React, { useState } from 'react'

function ChangeEmail() {
    const [email, setEmail] = useState('')
  return (
    <div className='flex justify-center items-center min-h-screen bg-custom-gradient1'>
        <div className='flex flex-col px-8 py-4 rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
            <h1 className='text-2xl text-center'>Change Your Email</h1>
            <div className='flex flex-col space-y-2 w-full mt-5'>
                <label className='text-lg'>Enter the correct email:</label>
                <div className='flex flex-row justify-center items-center w-full'>
                    <input
                        type='email'
                        placeholder='jhonedoe1@gmail.com'
                        className='p-2 rounded border border-gray-400 focus:outline-none focus:ring-violet-700 focus:ring-2 w-3/4'
                        required
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <button className='p-2 bg-blue-600 hover:bg-blue-800 rounded w-1/5 ml-1 text-base' onClick={() => {}}>Enter</button>
                </div>
                <p>*Note: make sure that your entered email is correct and valid</p>
            </div>
        </div>     
    </div>
  )
}

export default ChangeEmail
