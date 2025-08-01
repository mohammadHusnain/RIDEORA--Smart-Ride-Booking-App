import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captainData, setCaptainData] = useState('')


    const submitHandler =  (e) => {
      e.preventDefault(); 
      setCaptainData({
        email: email,
        password: password
      });

      console.log(captainData)

      setEmail('');
      setPassword('');
     
    };

  return (
<div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-10' src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-b16c-61f7-a127-1b323a3c53dc/raw?se=2025-08-01T13%3A51%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=4b06d5c1-4264-5af0-8d29-65bbcdae98c6&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-01T10%3A46%3A36Z&ske=2025-08-02T10%3A46%3A36Z&sks=b&skv=2024-08-04&sig=PQOFFpKPzT%2BVSDlnyCaBShu3DDsuH/P0owYhLeUTHjY%3D" alt="" />

 <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          
                    <h3 className='text-lg font-medium mb-2'>Enter Mail</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>
        </form>
        <p className='text-center'>Join A Fleet? <a href='/signup' className='text-blue-600'>Register As A Captain</a></p>
      </div>
      <div>
        <Link
        to={'/login'}
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin