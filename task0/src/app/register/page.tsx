import React from 'react'
import background from '../../../public/background.jpg'
import Image from 'next/image'
/* import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk';

const asterisk = <FontAwesomeIcon icon={faAsterisk}/>

const SignUpPage = () => {
  return (
    <div className='w-screeen h-screen bg-gradient-to-r from-prime-blue to-prime-green flex justify-center items-center px-7 sm:px-24 md:px-12 lg:px-32 xl:px-48 2xl:px-72 3xl:px-96 montserrat'>
        <div className='md:grid md:grid-cols-2 bg-slate-50 3xl:w-3/4 rounded-2xl'>
            <div className='hidden md:block relative h-full w-full bg-prime-blue p-20'>
                <Image alt='Background' src={background} layout='fill' className='opacity-60 object-center object-cover rounded-l-2xl bg-prime-blue'/>
            </div>
            <div className='p-16 3xl:p-24'>
                <div className='space-y-10'>
                    <div className='space-y-5'>
                        <h1 className='text-3xl font-semibold'>Welcome to Matchmo</h1>
                        <h1 className='text-sm'></h1>
                        <h2 className=' text-slate-500 text-sm'>Create an account with Matchmo to get updates on your pre-qualification status. We will attempt to reach out to you within 2 business days.</h2>
                    </div>
                    <form className='text-slate-900 space-y-10'>
                        <div className='space-y-8'>
                            <div className='space-y-2'>
                                <label>Firstname</label>
                                <input type='text' placeholder='First name' className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'/>
                            </div>

                            <div className='space-y-2'>
                                <label>Lastname </label>
                                <input type='text' placeholder='Last name' className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'/>
                            </div>

                            <div className='space-y-2'>
                                <label>Password </label>
                                <input type='password' placeholder='Last name' className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'/>
                            </div>
                            
                            <div className='space-y-2'>
                                <label>Confirm Password </label>
                                <input type='password' placeholder='Password' className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'/>
                            </div>  
                        </div>
                        <div className='col-span-2'>
                            <button type='submit' className='block border px-6 py-2 w-full rounded-xl text-slate-50 bg-prime-green hover:bg-teal-600'>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage