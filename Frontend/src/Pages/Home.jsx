import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <div className='bg-cover bg-center pt-8 h-screen w-full flex justify-between flex-col bg-[url(https://images.unsplash.com/photo-1582216334395-3547c7f6b03d?q=80&w=655&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
<img
  className='w-14 ml-12'
  src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-b16c-61f7-a127-1b323a3c53dc/raw?se=2025-08-01T13%3A51%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=4b06d5c1-4264-5af0-8d29-65bbcdae98c6&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-01T10%3A46%3A36Z&ske=2025-08-02T10%3A46%3A36Z&sks=b&skv=2024-08-04&sig=PQOFFpKPzT%2BVSDlnyCaBShu3DDsuH/P0owYhLeUTHjY%3D"
  alt="RIDEORA Logo"
/>
           <div className='bg-white py-4 px-4 pb-2'> 
            <h2 className='text-2xl font-bold'>Get Started With RIDEORA</h2>
          <Link
            to='/signup'
            className='flex items-center w-full bg-black text-white justify-center py-3 mt-5 rounded'
          >
            Sign Up Now
          </Link>
           </div>
      </div>
    </div>
  )

  

};

export default Home;


