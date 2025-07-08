import React from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Academics from './pages/Academics';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Galery';
import { FloatingButtons } from './component/Floating';

const App = () => {
  return (
    <>
    
   <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/academics" element={<Academics />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/gallery" element={<Gallery />} />
    
    </Routes>
    <FloatingButtons />
    <Footer />
   
   
    </>
  )
}

export default App
