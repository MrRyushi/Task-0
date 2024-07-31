'use client';

import React, { useState } from 'react'
import background from '../../../public/background.jpg'
import Image from 'next/image'
/* import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk';


const asterisk = <FontAwesomeIcon icon={faAsterisk} />

const SignUpPage = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError('')
        setSuccess('')

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const user = {
            Firstname: firstname,
            Lastname: lastname,
            Email: email,
            Password: password
        };

        try {
            const res = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await res.json();

            if (res.status === 201) {
                setSuccess('User successfully registered!')
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('Failed to register user');
        }
    };


    return (
        <div className='w-screen h-screen bg-gradient-to-r from-prime-blue to-prime-green flex justify-center items-center px-7 sm:px-24 md:px-12 lg:px-32 xl:px-48 2xl:px-72 3xl:px-96 montserrat'>
            <div className='md:grid md:grid-cols-2 bg-slate-50 3xl:w-3/4 rounded-2xl'>
                <div className='hidden md:block relative h-full w-full bg-prime-blue p-20'>
                    <Image alt='Background' src={background} layout='fill' className='opacity-80 object-center object-cover rounded-l-2xl bg-prime-blue' />
                </div>
                <div className='p-12 3xl:p-24 space-y-3'>
                    <div className='space-y-5'>
                        <div className='space-y-8'>
                            <h1 className='text-3xl font-semibold'>Welcome to Matchmo</h1>
                            <h2 className='text-slate-500 text-sm'>Create an account with Matchmo to get updates on your pre-qualification status. We will attempt to reach out to you within 2 business days.</h2>
                            <div>
                                {error && <p className='text-red-500 text-center'>{error}</p>}
                                {success && <p className='text-green-500 text-center'>{success}</p>}
                            </div>
                        </div>
                        
                        <form className='text-slate-900 space-y-10' onSubmit={handleSubmit}>
                            <div className='space-y-8'>
                                <div className='space-y-2'>
                                    <label>Firstname</label>
                                    <input
                                        required
                                        type='text'
                                        name='firstname'
                                        placeholder='First name'
                                        className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label>Lastname</label>
                                    <input
                                        required
                                        type='text'
                                        name='lastname'
                                        placeholder='Last name'
                                        className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label>Email</label>
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label>Password</label>
                                    <input
                                        required
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label>Confirm Password</label>
                                    <input
                                        required
                                        type='password'
                                        name='confirmpassword'
                                        placeholder='Confirm Password'
                                        className='bg-transparent block border-b border-gray-400 ms-1 w-full ps-2'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <button type='submit' className='block border px-6 py-2 w-full rounded-xl text-slate-900 font-semibold bg-prime-yellow hover:bg-teal-600'>Sign up</button>
                            </div>
                        </form>
                    </div>
                    <a href='/login' className='text-center block hover:underline underline-offset-4 text-slate-500'>Already have an account?</a>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage