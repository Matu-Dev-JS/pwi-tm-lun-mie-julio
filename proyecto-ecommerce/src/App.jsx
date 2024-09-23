import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detail, Home } from './Pages'




function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product/detail' element={<Detail/>}/>
      </Routes>

    </>
  )
}

export default App
