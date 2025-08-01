import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import UserLogin from './Pages/UserLogin'
import UserSignUp from './Pages/UserSignUp'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignUp from './Pages/CaptainSignUp'

const App = () => {
  return (
    <div>
      <Routes>

<Route path='/'  element={<Home />}/>
<Route path='/login'  element={<UserLogin />}/>
<Route path='/signup'  element={<UserSignUp />}/>
<Route path='/captain-login'  element={<CaptainLogin />}/>
<Route path='/captain-signup'  element={<CaptainSignUp />}/>

      </Routes>
       </div>
  )
}

export default App