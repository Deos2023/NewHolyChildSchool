import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import b1 from "../assets/b1.webp";
import b2 from "../assets/b2.webp";
import founder from "../assets/pg12.jpg";
import bannerImg from "../assets/b1.webp"

const Home = () => {
  const slides = [b1, b2];
  const achievements = [
    {
      icon: "🏅",
      title: "International Karate Champions",
      detail: "3 Gold Medals (2023)",
    },
    {
      icon: "⚽",
      title: "NHCS Football Cup Winners",
      detail: "Senior & Junior Teams (2024)",
    },
    {
      icon: "🎨",
      title: "All Bengal Drawing Competition",
      detail: "1st, 2nd & 3rd Positions",
    },
  ];

  return (
    <div className=" mx-auto px-4">
      {/* Hero Banner with Slider */}
      <div className="relative w-full h-[500px] mb-12">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-opacity-40">
          <h2 className="text-white text-3xl sm:text-5xl font-bold mb-6 px-4">
            "Let There Be Light on Earth"
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl px-4">
            Education is the manifestation of perfection already in men.
          </p>
          <button className="bg-[#0c0b39] hover:bg-[#1a1969] text-white px-8 py-3 font-semibold rounded-lg transition">
            Admissions Open
          </button>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="h-full"
        >
          {slides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Quick Links Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {[
          { icon: "📚", title: "Academics", desc: "Playgroup to Class XII" },
          { icon: "🏆", title: "Achievements", desc: "Sports & Arts" },
          {
            icon: "💃",
            title: "SU-SWARNA Academy",
            desc: "Dance, Karate, Arts",
          },
          { icon: "👨‍🏫", title: "M.M. Tutorial", desc: "Board & College Prep" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FFEDCE] p-6  shadow-xl text-center hover:shadow-lg transition"
          >
            <span className="text-4xl mb-3 block">{item.icon}</span>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
         {/* Greeting Section */}
         <div
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Red blur overlay */}
      <div className="absolute inset-0  bg-opacity-10 backdrop-blur-sm"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to</h1>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-yellow-300 mb-8">
          The Shri Ram Schools
        </h2>
        <p className="max-w-3xl text-lg sm:text-xl leading-relaxed">
          Namaste! Discover a world of learning opportunities at The Shri Ram Schools (TSRS),
          located in the heart of the Delhi-NCR region. TSRS is a vibrant community of learners
          that fosters academic excellence, personal growth and cultural awareness.
        </p>
      </div>
    </div>

      {/* About Us Section */}
      <div className="bg-blue-50 p-8 md:p-12 rounded-xl shadow-sm mb-16">
        <h2 className="text-3xl font-serif text-blue-900 mb-6">
          About The New Holy Child School
        </h2>
        <div className="md:flex flex-col md:flex-row gap-8 items-start">
          {/* Text Content (Left Side - Wider) */}
          <div className="md:w-2/3 pb-10">
            <p className="text-gray-700 mb-6">
              Founded on <strong>16th April 2008</strong> by{" "}
              <strong>Mrs. Manimala Majumdar</strong>, our school is a temple of
              learning dedicated to holistic education.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>
                <strong>CBSE/ISC Curriculum</strong> Playgroup to Class XII
              </li>
              <li>
                <strong>True Education</strong> blending knowledge and character
              </li>
              <li>
                <strong>Extracurricular Excellence</strong> in sports and arts
              </li>
            </ul>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
              Learn More →
            </button>
          </div>

          {/* Image (Right Side - Compact) */}
          <div className=" md:block md:w-1/4">
            <div className="relative h-64 w-full rounded-lg overflow-hidden border-2 border-white shadow-md">
              <img
                src={founder}
                alt="Founder Mrs. Manimala Majumdar"
                className="absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-center text-sm mt-2 text-gray-600">
              Our Founder
            </p>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif text-center mb-8">
          Our Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <span className="text-5xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Card */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm mb-16">
        <div className="flex items-center gap-3 mb-4">
          <svg
            className="w-6 h-6 text-amber-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-xl font-bold text-amber-800">
            Important Announcements
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-gray-700 mb-2">
              <strong>Annual Examination Schedule</strong> for Classes I-XII
              (March 2025) has been updated.
            </p>
            <a
              href="/exam-schedule.pdf"
              className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
              download
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Exam Schedule
            </a>
          </div>
          <div className="pl-4 border-l-2 border-amber-300">
            <p className="text-gray-700 mb-2">
              <strong>For Class XII (ISC/CBSE):</strong> Board practicals begin
              on 15th February.
            </p>
            <a
              href="/board-guidelines.pdf"
              className="text-amber-700 hover:underline font-medium"
            >
              View Guidelines
            </a>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif text-center mb-8">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Republic Day Celebration",
              date: "26 Jan 2025",
              desc: "Tableau show, Scout Band, and Cultural Program",
            },
            {
              title: "Founder's Day Charity Drive",
              date: "21 Mar 2025",
              desc: "Food distribution to underprivileged communities",
            },
          ].map((event, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-800 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{event.date}</p>
                  <p className="text-gray-600">{event.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
