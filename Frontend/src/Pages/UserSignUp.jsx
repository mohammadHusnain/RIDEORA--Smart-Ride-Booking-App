import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // Just logging the new user object locally
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    };

    console.log('New User:', newUser);

    // Reset form
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');

    navigate('/login'); // Redirect to home page after signup

  };

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-20 mb-10' src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-b16c-61f7-a127-1b323a3c53dc/raw?se=2025-08-01T13%3A51%3A36Z&sp=r&sv=2024-08-04&sr=b&scid=4b06d5c1-4264-5af0-8d29-65bbcdae98c6&skoid=732f244e-db13-47c3-bcc7-7ee02a9397bc&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-01T10%3A46%3A36Z&ske=2025-08-02T10%3A46%3A36Z&sks=b&skv=2024-08-04&sig=PQOFFpKPzT%2BVSDlnyCaBShu3DDsuH/P0owYhLeUTHjY%3D" alt="" />

          <form onSubmit={submitHandler}>
            <h3 className='text-lg w-1/2 font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
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

            <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>
              Create account
            </button>
          </form>

          <p className='text-center'>
            Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link>
          </p>
        </div>

        <div>
          <p className='text-[10px] leading-tight'>
            This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
