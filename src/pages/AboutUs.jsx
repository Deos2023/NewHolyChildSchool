import React from 'react';
import bannerImage from "../assets/school.jpeg"

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

<div className="w-full h-64 overflow-hidden mb-8"> {/* Adjust h-64 to your preferred height */}
        <img 
          src={bannerImage} 
          alt="New Holy Child School Banner" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl  text-blue-800 mb-4 font-serif">THE NEW HOLY CHILD SCHOOL</h1>
        <p className="text-lg text-gray-600">"LET THERE BE LIGHT ON EARTH"</p>
      </header>

      {/* School Overview */}
      <section className="mb-12">
        <h2 className="text-3xl  text-blue-700 mb-6 border-b-2 border-blue-200 pb-2 font-serif ">About Our Institution</h2>
        <div className="space-y-4">
          <p>
            The New Holy Child School was established on 16th April 2008 by Mrs. Manimala Majumdar, who passed away on 21st March 2010. It is a Temple of Learning in the truest sense of the term, with the sole purpose of spreading education through qualified teachers dedicated to rendering service for the proper development of students.
          </p>
          <p>
            The Managing Committee is enriched by personalities like Scientists, Professors, Doctors, Teachers, Lawyers, and Educationalists who are vigilant in maintaining proper discipline, academic standards, and humane qualities.
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="mb-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-3xl  text-blue-700 mb-6 border-b-2 border-blue-200 pb-2 font-serif">Our Infrastructure</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-blue-600 mb-3 font-serif">Facilities Include:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Separate classrooms with digital and audio-visual facilities</li>
              <li>Separate washrooms for girls, boys, and staff</li>
              <li>Canteen and front desk office</li>
              <li>Office, staff room, sick room, conference room</li>
              <li>Computer lab and science laboratory</li>
              <li>Library and yoga/dance/karate spaces</li>
              <li>Newly built SAI Auditorium and play house</li>
              <li>Indoor games facilities</li>
              <li>CCTV monitoring with mic for entire premises</li>
              <li>24 hours security and own Car pool service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-blue-600 mb-3 font-serif">Additional Features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Attached tutorial (M.M. Tutorial)</li>
              <li>Cultural and physical fitness academy (SU SWARNA CULTURAL ACADEMY)</li>
              <li>Vocational computer centre</li>
              <li>Girls-Boys Scout Band</li>
              <li>School canteen and stationary system</li>
              <li>Computer laboratory for both Juniors and Seniors</li>
              <li>Science and general Laboratories</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Educational Structure */}
      <section className="mb-12">
        <h2 className="text-3xl  text-blue-700 mb-6 border-b-2 border-blue-200 pb-2 font-serif">Educational Structure</h2>
        <div className="space-y-4">
          <p>
            We conduct four main examinations: 1st Assessment (20 marks), Half Yearly (50 marks), 2nd Assessment (20 marks), and Annual examination (50 marks) up to class VIII. For classes IX to XII, we follow the board pattern.
          </p>
          <p>
            Along with regular studies, students prepare projects and crafts which are reflected in report cards along with co-curricular examinations like Yoga, Drawing, PT, Spelling, dictation, Reading and Oral tests. We also conduct internal competitions in Handwriting, Recitation, Drawing, Dance, Debate, and Extempore.
          </p>
          <p>
            Weekly PT and Yoga Classes are compulsory, with examinations conducted. We have WhatsApp groups for all separate classes to share educational and co-curricular schedules.
          </p>
        </div>
      </section>

      {/* Affiliated Programs */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-3xl  text-blue-700 mb-6 border-b-2 border-blue-200 pb-2 font-serif">Our Affiliated Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* M.M. Tutorial */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl  text-blue-600 mb-3 font-serif">M.M. TUTORIAL</h3>
            <p className="mb-3">Conducted from 3:10pm to 5:10pm (Monday to Friday) with separate faculties for each subject.</p>
            <p className="mb-3">We help board candidates (X & XII) solve previous board papers, complete assignments and projects, and provide notes and examinations for better preparation.</p>
            <p>We also coach college students (B.A, B.COM, B.SC, B.TS, Psychology, English honours, Accountancy) from Calcutta University and open universities like IGNOU.</p>
          </div>

          {/* SU-SWARNA CULTURAL ACADEMY */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl  text-blue-600 mb-3 font-serif">SU-SWARNA CULTURAL ACADEMY</h3>
            <ul className="space-y-2">
              <li><strong>Drawing/Painting:</strong> Pencil sketch, Pastel color, Water color, Oil color, Pen sketch, Charcoal sketch</li>
              <li><strong>Dance:</strong> Rabindra Nritya, Bharatanatyam, Kathak, Folk and Creative</li>
              <li><strong>Computer:</strong> CITA, DITA, ADITA, ORACLE, DTP, C, C++, JAVA, AWD</li>
              <li><strong>Karate:</strong> Our students have achieved Gold in School Games, District, State, National, and International levels</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="mb-12">
        <h2 className="text-3xl  text-blue-700 mb-6 border-b-2 border-blue-200 pb-2 font-serif">Student Achievements</h2>
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>100% pass rate in Board Examinations (X & XII) with higher first division</li>
            <li>Two-time Winner in STATE LEVEL QUIZ COMPETITION (Byju's)</li>
            <li>Two-time Winner in STATE LEVEL SPELLING COMPETITION (Spell Bee)</li>
            <li>Top positions in ALL BENGAL SIT AND DRAW COMPETITION</li>
            <li>Multiple dance competition prizes and stage performances</li>
            <li>Football tournament wins including NHCS CUP 2024 (Senior & Junior)</li>
            <li>Karate achievements:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Three times GOLD in INTERNATIONAL KARATE CHAMPIONSHIP</li>
                <li>Four times NATIONAL CHAMPION</li>
                <li>Three times STATE CHAMPION</li>
                <li>Many BLACK BELT HOLDER STUDENTS</li>
              </ul>
            </li>
            <li>STATE CHAMPION in KICK BOXING</li>
            <li>Champions in ARCHERY at District, State, and National levels</li>
            <li>Champions in BADMINTON at State, National, and International levels</li>
          </ul>
        </div>
      </section>

      {/* Celebrations and Events */}
      <section className="mb-12 bg-green-50 p-6 rounded-lg">
        <h2 className="text-3xl  text-green-700 mb-6 border-b-2 border-green-200 pb-2 font-serif">Celebrations & Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-green-600 mb-3 font-serif">Annual Celebrations:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Saraswati Puja, Ganesh Chaturthi</li>
              <li>Republic Day and Independence Day with Road Rally, Processions, Tableau shows</li>
              <li>Rabindra Nazrul Jayanti, Foundation Day</li>
              <li>Vidya Sagar Jayanti, Protagonist Day</li>
              <li>World Yoga Day, World Science Day, Green Day</li>
              <li>Rath Yatra, Jannasthami with Jiulan</li>
              <li>Christmas Day, Sports Day</li>
              <li>Fete cum Exhibitions, Annual Cultural Meet</li>
              <li>Picnic, Excursion, School Magazine publication</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-green-600 mb-3 font-serif">Special Programs:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Founder's Cup (Inter-class Football and Cricket Tournament)</li>
              <li>Science and Geography Exhibitions</li>
              <li>Essay writing competitions</li>
              <li>Indoor game competitions</li>
              <li>ALL BENGAL SIT AND DRAW COMPETITION</li>
              <li>Drawing/painting and handicrafts exhibitions</li>
              <li>Cultural programs with eminent personalities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Social Initiatives */}
      <section className="mb-12">
        <h2 className="text-3xl  text-blue-700 mb-6 border-b-2 border-blue-200 pb-2 font-serif">Social Initiatives</h2>
        <div className="space-y-4">
          <p>
            Every year on 21st March (Death Anniversary of Founder Mrs. Manimala Majumdar), the school distributes Rice, Pulses, Vegetables and other food materials to needy people. We continue this contribution throughout the year.
          </p>
          <p>
            We have established the M.M. CHARITABLE GROUP where about 35 members (from India and abroad) contribute to sponsoring raw food materials, books, copies, clothes, blankets, mosquito nets and more for financially backward people. We also contribute during disasters.
          </p>
          <p>
            We are working to introduce education for adults and children below the poverty line.
          </p>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="mb-12">
        <h2 className="text-3xl  text-blue-700 mb-6 border-b-2 border-blue-200 pb-2 font-serif">From Our Leadership</h2>
        
        {/* President */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl  text-blue-600 mb-2 font-serif">From PRESIDENT'S Desk</h3>
          <p className="italic mb-4">Dr. Probal Kumar Majumdar</p>
          <div className="space-y-3">
            <p>
              "We believe education is the manifestation of perfection already in men. Education should be man making, life giving and character-building. We give all our efforts not only to make our students literate but provide true education which is the complete development of a person."
            </p>
            <p>
              "Our mission is to impart true education to students from all class, creed and caste, rich or poor to help them become complete human beings. Literacy teaches us 'how' to read and write and education teaches us 'what' to read and write."
            </p>
          </div>
        </div>

        {/* Principal */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl  text-blue-600 mb-2 font-serif">From PRINCIPAL'S Desk</h3>
          <p className="italic mb-4">Mr. Swarnadip Majumdar</p>
          <div className="space-y-3">
            <p>
              "Being the Principal of THE NEW HOLY CHILD SCHOOL, I am overwhelmed to announce our journey since 2008. Despite losing our Founder Mrs. Manimala Majumdar, we continue to fly high with blessings and support from all."
            </p>
            <p>
              "We dream of an enormous and magnificent School, Hostel & Day-Boarding with all modern facilities within a few years, requiring your whole-hearted cooperation for a better future of students & institution."
            </p>
          </div>
        </div>

        {/* Deputy Principal */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl  text-blue-600 mb-2 font-serif">From DEPUTY PRINCIPAL'S Desk</h3>
          <p className="italic mb-4">Miss Rama Mukherjee</p>
          <div className="space-y-3">
            <p>
              "After 48 years in education, I've learned that along with education, discipline and good manners are vital for building a strong foundation. A child succeeds when maintaining positive attitude towards teachers, parents and others."
            </p>
            <p>
              "Proper thinking, talking, punctuality, discipline, dedication and focus on future with honesty are must for development. We expect guardians' cooperation to lead students to success."
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-12 bg-yellow-50 p-6 rounded-lg">
        <h2 className="text-3xl  text-blue-700 mb-6 border-b-2 border-blue-200 pb-2 font-serif">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl  text-blue-600 mb-3 font-serif">Our Mission</h3>
            <p>
              To motivate students from all classes, creeds, casts, rich or poor to educate themselves to stand high in society and spread knowledge among all.
            </p>
          </div>
          <div>
            <h3 className="text-xl  text-blue-600 mb-3 font-serif">Our Vision</h3>
            <p>
              To set all students on their path without barriers. They should overcome struggles to stand freely, pull up others and contribute in nation-building. Our motto is to impart knowledge, good manners and optimistic life views.
            </p>
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="text-center py-6 bg-blue-800 text-white rounded-lg">
        <p className="text-lg">THE NEW HOLY CHILD SCHOOL</p>
        <p className="mt-2">A Temple of Learning Since 2008</p>
        <p className="mt-4">"LET THERE BE LIGHT ON EARTH"</p>
      </footer> */}
    </div>
  );
};

export default AboutUs;