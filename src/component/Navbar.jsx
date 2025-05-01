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
            <div className="sticky top-0 z-50 w-full">
                {/* This wrapper ensures the fade effect works properly */}
                <div className="relative">
                    {/* The fade effect - positioned at bottom of navbar */}
                    <div className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-t from-transparent to-white z-10"></div>
                    
                    {/* Your existing navbar */}
                    <nav className="bg-white shadow flex items-center justify-between px-6 py-3">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <img src={logo} onClick={()=>navigate("/")} alt="Logo" className="h-12 w-12" />
                        </div>

                        {/* Desktop Links */}
                        <div className='hidden sm:block'>
                            <ul className="flex space-x-6 font-semibold text-black text-sm">
                                <li className={`cursor-pointer ${
                                    isActive('/') ? 'text-red-600' : 'text-black hover:text-red-500'
                                }`} onClick={()=>navigate("/")}>HOME</li>
                                <li className={`cursor-pointer ${
                                    isActive('/aboutus') ? 'text-red-600' : 'text-black hover:text-red-500'
                                }`} onClick={()=>navigate("/aboutus")}>ABOUT US▾</li>
                                <li className="hover:text-red-500 cursor-pointer">ADMISSIONS▾</li>
                                <li className={`cursor-pointer ${
                                    isActive('/academics') ? 'text-red-600' : 'text-black hover:text-red-500'
                                }`} onClick={()=>navigate("/academics")}>ACADEMICS▾</li>
                                <li className="hover:text-red-500 cursor-pointer">CONTACT US▾</li>
                            </ul>
                        </div>

                        <div className='text-2xl sm:hidden' onClick={() => setPop(!pop)}>
                            <MdOutlineMenu />
                        </div>
                    </nav>
                </div>

                {/* Mobile Sidebar - unchanged from your original */}
                {pop && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div 
                            className="absolute inset-0 backdrop-blur-md bg-opacity-50" 
                            onClick={() => setPop(false)}
                        ></div>
                        <div className="relative bg-white rounded-lg shadow-xl w-3/4 max-w-md py-6 px-4 z-10">
                            <button 
                                className="absolute top-2 right-2 text-2xl text-gray-600" 
                                onClick={() => setPop(false)}
                            >
                                <IoCloseSharp />
                            </button>
                            <div className="flex flex-col space-y-4 text-center font-medium">
                                <div className={`cursor-pointer ${
                                    isActive('/') ? 'text-red-600' : 'text-black hover:text-red-500'
                                }`} onClick={()=>{
                                    navigate("/")
                                    setPop(!pop)
                                }}>HOME</div>
                                <div className={`cursor-pointer ${
                                    isActive('/aboutus') ? 'text-red-600' : 'text-black hover:text-red-500'
                                }`} onClick={()=>{
                                    navigate("/aboutus")
                                    setPop(!pop)
                                }}>ABOUT US▾</div>
                                <div className="hover:text-red-500 cursor-pointer">ADMISSIONS▾</div>
                                <div className={`cursor-pointer ${
                                    isActive('/academics') ? 'text-red-600' : 'text-black hover:text-red-500'
                                }`} onClick={()=>{
                                    navigate("/academics")
                                    setPop(!pop)
                                }}>ACADEMICS</div>
                                <div className="hover:text-red-500 cursor-pointer">CONTACT US▾</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar