import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Component
import Navbar from './component/Navbar'
// Pages
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'


function App() {


  return (
    <div className='app'>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
