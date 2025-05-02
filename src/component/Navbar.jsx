import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [pop, setPop] = useState(false)
    const isActive = (path) => location.pathname === path;
    
    return (
        <>
            <div className="fixed w-full top-0 z-50 bg-white shadow-sm">
                {/* Top border accent */}
                <div className="h-1 bg-gradient-to-r from-blue-800 to-yellow-500"></div>
                
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex items-center justify-between py-4">
                        {/* Logo with enhanced styling */}
                        <div 
                            className="flex items-center space-x-3 cursor-pointer group"
                            onClick={() => navigate("/")}
                        >
                            <img 
                                src={logo} 
                                alt="Logo" 
                                className="h-12 w-12 transition-transform group-hover:scale-105" 
                            />
                            <span className="sm:text-xl font-bold text-blue-900">
                                The New Holy Child School
                            </span>
                        </div>

                        {/* Desktop Links - Enhanced */}
                        <div className='hidden md:block'>
                            <ul className="flex space-x-6">
                                {[
                                    { path: '/', name: 'HOME' },
                                    { path: '/aboutus', name: 'ABOUT US' },
                                    { path: '/gallery', name: 'GALLERY' },
                                    { path: '/academics', name: 'ACADEMICS' },
                                    { path: '/contactus', name: 'CONTACT US' }
                                ].map((item, index) => (
                                    <li key={index} className="relative group">
                                        <button
                                            onClick={() => navigate(item.path)}
                                            className={`px-1 py-2 text-sm font-medium transition-all duration-300 ${
                                                isActive(item.path) 
                                                    ? 'text-blue-600' 
                                                    : 'text-gray-700 hover:text-blue-600'
                                            }`}
                                        >
                                            {item.name}
                                        </button>
                                        {/* Animated underline */}
                                        <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                                            isActive(item.path) 
                                                ? 'w-full' 
                                                : 'w-0 group-hover:w-full'
                                        }`}></div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile Menu Button - Enhanced */}
                        <button 
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setPop(!pop)}
                            aria-label="Menu"
                        >
                            <MdOutlineMenu className="text-2xl text-gray-700" />
                        </button>
                    </nav>
                </div>

                {/* Mobile Sidebar - Enhanced */}
                {pop && (
                    <div className="fixed inset-0 z-50">
                        {/* Overlay with blur effect */}
                        <div 
                            className="absolute inset-0 bg-black/30 backdrop-blur-sm" 
                            onClick={() => setPop(false)}
                        ></div>
                        
                        {/* Sidebar container */}
                        <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                            {/* Close button */}
                            <button 
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                onClick={() => setPop(false)}
                            >
                                <IoCloseSharp className="text-2xl text-gray-600" />
                            </button>
                            
                            {/* Logo at top */}
                            <div 
                                className="flex items-center p-6 border-b border-gray-100 cursor-pointer"
                                onClick={() => {
                                    navigate("/")
                                    setPop(false)
                                }}
                            >
                                <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
                                <span className="text-lg font-bold text-blue-900">NHCS</span>
                            </div>
                            
                            {/* Menu items */}
                            <div className="p-4">
                                {[
                                    { path: '/', name: 'Home' },
                                    { path: '/aboutus', name: 'About Us' },
                                    { path: '/gallery', name: 'Gallery' },
                                    { path: '/academics', name: 'Academics' },
                                    { path: '/contactus', name: 'Contact Us' }
                                ].map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            navigate(item.path)
                                            setPop(false)
                                        }}
                                        className={`w-full text-left px-4 py-3 my-1 rounded-lg transition-colors ${
                                            isActive(item.path)
                                                ? 'bg-blue-100 text-blue-700 font-medium'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Contact info in footer */}
                            <div className="absolute bottom-0 w-full p-4 bg-gray-50 text-sm">
                                <p className="text-gray-600">Rajdanga, Kolkata</p>
                                <p className="text-blue-600 font-medium">contact@nhcs.edu</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Spacer to account for fixed navbar */}
            <div className="h-16"></div>
        </>
    )
}

export default Navbar