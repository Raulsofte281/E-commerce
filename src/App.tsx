import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './routes/header'
import { Home } from './routes/home'


export function App() {

  return (
   
   <> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='*' element={<h1>NOT FOUND</h1>}/>
      </Routes>
    </>
    
  )
}

export default App
