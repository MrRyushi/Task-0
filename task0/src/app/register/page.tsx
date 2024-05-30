import React from 'react'
import background from '../../../public/background.jpg'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className='w-screeen h-screen bg-prime-blue flex justify-center items-center px-96'>
        <div className='bg-slate-50 p-10 rounded-xl flex justify-between w-3/5'>
            <div className='w-1/2'>
                <Image alt='Background' src={background} className='opacity-90 h-full object-center object-cover background-center background-cover rounded-2xl'/>
            </div>

            <div className='space-y-10'>
                <h1 className='montserrat text-slate-900 text-3xl'>Register</h1>
                <form className='text-slate-900 montserrat grid grid-cols-2 gap-x-12 gap-y-8'>
                    <div className='space-y-2'>
                        <label>Firstname</label>
                        <input type='text' placeholder='First name' className='bg-transparent block border-b border-gray-400 ms-1'/>
                    </div>

                    <div className='space-y-2'>
                        <label>Lastname</label>
                        <input type='text' placeholder='Last name' className='bg-transparent block border-b border-gray-400 ms-1'/>
                    </div>

                    <div className='space-y-2'>
                        <label>Password</label>
                        <input type='password' placeholder='Last name' className='bg-transparent block border-b border-gray-400 ms-1'/>
                    </div>
                    
                    <div className='space-y-2'>
                        <label>Confirm Password</label>
                        <input type='password' placeholder='Password' className='bg-transparent block border-b border-gray-400 ms-1'/>
                    </div>
                    <div className='col-span-2'>
                        <button type='submit' className='block border px-4 py-2 rounded-xl text-slate-50 bg-prime-green'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage