import React from "react";
import bannerImage from "../assets/school.jpeg";
import ach from "../assets/ach.jpeg";

const AboutUs = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">THE NEW HOLY CHILD SCHOOL</h1>
          <p className="text-xl text-yellow-300 ">"LET THERE BE LIGHT ON EARTH"</p>
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
                The New Holy Child School was established on <span className="font-semibold text-blue-700">16th April 2008</span> by <span className="font-semibold text-blue-700">Mrs. Manimala Majumdar</span>, who passed away on 21st March 2010. It is a Temple of Learning in the truest sense of the term, with the sole purpose of spreading education through qualified teachers dedicated to rendering service for the proper development of students.
              </p>
              <p>
                The Managing Committee is enriched by personalities like Scientists, Professors, Doctors, Teachers, Lawyers, and Educationalists who are vigilant in maintaining proper discipline, academic standards, and humane qualities.
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
                  <span className="border-b-2 border-yellow-400 pb-1">Facilities Include</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Separate classrooms with digital and audio-visual facilities",
                    "Separate washrooms for girls, boys, and staff",
                    "Canteen and front desk office",
                    "Office, staff room, sick room, conference room",
                    "Computer lab and science laboratory",
                    "Library and yoga/dance/karate spaces",
                    "Newly built SAI Auditorium and play house",
                    "Indoor games facilities",
                    "CCTV monitoring with mic for entire premises",
                    "24 hours security and own Car pool service"
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
                  <span className="border-b-2 border-yellow-400 pb-1">Additional Features</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Attached tutorial (M.M. Tutorial)",
                    "Cultural and physical fitness academy (SU SWARNA CULTURAL ACADEMY)",
                    "Vocational computer centre",
                    "Girls-Boys Scout Band",
                    "School canteen and stationary system",
                    "Computer laboratory for both Juniors and Seniors",
                    "Science and general Laboratories"
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
                We conduct four main examinations: <span className="font-semibold">1st Assessment (20 marks)</span>, <span className="font-semibold">Half Yearly (50 marks)</span>, <span className="font-semibold">2nd Assessment (20 marks)</span>, and <span className="font-semibold">Annual examination (50 marks)</span> up to class VIII. For classes IX to XII, we follow the board pattern.
              </p>
              <p>
                Along with regular studies, students prepare projects and crafts which are reflected in report cards along with co-curricular examinations like Yoga, Drawing, PT, Spelling, dictation, Reading and Oral tests. We also conduct internal competitions in Handwriting, Recitation, Drawing, Dance, Debate, and Extempore.
              </p>
              <p>
                <span className="font-semibold">Weekly PT and Yoga Classes</span> are compulsory, with examinations conducted. We have WhatsApp groups for all separate classes to share educational and co-curricular schedules.
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
                  <span className="border-b-2 border-yellow-400 pb-1">M.M. TUTORIAL</span>
                </h3>
                <div className="prose text-gray-700 space-y-4">
                  <p>
                    Conducted from <span className="font-semibold">3:10pm to 5:10pm (Monday to Friday)</span> with separate faculties for each subject.
                  </p>
                  <p>
                    We help board candidates (X & XII) solve previous board papers, complete assignments and projects, and provide notes and examinations for better preparation.
                  </p>
                  <p>
                    We also coach college students (B.A, B.COM, B.SC, B.TS, Psychology, English honours, Accountancy) from Calcutta University and open universities like IGNOU.
                  </p>
                </div>
              </div>

              {/* SU-SWARNA CULTURAL ACADEMY */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-blue-700 mb-4 ">
                  <span className="border-b-2 border-yellow-400 pb-1">SU-SWARNA CULTURAL ACADEMY</span>
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Drawing/Painting",
                      items: "Pencil sketch, Pastel color, Water color, Oil color, Pen sketch, Charcoal sketch"
                    },
                    {
                      title: "Dance",
                      items: "Rabindra Nritya, Bharatanatyam, Kathak, Folk and Creative"
                    },
                    {
                      title: "Computer",
                      items: "CITA, DITA, ADITA, ORACLE, DTP, C, C++, JAVA, AWD"
                    },
                    {
                      title: "Karate",
                      items: "Our students have achieved Gold in School Games, District, State, National, and International levels"
                    }
                  ].map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-blue-600">{item.title}:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 pb-4 border-b-2 border-blue-100 ">
              Student Achievements
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <ul className="space-y-4">
                  {[
                    "100% pass rate in Board Examinations (X & XII) with higher first division",
                    "Two-time Winner in STATE LEVEL QUIZ COMPETITION (Byju's)",
                    "Two-time Winner in STATE LEVEL SPELLING COMPETITION (Spell Bee)",
                    "Top positions in ALL BENGAL SIT AND DRAW COMPETITION",
                    "Multiple dance competition prizes and stage performances",
                    "Football tournament wins including NHCS CUP 2024 (Senior & Junior)",
                    "Karate achievements:",
                    "STATE CHAMPION in KICK BOXING",
                    "Champions in ARCHERY at District, State, and National levels",
                    "Champions in BADMINTON at State, National, and International levels"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-700 rounded-full p-1 mr-3 mt-1 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="ml-8 mt-4">
                  <ul className="space-y-2">
                    {[
                      "Three times GOLD in INTERNATIONAL KARATE CHAMPIONSHIP",
                      "Four times NATIONAL CHAMPION",
                      "Three times STATE CHAMPION",
                      "Many BLACK BELT HOLDER STUDENTS"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <img 
                  src={ach} 
                  alt="Student Achievements" 
                  className="rounded-lg shadow-md object-cover h-full max-h-96 w-auto"
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
                  <span className="border-b-2 border-yellow-400 pb-1">Annual Celebrations</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Saraswati Puja, Ganesh Chaturthi",
                    "Republic Day and Independence Day with Road Rally, Processions, Tableau shows",
                    "Rabindra Nazrul Jayanti, Foundation Day",
                    "Vidya Sagar Jayanti, Protagonist Day",
                    "World Yoga Day, World Science Day, Green Day",
                    "Rath Yatra, Jannasthami with Jiulan",
                    "Christmas Day, Sports Day",
                    "Fete cum Exhibitions, Annual Cultural Meet",
                    "Picnic, Excursion, School Magazine publication"
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
                  <span className="border-b-2 border-yellow-400 pb-1">Special Programs</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Founder's Cup (Inter-class Football and Cricket Tournament)",
                    "Science and Geography Exhibitions",
                    "Essay writing competitions",
                    "Indoor game competitions",
                    "ALL BENGAL SIT AND DRAW COMPETITION",
                    "Drawing/painting and handicrafts exhibitions",
                    "Cultural programs with eminent personalities"
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

        {/* Social Initiatives - Enhanced */}
        <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 pb-4 border-b-2 border-blue-100 ">
              Social Initiatives
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Every year on <span className="font-semibold">21st March</span> (Death Anniversary of Founder Mrs. Manimala Majumdar), the school distributes Rice, Pulses, Vegetables and other food materials to needy people. We continue this contribution throughout the year.
              </p>
              <p>
                We have established the <span className="font-semibold">M.M. CHARITABLE GROUP</span> where about 35 members (from India and abroad) contribute to sponsoring raw food materials, books, copies, clothes, blankets, mosquito nets and more for financially backward people. We also contribute during disasters.
              </p>
              <p>
                We are working to introduce education for adults and children below the poverty line.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Messages - Enhanced */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center ">
            From Our Leadership
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* President */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-800 p-4 text-white">
                <h3 className="text-xl font-bold text-center ">PRESIDENT'S MESSAGE</h3>
              </div>
              <div className="p-6">
                <p className="italic text-gray-600 text-center mb-4">Dr. Probal Kumar Majumdar</p>
                <div className="prose text-gray-700 space-y-4">
                  <p className="italic">
                    "We believe education is the manifestation of perfection already in men. Education should be man making, life giving and character-building. We give all our efforts not only to make our students literate but provide true education which is the complete development of a person."
                  </p>
                  <p className="italic">
                    "Our mission is to impart true education to students from all class, creed and caste, rich or poor to help them become complete human beings. Literacy teaches us 'how' to read and write and education teaches us 'what' to read and write."
                  </p>
                </div>
              </div>
            </div>

            {/* Principal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-800 p-4 text-white">
                <h3 className="text-xl font-bold text-center ">PRINCIPAL'S MESSAGE</h3>
              </div>
              <div className="p-6">
                <p className="italic text-gray-600 text-center mb-4">Mr. Swarnadip Majumdar</p>
                <div className="prose text-gray-700 space-y-4">
                  <p className="italic">
                    "Being the Principal of THE NEW HOLY CHILD SCHOOL, I am overwhelmed to announce our journey since 2008. Despite losing our Founder Mrs. Manimala Majumdar, we continue to fly high with blessings and support from all."
                  </p>
                  <p className="italic">
                    "We dream of an enormous and magnificent School, Hostel & Day-Boarding with all modern facilities within a few years, requiring your whole-hearted cooperation for a better future of students & institution."
                  </p>
                </div>
              </div>
            </div>

            {/* Deputy Principal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-800 p-4 text-white">
                <h3 className="text-xl font-bold text-center ">DEPUTY PRINCIPAL'S MESSAGE</h3>
              </div>
              <div className="p-6">
                <p className="italic text-gray-600 text-center mb-4">Miss Rama Mukherjee</p>
                <div className="prose text-gray-700 space-y-4">
                  <p className="italic">
                    "After 48 years in education, I've learned that along with education, discipline and good manners are vital for building a strong foundation. A child succeeds when maintaining positive attitude towards teachers, parents and others."
                  </p>
                  <p className="italic">
                    "Proper thinking, talking, punctuality, discipline, dedication and focus on future with honesty are must for development. We expect guardians' cooperation to lead students to success."
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
                    <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center ">
                  Our Mission
                </h3>
                <p className="text-center text-gray-700">
                  To motivate students from all classes, creeds, casts, rich or poor to educate themselves to stand high in society and spread knowledge among all.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center ">
                  Our Vision
                </h3>
                <p className="text-center text-gray-700">
                  To set all students on their path without barriers. They should overcome struggles to stand freely, pull up others and contribute in nation-building. Our motto is to impart knowledge, good manners and optimistic life views.
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