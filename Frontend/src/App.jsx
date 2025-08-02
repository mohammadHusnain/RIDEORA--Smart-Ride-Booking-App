import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Start from './Pages/Start'
import UserLogin from './Pages/UserLogin'
import UserSignUp from './Pages/UserSignUp'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignUp from './Pages/CaptainSignUp'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Routes>

<Route path='/'  element={<Start />}/>
<Route path='/login'  element={<UserLogin />}/>
<Route path='/signup'  element={<UserSignUp />}/>
<Route path='/captain-login'  element={<CaptainLogin />}/>
<Route path='/captain-signup'  element={<CaptainSignUp />}/>
<Route path='/home'  element={<Home/>}/>

      </Routes>
       </div>
  )
}

export default App