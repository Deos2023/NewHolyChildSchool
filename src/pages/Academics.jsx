import React from 'react';
// import { CalendarIcon, BookOpenIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/outline';
import { SlCalender } from "react-icons/sl";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaChartBar } from "react-icons/fa";
import bannerImage from "../assets/sch2.jpeg";
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
          <div className="relative w-full h-96 overflow-hidden mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
            <img
              src={bannerImage}
              alt="New Holy Child School Banner"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent z-10 p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ACADEMICS</h1>
              <p className="text-xl text-yellow-300 ">"True education is the complete development of a person in terms of knowledge, sensibility, and behavior."</p>
            </div>
          </div>
    <div className="max-w-7xl mx-auto px-4 py-8">
     
      {/* Header */}
      {/* <div className="text-center mb-10">
        <h1 className="text-4xl  text-blue-900 mb-4 font-bold">Academics</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          "True education is the complete development of a person in terms of knowledge, sensibility, and behavior." 
          <span className="block mt-2 text-sm">- From President's Desk (pg4)</span>
        </p>
      </div> */}

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Curriculum Structure */}
      <section className="mb-16">
        <div className="flex items-center text-center text-3xl md:text-4xl font-bold text-blue-800 mb-6 pb-4 border-b-2 border-blue-100">
          <HiOutlineAcademicCap className="h-8 w-8 text-blue-700 mr-3" />
          <h2 className="  text-blue-900 ">Curriculum Framework</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Playgroup to Class XII</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>CBSE/ISC</strong> affiliated curriculum (pg2, pg15)</li>
              <li>Digital classrooms with audio-visual aids (pg2, pg3)</li>
              <li>Four main examinations annually (pg2, pg13)</li>
              <li>Project-based learning integrated with academics (pg2)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Special Programs</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>M.M. Tutorial</strong>: After-school coaching (pg7, pg14)</li>
              <li><strong>Vocational Courses</strong>: Computer training (CITA/DITA) (pg7)</li>
              <li>Adult education initiatives (pg3)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exam Schedule */}
      <section className="mb-16 bg-blue-50 p-8 ">
        <div className="flex items-center mb-8">
          <SlCalender className="h-8 w-8 text-blue-700 mr-3" />
          <h2 className="text-2xl  text-blue-900">Examination Schedule</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white  overflow-hidden">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Examination</th>
                <th className="py-3 px-4 text-left">Marks</th>
                <th className="py-3 px-4 text-left">Month</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {examSchedule.map((exam, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                  <td className="py-4 px-4 font-medium">{exam.name}</td>
                  <td className="py-4 px-4">{exam.marks}</td>
                  <td className="py-4 px-4">{exam.month}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          * For Classes X & XII: Board examination patterns apply (pg13)
        </p>
      </section>

      {/* Grading System */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <FaChartBar className="h-8 w-8 text-blue-700 mr-3" />
          <h2 className="text-2xl  text-blue-900">Grading System</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {gradingSystem.map((grade, index) => (
            <div key={index} className="bg-white p-4  shadow text-center border-t-4 border-blue-500">
              <span className="text-3xl block mb-2">{grade.grade}</span>
              <h3 className="font-bold">{grade.range}</h3>
              <p className="text-sm text-gray-600">{grade.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* School Timings */}
      <section className="bg-amber-50 p-8 ">
        <div className="flex items-center mb-8">
          <FiBookOpen className="h-8 w-8 text-amber-700 mr-3" />
          <h2 className="text-2xl  text-amber-900">School Timings</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">1st Shift (pg14)</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Playgroup - UKG</span>
                <span>8:20 AM - 10:30 AM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">2nd Shift (pg14)</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Class I-II</span>
                <span>10:30 AM - 2:20 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Class III-XII</span>
                <span>10:30 AM - 2:55 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">M.M. Tutorial (pg14)</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday-Friday</span>
                <span>3:10 PM - 5:10 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </div>
    </div>
    </>
  );
};

export default Academics;