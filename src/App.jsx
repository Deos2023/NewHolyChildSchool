import React from 'react'
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
// import Academics from './pages/Academics';

const App = () => {
  return (
    <>
    
   <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/academics" element={<Academics />} /> */}
    
    </Routes>
    <Footer />
   
   
    </>
  )
}

export default App
