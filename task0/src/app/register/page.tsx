import React from 'react'
import background from '../../../public/background.jpg'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className='w-screeen h-screen bg-prime-blue flex justify-center items-center px-96 montserrat'>
        <div className='bg-slate-50 p-10 rounded-xl grid grid-cols-2 w-3/5 gap-x-10 h-3/5'>
            <div className=''>
                <Image alt='Background' src={background} className='opacity-90 h-full object-center object-cover rounded-2xl border-black'/>
            </div>

            <div className='flex'>
                <div className='space-y-5'>
                    <div className='space-y-3'>
                        <h1 className='text-3xl font-semibold'>Welcome to Matchmo</h1>
                        <h2 className=' text-slate-500 text-sm'>Create an account with Matchmo to get updates on your pre-qualification status. We will attempt to reach out to you within 2 business days.</h2>
                    </div>
                    <form className='text-slate-900 space-y-5'>
                        <div className='space-y-2'>
                            <label>Firstname</label>
                            <input type='text' placeholder='First name' className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'/>
                        </div>

                        <div className='space-y-2'>
                            <label>Lastname</label>
                            <input type='text' placeholder='Last name' className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'/>
                        </div>

                        <div className='space-y-2'>
                            <label>Password</label>
                            <input type='password' placeholder='Last name' className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'/>
                        </div>
                        
                        <div className='space-y-2'>
                            <label>Confirm Password</label>
                            <input type='password' placeholder='Password' className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'/>
                        </div>
                        <div className='col-span-2'>
                            <button type='submit' className='block border px-4 py-2 rounded-xl text-slate-50 bg-prime-green hover:bg-teal-600'>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage