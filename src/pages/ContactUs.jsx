import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Contact Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif  text-blue-900 mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about admissions, programs, or any other inquiries, 
          feel free to reach out to us. Our team is here to assist you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl  mb-6 text-blue-800 font-serif ">REACH US THROUGH</h2>
          
          <form className="space-y-6">
            {/* Name Field */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Comment or Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition flex items-center"
            >
              <FaPaperPlane className="mr-2" />
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-serif  mb-4 text-blue-800">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-700 mt-1 mr-3 text-lg" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-gray-600">
                    Rajdanga Main Rd, Sector E, East Kolkata Twp,<br />
                    Kolkata, West Bengal 700107
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaPhone className="text-blue-700 mr-3 text-lg" />
                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="text-blue-700 mr-3 text-lg" />
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-600">info@newholychildschool.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-80 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="School Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?q=The%20New%20Holy%20Child%20School%20Rajdanga%20Main%20Rd%20Sector%20E%20East%20Kolkata%20Twp%20Kolkata%20West%20Bengal%20700107&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;