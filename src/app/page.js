"use client";
import { ArrowRightIcon, AcademicCapIcon, GlobeAltIcon, ChatBubbleLeftRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Courses', href: '#courses' },
    { name: 'Study Abroad', href: '#study-abroad' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur border-b border-gray-200 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        {/* Left: Company Name */}
        <a href="#" className="text-2xl font-extrabold text-blue-700 tracking-tight whitespace-nowrap">
          Arkway <span className="text-orange-500">Educational Services</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-blue-700 transition px-2 py-1 rounded-lg hover:bg-blue-50"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7 text-blue-700" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-blue-700" />
          )}
        </button>
      </div>
      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-card px-4 pb-4">
          <div className="flex flex-col gap-2 mt-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-gray-700 hover:text-blue-700 transition px-2 py-2 rounded-lg hover:bg-blue-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-left md:pr-12 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-blue-900 leading-tight">
            Your Gateway to <br className="hidden md:block" />
            <span className="text-orange-500">Global Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 font-medium max-w-xl">
            Unlock your potential with our comprehensive educational services, from professional courses to study abroad programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#study-abroad" className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-full font-bold text-lg shadow-lg hover:bg-blue-900 transition">
              Study Abroad
            </a>
            <a href="#courses" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-orange-400 transition">
              Browse Courses
            </a>
          </div>
          <div className="flex gap-10 mt-2">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">180+</div>
              <div className="text-gray-600 text-sm font-medium tracking-wide uppercase">University Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">1000+</div>
              <div className="text-gray-600 text-sm font-medium tracking-wide uppercase">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">15+</div>
              <div className="text-gray-600 text-sm font-medium tracking-wide uppercase">Years Experience</div>
            </div>
          </div>
        </div>
        {/* Right: Image or Illustration */}
        <div className="flex-1 flex justify-center items-center w-full md:w-auto">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-tr from-blue-100 via-orange-100 to-white flex items-center justify-center">
            <img
              src="/hero-student.jpg"
              alt="Student studying"
              className="object-cover w-full h-full"
              style={{ filter: 'brightness(0.98) contrast(1.05)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">MEA BestFeatured is dedicated to guiding students and professionals towards their dreams. We offer expert-led courses, study abroad programs, and a supportive community to help you succeed.</p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:text-blue-700">
            <AcademicCapIcon className="w-10 h-10 text-orange-500 mb-2" />
            <span className="font-semibold text-gray-800">Expert Mentors</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:text-blue-700">
            <GlobeAltIcon className="w-10 h-10 text-blue-700 mb-2" />
            <span className="font-semibold text-gray-800">Global Reach</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:text-blue-700">
            <ChatBubbleLeftRightIcon className="w-10 h-10 text-orange-500 mb-2" />
            <span className="font-semibold text-gray-800">Supportive Community</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">What Our Students Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-orange-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-700">
          <p className="mb-4 text-lg font-medium text-gray-700">“MEA helped me land my dream university abroad!”</p>
          <span className="font-semibold text-blue-700">— Aisha K.</span>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500">
          <p className="mb-4 text-lg font-medium text-gray-700">“The courses are practical and the mentors are amazing.”</p>
          <span className="font-semibold text-orange-500">— Samuel O.</span>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-900 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-700">
          <p className="mb-4 text-lg font-medium text-gray-700">“I loved the support throughout my study abroad journey.”</p>
          <span className="font-semibold text-blue-900">— Linda M.</span>
        </div>
      </div>
    </section>
  );
}

function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Our Courses</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-8 rounded-2xl shadow-card flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-200 hover:to-orange-200">
          <AcademicCapIcon className="w-10 h-10 text-blue-700 mb-3" />
          <h3 className="font-semibold text-2xl mb-2 text-gray-800">IELTS & TOEFL Prep</h3>
          <p className="text-gray-700 text-center">Master English proficiency exams with expert guidance.</p>
        </div>
        <div className="bg-gradient-to-br from-orange-100 to-blue-100 p-8 rounded-2xl shadow-card flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:from-orange-200 hover:to-blue-200">
          <GlobeAltIcon className="w-10 h-10 text-orange-500 mb-3" />
          <h3 className="font-semibold text-2xl mb-2 text-gray-800">Career Development</h3>
          <p className="text-gray-700 text-center">Boost your employability with our tailored programs.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-700 to-orange-500 p-8 rounded-2xl shadow-card flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-800 hover:to-orange-600">
          <ArrowRightIcon className="w-10 h-10 text-white mb-3" />
          <h3 className="font-semibold text-2xl mb-2 text-white">University Application</h3>
          <p className="text-white text-center">Get step-by-step help applying to top universities worldwide.</p>
        </div>
      </div>
    </section>
  );
}

function StudyAbroadSection() {
  return (
    <section id="study-abroad" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-900">Study Abroad</h2>
        <p className="mb-6 text-lg text-gray-700">Explore opportunities to study in the UK, US, Canada, Australia, and more. Our advisors will guide you every step of the way.</p>
        <a href="#contact" className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-orange-400 transition">Speak to an Advisor</a>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Contact Us</h2>
      <form className="max-w-xl mx-auto grid gap-6 bg-gray-50 p-8 rounded-2xl shadow-card">
        <input type="text" placeholder="Your Name" className="border border-gray-200 p-4 rounded-lg focus:ring-2 focus:ring-blue-700 outline-none bg-white text-gray-800" required />
        <input type="email" placeholder="Your Email" className="border border-gray-200 p-4 rounded-lg focus:ring-2 focus:ring-blue-700 outline-none bg-white text-gray-800" required />
        <textarea placeholder="Your Message" className="border border-gray-200 p-4 rounded-lg focus:ring-2 focus:ring-blue-700 outline-none bg-white text-gray-800" rows={4} required></textarea>
        <button type="submit" className="bg-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition">Send Message</button>
      </form>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="font-sans bg-white text-gray-900 min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <CoursesSection />
      <StudyAbroadSection />
      <ContactSection />
    </main>
  );
}
