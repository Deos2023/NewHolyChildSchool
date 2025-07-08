import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
       <footer className="bg-gray-100 text-gray-800 pt-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Connect with Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
            <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
            <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube /></a>
            <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* App Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Get Our App</h4>
          <div className="space-y-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-32" />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Enter your email" className="p-2 border border-gray-400 rounded" />
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">Subscribe</button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="text-sm space-y-1">
            <li>Address: E.C-74 Rajdanga Main Rd, Sector E, East Kolkata Twp,<br />
            Kolkata, West Bengal 700107 </li>
            <li>Mobile: 9231941881 / 6290007363 </li>
            <li>Email: thenewh349@gmail.com</li>
            
           
            <li><a onClick={()=>navigate("/contactus")} className="text-blue-600 hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 text-center py-4 text-sm text-gray-600">
      &copy; Copyright © {new Date().getFullYear()}. All Rights Reserved. Website Developed & Maintained by Digital Exposure Online Services
      </div>
    </footer>
    </>
  )
}

export default Footer
