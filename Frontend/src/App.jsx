import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Start from './Pages/Start'
import UserLogin from './Pages/UserLogin'
import UserSignUp from './Pages/UserSignUp'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignUp from './Pages/CaptainSignUp'
import Home from './Pages/Home'
import UserProtectWrapper from './Pages/UserProtectWrapper'
import UserLogout from './Pages/UserLogout'
import CaptainHome from './Pages/CaptainHome'
import Riding from './Pages/Riding'
import CaptainRiding from './Pages/CaptainRiding'

const App = () => {
  
  return (

    <div>

<Routes>

<Route path='/'  element={<Start />}/>
<Route path='/signup'  element={<UserSignUp />}/>
<Route path='/login'  element={<UserLogin />}/>
<Route path='/home'  element={ <UserProtectWrapper> <Home/> </UserProtectWrapper>}/>
<Route path='/riding'  element={<Riding />}/>
<Route path='/user/logout' element={<UserProtectWrapper> <UserLogout/> </UserProtectWrapper>} />
<Route path='/captain-signup'  element={<CaptainSignUp />}/>
<Route path='/captain-login'  element={<CaptainLogin />}/>
<Route path='/captain-home' element={<UserProtectWrapper> <CaptainHome/> </UserProtectWrapper>} />
<Route path='/captain-riding'  element={<CaptainRiding />}/>


 
 </Routes>

       </div>
  )
}

export default App