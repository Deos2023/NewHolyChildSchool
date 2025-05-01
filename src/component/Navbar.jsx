import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate =useNavigate()
    const [pop, setPop] = useState(false)
    return (
        <>
            <header className="w-full">
                {/* Top Bar */}
                <div className="bg-[#0c0b39] flex justify-end gap-2 p-2 pr-4">
                    <button className="bg-yellow-400 text-black text-sm sm:text-lg font-medium px-3 py-1 rounded">
                        👤  Parent Portal
                    </button>
                    <button className="bg-yellow-400 text-black text-sm sm:text-lg font-medium px-3 py-1 rounded">
                        👤  Staff Portal
                    </button>
                    <button className="bg-yellow-400 text-black text-sm sm:text-lg font-medium px-3 py-1 rounded">
                        ✉️ NHCS Email
                    </button>
                </div>

                {/* Main Navbar */}
                <nav className="bg-white shadow flex items-center justify-between px-6 py-3 relative">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src={logo} onClick={()=>navigate("/")} alt="Logo" className="h-12 w-12" />
                    </div>

                    {/* Links */}
                    <div className='hidden sm:block'>
                        <ul className="flex space-x-6 font-semibold text-black text-sm ">
                            <li className="text-red-600" onClick={()=>navigate("/")}>HOME</li>
                            <li className="hover:text-red-500 cursor-pointer">ABOUT US▾
                                
                            </li>
                            {/* <li className="hover:text-red-500 cursor-pointer">COMMUNITY▾</li> */}
                            {/* <li className="hover:text-red-500 cursor-pointer">STUDENT DEVELOPMENT▾</li> */}
                            <li className="hover:text-red-500 cursor-pointer">ADMISSIONS▾</li>
                            <li className="hover:text-red-500 cursor-pointer" onClick={()=>navigate("/academics")}>ACADEMICS▾</li>
                            <li className="hover:text-red-500 cursor-pointer">CONTACT US▾</li>
                        </ul>
                    </div>

                    <div className='text-2xl sm:hidden' onClick={() => setPop(!pop)}>
                        <MdOutlineMenu />
                    </div>
                    
                    {/* Mobile Sidebar */}
                    {pop && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            {/* Overlay */}
                            <div 
                                className="absolute inset-0 backdrop-blur-md bg-opacity-50" 
                                onClick={() => setPop(false)}
                            ></div>
                            
                            {/* Centered Sidebar */}
                            <div className="relative bg-white rounded-lg shadow-xl w-3/4 max-w-md py-6 px-4 z-10">
                                <button 
                                    className="absolute top-2 right-2 text-2xl text-gray-600" 
                                    onClick={() => setPop(false)}
                                >
                                    <IoCloseSharp />
                                </button>
                                <div className="flex flex-col space-y-4 text-center font-medium">
                                    <div className="text-red-600">HOME</div>
                                    <div className="hover:text-red-500 cursor-pointer">ABOUT▾</div>
                                    <div className="hover:text-red-500 cursor-pointer">COMMUNITY▾</div>
                                    <div className="hover:text-red-500 cursor-pointer">STUDENT DEVELOPMENT▾</div>
                                    <div className="hover:text-red-500 cursor-pointer">ADMISSIONS▾</div>
                                    <div className="hover:text-red-500 cursor-pointer">CAREERS▾</div>
                                    <div className="hover:text-red-500 cursor-pointer">CONTACT US▾</div>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Navbar