import React from 'react'
import './style.css'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import ErrorPage from './Pages/ErrorPage'


function App() {
 
    //SPA
  
  return (
    <div>
      <header>
        <h2>Nombre marca</h2>
        <nav>
          <Link to={'/contact'}>Ir a contacto</Link>
          <Link to={'/home'}>Ir a home</Link>
        </nav>
      </header>
      <Routes>
        {/* Si la ruta es /home entonces mostrare el componente HomePage */}
        <Route path='/' element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
     
    </div>
  )
}

export default App
