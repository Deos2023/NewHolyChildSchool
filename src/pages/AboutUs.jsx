import React from "react";
import bannerImage from "../assets/school.jpeg";
import ach1 from "../assets/ach.jpeg";
import ach2 from "../assets/ach2.jpeg";
import ach3 from "../assets/ach3.png";
import ach4 from "../assets/ach4.jpeg";
import charity1 from "../assets/chr1.png";
import charity2 from "../assets/chr2.png";
import charity3 from "../assets/chr3.png";
import { useState } from "react";
import { FiZoomIn, FiX } from "react-icons/fi";

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const charityImages = [
    { src: charity1, alt: "Food distribution to needy people" },
    { src: charity2, alt: "Educational materials donation" },
    { src: charity3, alt: "Community support program" },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            THE NEW HOLY CHILD SCHOOL
          </h1>
          <p className="text-xl text-yellow-300 ">
            "LET THERE BE LIGHT ON EARTH"
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* School Overview - Enhanced */}
        <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 pb-4 border-b-2 border-blue-100 ">
              About Our Institution
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                The New Holy Child School was established on{" "}
                <span className="font-semibold text-blue-700">
                  16th April 2008
                </span>{" "}
                by{" "}
                <span className="font-semibold text-blue-700">
                  Mrs. Manimala Majumdar
                </span>
                , who passed away on 21st March 2010. It is a Temple of Learning
                in the truest sense of the term, with the sole purpose of
                spreading education through qualified teachers dedicated to
                rendering service for the proper development of students.
              </p>
              <p>
                The Managing Committee is enriched by personalities like
                Scientists, Professors, Doctors, Teachers, Lawyers, and
                Educationalists who are vigilant in maintaining proper
                discipline, academic standards, and humane qualities.
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure - Enhanced */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 pb-4 border-b-2 border-blue-200 ">
              Our Infrastructure
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 ">
                  <span className="border-b-2 border-yellow-400 pb-1">
                    Facilities Include
                  </span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Separate classrooms with digital and audio-visual facilities",
                    "Separate washrooms for girls, boys, staffs & Guardians",
                    "Canteen and front desk office",
                    "Office, staff room, sick room, conference room",
                    "Computer lab and science laboratory",
                    "Library and yoga/dance/karate spaces",
                    "Newly built SAI Auditorium ",
                    "Well equipped and decorated play - house. ",
                    "Indoor and outdoor games facilities",
                    "CCTV monitoring with mic for entire premises",
                    "24 hours security and own Car pool service",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700 mb-4 ">
                  <span className="border-b-2 border-yellow-400 pb-1">
                    Additional Features
                  </span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Attached tutorial (M.M. Tutorial)",
                    "M.M. Tutorial for all classes by separate teachers & routine wises",
                    "Cultural and physical fitness academy (SU SWARNA CULTURAL ACADEMY)",
                    "Vocational computer centre",
                    "Girls-Boys Scout Band",
                    "School canteen and stationary system",
                    "Computer laboratory for both Juniors and Seniors",
                    "Science and general Laboratories",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Structure - Enhanced */}
        <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 pb-4 border-b-2 border-blue-100 ">
              Educational Structure
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                We conduct four main examinations:{" "}
                <span className="font-semibold">1st Assessment (20 marks)</span>
                , <span className="font-semibold">Half Yearly (50 marks)</span>,{" "}
                <span className="font-semibold">2nd Assessment (20 marks)</span>
                , and{" "}
                <span className="font-semibold">
                  Annual examination (50 marks)
                </span>{" "}
                up to class VIII. For classes IX to XII, we follow the board
                pattern.
              </p>
              <p>
                Along with regular studies, students prepare projects and crafts
                which are reflected in report cards along with co-curricular
                examinations like Yoga, Drawing, PT, Spelling, dictation,
                Reading and Oral tests. We also conduct internal competitions in
                Handwriting, Recitation, Drawing, Dance, Debate, and Extempore.
              </p>
              <p>
                <span className="font-semibold">
                  Weekly PT and Yoga Classes
                </span>{" "}
                are compulsory, with examinations conducted. We have WhatsApp
                groups for all separate classes to share educational and
                co-curricular schedules.
              </p>
            </div>
          </div>
        </section>

        {/* Affiliated Programs - Enhanced */}
        <section className="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 pb-4 border-b-2 border-blue-200 ">
              Our Affiliated Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* M.M. Tutorial */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 ">
                  <span className="border-b-2 border-yellow-400 pb-1">
                    M.M. TUTORIAL
                  </span>
                </h3>
                <div className="prose text-gray-700 space-y-4">
                  <p>
                    Conducted from{" "}
                    <span className="font-semibold">
                      3:10pm to 5:10pm (Monday to Friday)
                    </span>{" "}
                    with separate faculties for each subject.
                  </p>
                  <p>
                    We help board candidates (X & XII) solve previous board
                    papers, complete assignments and projects, and provide notes
                    and examinations for better preparation.
                  </p>
                  <p>
                    We also coach college students (B.A, B.COM, B.SC, B.TS,
                    Psychology, English honours, Accountancy) from Calcutta
                    University and open universities like IGNOU.
                  </p>
                </div>
              </div>

              {/* SU-SWARNA CULTURAL ACADEMY */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 ">
                  <span className="border-b-2 border-yellow-400 pb-1">
                    SU-SWARNA CULTURAL ACADEMY
                  </span>
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Drawing/Painting",
                      items:
                        "Pencil sketch, Pastel color, Water color, Oil color, Pen sketch, Charcoal sketch, Glass painting",
                    },
                    {
                      title: "Dance",
                      items:
                        "Rabindra Nritya, Bharatanatyam, Kathak, Folk and Creative",
                    },
                    {
                      title: "Computer",
                      items:
                        "CITA, DITA, ADITA, ORACLE, DTP, C, C++, JAVA, AWD",
                    },
                    {
                      title: "Karate",
                      items:
                        "Our students have achieved Gold in School Games, District, State, National, and International levels",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-blue-600">
                        {item.title}:
                      </h4>
                      <p className="text-gray-700">{item.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Achievements - Enhanced */}
        <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
  <div className="p-8 md:p-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 pb-4 border-b-2 border-blue-100">
      Student Achievements
    </h2>
    
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Achievements List (Left Column - 2/3 width) */}
      <div className="lg:w-2/3">
        <ul className="space-y-4">
          {/* Academic Achievements */}
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>100% pass rate in Board Examinations (X & XII) with higher first division</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>Two-time Winner in STATE LEVEL QUIZ COMPETITION (Byju's)</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>Two-time Winner in STATE LEVEL SPELLING COMPETITION (Spell Bee)</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>Top positions in ALL BENGAL SIT AND DRAW COMPETITION</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>Multiple dance competition prizes and stage performances</span>
          </li>

          {/* Football Achievements */}
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>CHAMPION in INTER-SCHOOL FOOTBALL TOURNAMENT 2024 (Senior)</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>CHAMPION in INTER-SCHOOL FOOTBALL TOURNAMENT 2024 (Junior) by: SU-SWARNA CULTURAL ACADEMY</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>RUNNERS UP in INTER-SCHOOL FOOTBALL TOURNAMENT 2022 (Senior)</span>
          </li>

          {/* Karate Achievements */}
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span className="font-semibold">Karate Achievements:</span>
          </li>
          <div className="ml-8 mt-2 space-y-3">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Three times GOLD in INTERNATIONAL KARATE CHAMPIONSHIP</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Four times NATIONAL CHAMPION</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Three times STATE CHAMPION</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Two times Champion in School Games</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Three times Champion in District Tournament</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Many BLACK BELT HOLDER STUDENTS</span>
            </li>
          </div>

          {/* Other Sports */}
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>STATE CHAMPION in KICK BOXING</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>Champions in ARCHERY at District, State, and National levels</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>Champions in BADMINTON at State, National, and International levels</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
            <span>Hopefully we will introduce INTER-SCHOOL KHOKO TOURNAMENT for GIRLS by 2025-26 session</span>
          </li>
        </ul>
      </div>

      {/* Image Gallery Column (Right Column - 1/3 width) */}
      <div className="lg:w-1/3 space-y-4">
        {/* Replace these with your actual achievement images */}
        <img 
          src={ach1} 
          alt="Karate championship team with trophies" 
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
        <img 
          src={ach2} 
          alt="Football team celebrating victory" 
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
        
      </div>
      
    </div>
  </div>
</section>

        {/* Celebrations and Events - Enhanced */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 pb-4 border-b-2 border-green-200 ">
              Celebrations & Events
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-4 ">
                  <span className="border-b-2 border-yellow-400 pb-1">
                    Annual Celebrations
                  </span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Saraswati Puja, Ganesh Chaturthi",
                    "Republic Day and Independence Day with Road Rally, Processions, Tableau shows",
                    "Rabindra Nazrul Jayanti, Foundation Day",
                    "Vidya Sagar Jayanti, Protagonist Day",
                    "World Yoga Day, World Science Day, Green Day",
                    "Rath Yatra, Jannasthami with Jhulan",
                    "Christmas Day, Sports Day",
                    "Fete cum Exhibitions, Annual Cultural Meet",
                    "Picnic, Excursion, School Magazine publication",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-green-700 mb-4 ">
                  <span className="border-b-2 border-yellow-400 pb-1">
                    Special Programs
                  </span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Founder's Cup (Inter-class Football and Cricket Tournament)",
                    "Science and Geography Exhibitions",
                    "Essay writing competitions",
                    "Indoor game competitions",
                    "ALL BENGAL SIT AND DRAW COMPETITION",
                    "Drawing/painting and handicrafts exhibitions",
                    "Cultural programs with eminent personalities",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Initiatives - Enhanced with Images */}
        <section className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 pb-4 border-b-2 border-blue-100">
              Social Initiatives
            </h2>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Text Content */}
              <div className="lg:w-2/3 prose prose-lg text-gray-700 space-y-6">
                <p>
                  {" "}
                  Every year on{" "}
                  <span className="font-semibold">21st March</span>, the solemn
                  death anniversary of our beloved Founder, Mrs. Manimala
                  Majumdar, our school honors her legacy through an act of
                  compassion. On this day, we organize a large-scale
                  distribution of essential food items—such as rice, pulses,
                  vegetables, and other daily necessities—to individuals and
                  families in need. This initiative, however, is not limited to
                  a single annual event. With unwavering commitment, we continue
                  our outreach efforts throughout the year, ensuring consistent
                  support for the underprivileged in our community.{" "}
                </p>{" "}
                <p>
                  {" "}
                  In alignment with this mission, we have founded the{" "}
                  <span className="font-semibold">M.M. CHARITABLE GROUP</span>
                  a collective of nearly 35 generous members from India and
                  overseas. This group contributes selflessly toward the
                  sponsorship for raw food materials, educational resources like
                  books and notebooks, clothing, blankets, mosquito nets, and
                  more. Their support becomes especially vital during times of
                  crisis, such as natural disasters, when immediate aid is
                  required.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Looking ahead, we are actively working on introducing
                  structured education programs aimed at both adults and
                  children who live below the poverty line. Our goal is not only
                  to provide short-term relief but also to foster long-term
                  change by empowering individuals through access to knowledge,
                  skills, and opportunities for a better life.{" "}
                </p>
              </div>

              {/* Enhanced Image Gallery */}
              <div className="lg:w-1/3 w-full">
                {/* Large First Image */}
                <div
                  className="relative mb-4 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => openModal(charityImages[0])}
                >
                  <img
                    src={charityImages[0].src}
                    alt={charityImages[0].alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <FiZoomIn className="text-white text-2xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>

                {/* Smaller Subsequent Images */}
                <div className="grid grid-cols-2 gap-4">
                  {charityImages.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
                      onClick={() => openModal(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Click on images to view larger
                </p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: "35+", label: "Charitable Group Members" },
                { value: "Annual", label: "Food Distribution" },
                { value: "200+", label: "Families Helped" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-xl text-center shadow-sm"
                >
                  <p className="text-4xl font-bold text-blue-700 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-yellow-300 text-3xl"
                >
                  <FiX />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                <p className="text-white text-center mt-4">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Leadership Messages - Enhanced */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center ">
            From Our Leadership
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* President */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-800 p-4 text-white">
                <h3 className="text-xl font-bold text-center ">
                  PRESIDENT'S <br/> MESSAGE
                </h3>
              </div>
              <div className="p-6">
                <p className="italic text-gray-600 text-center mb-4">
                  Dr. Probal Kumar Majumdar
                </p>
                <div className="prose text-gray-700 space-y-4">
                  <p className="italic">
                    "We believe education is the manifestation of perfection
                    already in men. Education should be man making, life giving
                    and character-building. We give all our efforts not only to
                    make our students literate but provide true education which
                    is the complete development of a person."
                  </p>
                  <p className="italic">
                    "Our mission is to impart true education to students from
                    all class, creed and caste, rich or poor to help them become
                    complete human beings. Literacy teaches us 'how' to read and
                    write and education teaches us 'what' to read and write."
                  </p>
                </div>
              </div>
            </div>

            {/* Principal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-800 p-4 text-white">
                <h3 className="text-xl font-bold text-center ">
                  PRINCIPAL'S <br/>  MESSAGE
                </h3>
              </div>
              <div className="p-6">
                <p className="italic text-gray-600 text-center mb-4">
                  Mr. Swarnadip Majumdar
                </p>
                <div className="prose text-gray-700 space-y-4">
                  <p className="italic">
                    "Being the Principal of THE NEW HOLY CHILD SCHOOL, I am
                    overwhelmed to announce our journey since 2008. Despite
                    losing our Founder Mrs. Manimala Majumdar, we continue to
                    fly high with blessings and support from all."
                  </p>
                  <p className="italic">
                    "We dream of an enormous and magnificent School, Hostel &
                    Day-Boarding with all modern facilities within a few years,
                    requiring your whole-hearted cooperation for a better future
                    of students & institution."
                  </p>
                </div>
              </div>
            </div>

            {/* Deputy Principal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-800 p-4 text-white">
                <h3 className="text-xl font-bold text-center ">
                  DEPUTY PRINCIPAL'S <br/>  MESSAGE
                </h3>
              </div>
              <div className="p-6">
                <p className="italic text-gray-600 text-center mb-4">
                  Miss Rama Mukherjee
                </p>
                <div className="prose text-gray-700 space-y-4">
                  <p className="italic">
                    "After 48 years in education, I've learned that along with
                    education, discipline and good manners are vital for
                    building a strong foundation. A child succeeds when
                    maintaining positive attitude towards teachers, parents and
                    others."
                  </p>
                  <p className="italic">
                    "Proper thinking, talking, punctuality, discipline,
                    dedication and focus on future with honesty are must for
                    development. We expect guardians' cooperation to lead
                    students to success."
                  </p>
                </div>
              </div>
            </div>

            {/* Assitant principal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-800 p-4 text-white">
                <h3 className="text-xl font-bold text-center ">
                ASSISTANT PRINCIPAL'S <br/> MESSAGE
                </h3>
              </div>
              <div className="p-6">
                <p className="italic text-gray-600 text-center mb-4">
                Mrs. Basanti Majumdar
                </p>
                <div className="prose text-gray-700 space-y-4">
                <p className="italic">
            "Our school is more than a place of learning - it's where students, 
            teachers and staff create a supportive, healthy environment of education..."
          </p>
          <p className="italic">
            "We extend heartfelt gratitude to parents and staff whose support 
            has helped us achieve our respected position in society."
          </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Enhanced */}
        <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center ">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-100 p-3 rounded-full">
                    <svg
                      className="w-8 h-8 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center ">
                  Our Mission
                </h3>
                <p className="text-center text-gray-700">
                  To motivate students from all classes, creeds, casts, rich or
                  poor to educate themselves to stand high in society and spread
                  knowledge among all.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-100 p-3 rounded-full">
                    <svg
                      className="w-8 h-8 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center ">
                  Our Vision
                </h3>
                <p className="text-center text-gray-700">
                  To set all students on their path without barriers. They
                  should overcome struggles to stand freely, pull up others and
                  contribute in nation-building. Our motto is to impart
                  knowledge, good manners and optimistic life views.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
