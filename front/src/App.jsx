import './index.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Reservations from './views/Reservations/Appointments'
import Register from './views/Register/Register'
import Contact from './views/Contact/Contact'
import Login from './views/Login/Login'
import MisTurnos from './views/AdminTurnos/AdminTurnos'
import Reserve from './views/Reserve/Reserve'



function App() { 
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      {!isLanding && <NavBar/> }
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path='/reservations' element={ <Reservations/> }/>
          <Route path ="/contact" element={ <Contact /> } />
          <Route path='/login' element={ <Login/> }  />
          <Route path ="/register" element={ <Register/> } />
          <Route path ="/reserve" element={ <Reserve/> } />
          <Route path='/misturnos' element={ <MisTurnos/> } /> 
        </Routes>
    </>
  )
}

export default App
