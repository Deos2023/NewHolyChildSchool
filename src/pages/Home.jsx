import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import logo from "../assets/logo.png";
import logo2 from "../assets/logowhite.png";
import b1 from "../assets/img11.png";
import b2 from "../assets/img12.png";
import b3 from "../assets/img14.png";
import b4 from "../assets/img1.jpeg";
import b5 from "../assets/img7.jpeg";
import b6 from "../assets/img8.jpeg";

import a1 from "../assets/imcr11.png";
import a2 from "../assets/imcr12.png";
import a3 from "../assets/imcr3.jpeg";
import a4 from "../assets/imcr15.jpeg";

import founder from "../assets/pg12.jpg";
import bannerImg from "../assets/img4.jpeg";
import student1 from "../assets/ach3.png";
import student2 from "../assets/dance.jpeg";
import student3 from "../assets/img3.jpeg";
import student4 from "../assets/img4.jpeg";
import football from "../assets/foot1.jpeg";
import karate from "../assets/karate2.jpeg";
import drawing from "../assets/ach3.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const slides = [b1, b2, b3, b4, b5, b6];
  const mobileSlide = [a1, a2, a3, a4];

  const achievements = [
    {
      image: football,
      title: " NHCS Football Cup Winners",
      detail: "3 Gold Medals (2023)",
      icon: "⚽",
    },
    {
      image: karate,
      title: " Karate National Champion ",
      detail: "Karate champion (2021)",
      icon: "🥋",
    },
    {
      image: drawing,
      title: "All Bengal Drawing Competition",
      detail: "1st, 2nd & 3rd Positions",
      icon: "🎨",
    },
  ];

  const studentImages = [
    {
      src: student1,
      alt: "Student participate in coseplay game ",
      category: "sports",
    },
    {
      src: student2,
      alt: "Cultural program performance",
      category: "academics",
    },
    { src: student3, alt: "Parade merching", category: "cultural" },
    { src: student4, alt: "Excitement for Future", category: "sports" },
  ];

  const events = [
    {
      title: "Independence Day",
      date: "15th August 2025",
      desc: " Scout Band, and Cultural Program",
      icon: "🇮🇳",
    },
    {
      title: "Founder's Day Charity Drive",
      date: "21 Mar 2025",
      desc: "Food distribution to underprivileged communities",
      icon: "❤️",
    },
  ];

  return (
    <div className="mx-auto bg-gray-50">
      {/* Enhanced Hero Banner */}
      <div className="relative w-full h-[700px]  md:h-screen max-h-[800px] mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl space-y-8"
          >
            <div className="mb-6">
              <img
                src={logo2}
                alt="School Logo"
                className="h-20 mx-auto mb-4"
              />
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
                The New Holy Child School
              </h1>
              <p className=" font-semibold text-gray-200 max-w-3xl mx-auto">
                ICSE , ISE / NIOS , (CURRICULAM)
              </p>
              <div className="w-24 h-1 bg-yellow-400 mx-auto my-6"></div>
             
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Nurturing excellence through holistic education since 2008
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <button
                onClick={() => navigate("/aboutus")}
                className="relative px-12 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  About Us{" "}
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </motion.div>
        </div>

        <Swiper
          modules={[Autoplay, Parallax]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000}
          parallax={true}
          loop={true}
          className="sm:h-screen h-[700px]"
        >
          {(isMobile ? mobileSlide : slides).map((src, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="absolute inset-0 bg-black/30"
                data-swiper-parallax="-100"
              ></div>
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover "
                data-swiper-parallax="-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Admissions Card - Enhanced */}
      <div className="max-w-7xl mx-auto my-16 bg-white  shadow-2xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <div className="md:flex">
          <div className="md:w-2/5 bg-blue-900 p-8 flex flex-col items-center justify-center text-center text-white">
            <img src={logo2} alt="School Logo" className="h-24 w-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">2025-2026 Admissions</h3>
            <p className="text-yellow-300 text-xl font-semibold">Now Open</p>
            <div className="mt-6 w-full">
              <div className="h-1 bg-yellow-400 w-16 mx-auto mb-4"></div>
              <p className="text-sm opacity-80">Limited seats available</p>
            </div>
          </div>

          <div className="md:w-3/5 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Admissions to The New Holy Child School, Rajdanga Kolkata
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                Important Dates
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                    •
                  </span>
                  <span>
                    Application period: <strong>1 Oct - 15 march</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                    •
                  </span>
                  <span>
                    Parent interaction: <strong>16-20 March</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                    •
                  </span>
                  <span>
                    First list announcement: <strong>24th March 2025</strong>
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigate("/contactus")}
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all"
            >
              Contact Us <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* About Us Section - Enhanced */}
      <div className="max-w-7xl sm:mx-auto mx-4 my-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5 relative">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
              <img
                src={founder}
                alt="Founder"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="mb-2 text-blue-600 font-semibold">
              About Our Institution
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Excellence in Education Since 2008
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Established on <strong>16th April 2008</strong> by{" "}
                <strong>Mrs. Manimala Majumdar</strong>, our institution is a
                temple of learning with qualified teachers dedicated to student
                development.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>
                    Comprehensive curriculum from Play-group to Class XII
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>83-92% pass rate in board examinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Holistic development through sports and arts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>State-of-the-art digital classrooms</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/aboutus")}
                className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-all flex items-center gap-2"
              >
                Learn More <FaArrowRight />
              </button>
              <button
                onClick={() => navigate("/contactus")}
                className="px-8 py-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section - Enhanced */}
      <div className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/20"
              >
                <div className="relative h-60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-4xl">{item.icon}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Life Section - Enhanced */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Student Life
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moments that define the NHCS experience - learning, growing, and
              excelling together
            </p>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {studentImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section - Enhanced */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-800 flex items-center justify-center p-6 text-white text-4xl">
                    {event.icon}
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-1">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.desc}</p>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
                      Learn More <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;