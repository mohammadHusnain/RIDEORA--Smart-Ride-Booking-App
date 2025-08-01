import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <div className='bg-cover bg-center pt-8 h-screen w-full flex justify-between flex-col bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
<img
  className='w-20 ml-12 '
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7JU0LGsmFGSDWCKLoxTryMn6GjpDIhPklWbERkLklVSX4mIhahu1T-_3EMu4NTjp7nk&usqp=CAU"
  alt="RIDEORA Logo"
/>
           <div className='bg-white py-4 px-4 pb-2'> 
            <h2 className='text-2xl font-bold'>Get Started With RIDEORA</h2>
          <Link
            to='/signup'
            className='flex items-center w-full bg-black text-white justify-center py-3 mt-5 rounded'
          >
            Continue
          </Link>
           </div>
      </div>
    </div>
  )

  

};

export default Home;


