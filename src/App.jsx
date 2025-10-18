import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Certificates from './pages/Certificates'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetail'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from "./components/FloatingButtons"

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
          <Route path='/services/:route' element={<ServiceDetailPage/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/certificates' element={<Certificates/>}/>
         <Route path='/privacy' element={<Privacy/>}/>
    </Routes>
    <FloatingButtons/>
  <Footer/>
    </BrowserRouter>
  )
}

export default App