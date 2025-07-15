"use client";
import { ArrowRightIcon, AcademicCapIcon, GlobeAltIcon, ChatBubbleLeftRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;
    let increment = end / (duration / 16);
    let current = start;
    let raf;
    function update() {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
        raf = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    }
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return count;
}

function useTypewriter(text, speed = 60) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    let timeout;
    function type() {
      setDisplayed(text.slice(0, i + 1));
      if (i < text.length - 1) {
        i++;
        timeout = setTimeout(type, speed);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, [text, speed]);
  return displayed;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0 });
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Courses', href: '/courses' },
    { name: 'Contact', href: '#contact' },
  ];
  const linkRefs = useRef([]);
  const sectionRefs = useRef({});
  
  // Attach refs to sections for scroll detection
  useEffect(() => {
    navLinks.forEach(link => {
      const id = link.href.replace('#', '') || 'home';
      sectionRefs.current[link.name] = id === 'home' ? document.body : document.getElementById(id);
    });
  }, []);

  // Scroll detection: update active nav on section in view
  useEffect(() => {
    const handleScroll = () => {
      let found = 'Home';
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const id = link.href.replace('#', '') || 'home';
        const section = id === 'home' ? document.body : document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) { // 120px offset for navbar height
            found = link.name;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate underline bar to active link
    const idx = navLinks.findIndex(link => link.name === active);
    if (linkRefs.current[idx]) {
      const el = linkRefs.current[idx];
      setBarStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [active, menuOpen]);

  useEffect(() => {
    // Recalculate on window resize
    function onResize() {
      const idx = navLinks.findIndex(link => link.name === active);
      if (linkRefs.current[idx]) {
        const el = linkRefs.current[idx];
        setBarStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      }
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active, menuOpen]);

  function handleNavClick(name, href) {
    setActive(name);
    setMenuOpen(false);
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    // Scroll to section smoothly
    const id = href.replace('#', '') || 'home';
    const section = id === 'home' ? document.body : document.getElementById(id);
    if (section) {
      const y = id === 'home' ? 0 : section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20 relative">
        {/* Left: Company Name */}
        <a href="#" className="flex items-center gap-3 select-none">
          <img src="/logo.jpg" alt="Arkway Logo" className="h-10 w-10 rounded-lg shadow-sm object-contain bg-white" />
          <span className="text-2xl font-extrabold text-blue-700 tracking-tight">Arkway</span>
          <span className="text-2xl font-extrabold text-blue-500 tracking-wide">Educational Services</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-7 items-center relative w-fit">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              ref={el => (linkRefs.current[i] = el)}
              className={`text-lg font-medium px-2 py-1 rounded-lg relative transition-all duration-300
                ${active === link.name ? 'text-blue-700 font-bold' : 'text-gray-700'}
                hover:text-blue-600
              `}
              style={{ overflow: 'hidden' }}
              onClick={e => { e.preventDefault(); handleNavClick(link.name, link.href); }}
            >
              {link.name}
            </a>
          ))}
          {/* Animated underline bar */}
          <span
            className="absolute bottom-0 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300"
            style={{
              left: barStyle.left,
              width: barStyle.width,
              opacity: barStyle.width ? 1 : 0,
            }}
          />
        </div>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7 text-blue-600" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-blue-600" />
          )}
        </button>
      </div>
      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-card px-4 pb-4">
          <div className="flex flex-col gap-2 mt-2">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`block text-lg font-medium px-2 py-2 rounded-lg transition-all duration-300
                  ${active === link.name ? 'text-blue-700 font-bold' : 'text-gray-700'}
                  hover:text-blue-600 hover:bg-blue-50`}
                onClick={e => { e.preventDefault(); handleNavClick(link.name, link.href); setMenuOpen(false); }}
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
  const partners = useCountUp(180);
  const students = useCountUp(1000);
  const years = useCountUp(15);
  const typeText = useTypewriter('Global Education', 80);
  return (
    <section className="relative py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 animate-fadeinup w-full">
        {/* Left: Text Content */}
        <div className="flex-1 text-left md:pr-12 flex flex-col justify-center space-y-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-0 text-gray-900 leading-tight">
            Your Gateway to <br className="hidden md:block" />
            <span className="text-blue-600 relative font-black inline-flex items-center whitespace-nowrap">
              {typeText}<span className="typewriter-cursor">|</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium max-w-xl mt-8">
            Unlock your potential with Arkway’s comprehensive educational services. We connect ambitious students to world-class universities, offer expert-led professional courses, and guide you every step of the way to global success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#study-abroad" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition gap-2 group">
              Study Abroad
              <ArrowRightIcon className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#courses" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-200 to-gray-100 text-gray-900 rounded-full font-bold text-lg shadow-lg hover:from-gray-300 hover:to-gray-200 hover:text-blue-700 transition">
              Browse Courses
            </a>
          </div>
          <div className="flex gap-10 mt-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-1">{partners}+</div>
              <div className="text-gray-500 text-xs md:text-sm font-medium tracking-wide uppercase">University Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-1">{students}+</div>
              <div className="text-gray-500 text-xs md:text-sm font-medium tracking-wide uppercase">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-1">{years}+</div>
              <div className="text-gray-500 text-xs md:text-sm font-medium tracking-wide uppercase">Years Experience</div>
            </div>
          </div>
        </div>
        {/* Right: Image or Illustration */}
        <div className="flex-1 flex justify-center items-center w-full md:w-auto">
          <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-tr from-gray-100 via-blue-50 to-white flex items-center justify-center">
            <img
              src="/hero-student.jpg"
              alt="Student studying"
              className="object-cover w-full h-full rounded-3xl"
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
        <h2 className="text-4xl font-bold mb-4 text-blue-700">About Arkway</h2>
        <p className="text-lg text-gray-600 mb-6">Arkway is dedicated to empowering students and professionals to achieve their dreams. We provide personalized guidance for studying abroad, offer industry-relevant courses, and connect you to a global network of opportunities. Our mission is to make world-class education accessible and transformative for all.</p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:text-blue-600">
            <AcademicCapIcon className="w-10 h-10 text-blue-400 mb-2" />
            <span className="font-semibold text-gray-800">Expert Mentors</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:text-blue-600">
            <GlobeAltIcon className="w-10 h-10 text-blue-700 mb-2" />
            <span className="font-semibold text-gray-800">Global Reach</span>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:text-blue-600">
            <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-400 mb-2" />
            <span className="font-semibold text-gray-800">Supportive Community</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">What Our Students Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-400 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-600">
          <p className="mb-4 text-lg font-medium text-gray-700">“Arkway helped me land my dream university abroad!”</p>
          <span className="font-semibold text-blue-700">— Aisha K.</span>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-600 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400">
          <p className="mb-4 text-lg font-medium text-gray-700">“The courses are practical and the mentors are amazing.”</p>
          <span className="font-semibold text-blue-400">— Samuel O.</span>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-card border-t-4 border-blue-900 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-600">
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
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-card flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-100 hover:to-blue-200">
          <AcademicCapIcon className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="font-semibold text-2xl mb-2 text-gray-800">IELTS & TOEFL Prep</h3>
          <p className="text-gray-700 text-center">Master English proficiency exams with expert guidance.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl shadow-card flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-200 hover:to-blue-100">
          <GlobeAltIcon className="w-10 h-10 text-blue-400 mb-3" />
          <h3 className="font-semibold text-2xl mb-2 text-gray-800">Career Development</h3>
          <p className="text-gray-700 text-center">Boost your employability with our tailored programs.</p>
        </div>
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-8 rounded-2xl shadow-card flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:from-blue-700 hover:to-blue-500">
          <ArrowRightIcon className="w-10 h-10 text-white mb-3" />
          <h3 className="font-semibold text-2xl mb-2 text-white">University Application</h3>
          <p className="text-white text-center">Get step-by-step help applying to top universities worldwide.</p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a href="/courses" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition gap-2 group">
          Explore Courses
          <ArrowRightIcon className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
        </a>
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
      <ContactSection />
    </main>
  );
}
