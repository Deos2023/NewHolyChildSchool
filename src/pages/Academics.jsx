import React from 'react';
import { SlCalender } from "react-icons/sl";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaChartBar } from "react-icons/fa";
import bannerImage from "../assets/sch.jpeg";

const Academics = () => {
  // Exam schedule data from pg13
  const examSchedule = [
    { name: "1st Assessment", marks: "20 Marks", month: "June/July" },
    { name: "Half-Yearly Exam", marks: "50 Marks", month: "August/September" },
    { name: "2nd Assessment", marks: "20 Marks", month: "November/December" },
    { name: "Annual Examination", marks: "50 Marks", month: "February/March" }
  ];

  // Grading system from pg13
  const gradingSystem = [
    { range: "90-100", grade: "★", label: "Excellent" },
    { range: "80-89", grade: "A+", label: "Very Good" },
    { range: "70-79", grade: "A", label: "Good" },
    { range: "60-69", grade: "B", label: "Satisfactory" },
    { range: "50-59", grade: "C", label: "Average" }
  ];

  return (
    <>
      {/* Hero Banner - Enhanced */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
        <img
          src={bannerImage}
          alt="New Holy Child School Banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent z-10 p-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">ACADEMICS</h1>
          <p className="text-xl text-yellow-300 ">"True education is the complete development of a person"</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header - Enhanced */}
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 ">Academics</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
            "True education is the complete development of a person in terms of knowledge, sensibility, and behavior."
            <span className="block mt-2 text-sm text-gray-500 not-italic">- From President's Desk (pg4)</span>
          </p>
        </div> */}

        {/* Curriculum Structure - Enhanced */}
        <section className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <HiOutlineAcademicCap className="h-8 w-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 ">Curriculum Framework</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">Playgroup to Class XII</h3>
                <ul className="space-y-4">
                  {[
                    {icon: "✓", text: "CBSE/ISC affiliated curriculum "}, 
                    {icon: "✓", text: "Digital classrooms with audio-visual aids "},
                    {icon: "✓", text: "Four main examinations annually "},
                    {icon: "✓", text: "Project-based learning integrated with academics "}
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">Special Programs</h3>
                <ul className="space-y-4">
                  {[
                    {icon: "★", text: "M.M. Tutorial: After-school coaching "},
                    {icon: "★", text: "Vocational Courses: Computer training (CITA/DITA) "},
                    {icon: "★", text: "Adult education initiatives "}
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-200 text-blue-800 rounded-full p-1 mr-3 flex-shrink-0">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Schedule - Enhanced */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <SlCalender className="h-8 w-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 ">Examination Schedule</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">Examination</th>
                    <th className="py-4 px-6 text-left font-semibold">Marks</th>
                    <th className="py-4 px-6 text-left font-semibold">Month</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {examSchedule.map((exam, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-medium">{exam.name}</td>
                      <td className="py-4 px-6">{exam.marks}</td>
                      <td className="py-4 px-6">{exam.month}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              * For Classes X & XII: Board examination patterns apply 
            </p>
          </div>
        </section>

        {/* Grading System - Enhanced */}
        <section className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaChartBar className="h-8 w-8 text-blue-700" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 ">Grading System</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
              {gradingSystem.map((grade, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center border-t-4 border-blue-500"
                >
                  <span className="text-4xl block mb-3 text-blue-700">{grade.grade}</span>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{grade.range}</h3>
                  <p className="text-gray-600">{grade.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* School Timings - Enhanced */}
        <section className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <FiBookOpen className="h-8 w-8 text-amber-700" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 ">School Timings</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-amber-800 border-b-2 border-amber-200 pb-2">1st Shift </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-amber-50">
                    <span className="text-gray-700">Playgroup - UKG</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">8:20 AM - 10:30 AM</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-amber-800 border-b-2 border-amber-200 pb-2">2nd Shift </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-amber-50">
                    <span className="text-gray-700">Class I-II</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">10:30 AM - 2:20 PM</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Class III-XII</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">10:30 AM - 2:55 PM</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-amber-800 border-b-2 border-amber-200 pb-2">M.M. Tutorial </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Monday-Friday</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">3:10 PM - 5:10 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academics;