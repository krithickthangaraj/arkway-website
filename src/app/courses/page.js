"use client";
import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const courseDomains = [
  {
    name: 'Upskilling',
    courses: [
      { title: 'Leadership Essentials', desc: 'Develop leadership skills for modern workplaces.', duration: '6 weeks', amount: '₹4,999', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
      { title: 'Business Communication', desc: 'Master effective communication in business.', duration: '4 weeks', amount: '₹3,499', img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    name: 'Webinars',
    courses: [
      { title: 'Study Abroad Q&A', desc: 'Live sessions with global education experts.', duration: '2 hours', amount: 'Free', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
      { title: 'Industry Trends', desc: 'Stay updated with the latest in your field.', duration: '1.5 hours', amount: 'Free', img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    name: 'Career Development',
    courses: [
      { title: 'Resume Building', desc: 'Craft a winning resume for your dream job.', duration: '3 weeks', amount: '₹2,999', img: 'https://images.unsplash.com/photo-1515169067865-5387a5b0a3a6?auto=format&fit=crop&w=400&q=80' },
      { title: 'Interview Skills', desc: 'Ace your interviews with confidence.', duration: '2 weeks', amount: '₹2,499', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    name: 'Skill Development',
    courses: [
      { title: 'Critical Thinking', desc: 'Sharpen your analytical and problem-solving skills.', duration: '4 weeks', amount: '₹3,999', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
      { title: 'Time Management', desc: 'Boost productivity with proven strategies.', duration: '2 weeks', amount: '₹2,499', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    name: 'Technical',
    courses: [
      { title: 'Power BI', desc: 'Data visualization and business intelligence.', duration: '5 weeks', amount: '₹5,999', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80' },
      { title: 'Python Programming', desc: 'Learn Python from scratch to advanced.', duration: '8 weeks', amount: '₹7,499', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' },
      { title: 'Excel for Professionals', desc: 'Master Excel for business and analytics.', duration: '3 weeks', amount: '₹3,999', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
      { title: 'Web Development', desc: 'Build modern websites and web apps.', duration: '10 weeks', amount: '₹8,999', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80' },
    ],
  },
];

export default function CoursesPage() {
  const [activeDomain, setActiveDomain] = useState(courseDomains[0].name);
  const current = courseDomains.find(d => d.name === activeDomain);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-blue-700 font-semibold text-lg hover:underline mb-8">
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </a>
        <h1 className="text-5xl font-extrabold text-center mb-8 tracking-tight text-blue-700 drop-shadow-sm">Our Courses</h1>
        {/* Domain Navbar */}
        <nav className="flex justify-center gap-4 md:gap-8 mb-12 border-b border-gray-200 pb-2">
          {courseDomains.map(domain => (
            <button
              key={domain.name}
              className={`px-4 py-2 text-lg font-semibold rounded-t-lg transition-all duration-200
                ${activeDomain === domain.name ? 'text-blue-700 bg-white shadow font-bold border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
              style={{ outline: 'none' }}
              onClick={() => setActiveDomain(domain.name)}
            >
              {domain.name}
            </button>
          ))}
        </nav>
        {/* Courses List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {current.courses.map((course, i) => (
            <div
              key={course.title}
              className="group bg-white/70 backdrop-blur-lg border border-blue-100 p-8 rounded-3xl shadow-2xl flex flex-col items-start transition-transform duration-300 hover:scale-[1.03] hover:shadow-3xl relative overflow-hidden hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100"
              style={{ minHeight: '260px' }}
            >
              <img src={course.img} alt={course.title} className="w-full h-40 object-cover rounded-2xl mb-4 shadow-md transition-transform duration-300 group-hover:scale-105" />
              <h2 className="text-2xl font-bold mb-2 text-blue-700 group-hover:tracking-wider transition-all duration-300 drop-shadow-sm">{course.title}</h2>
              <p className="text-base text-gray-700 font-medium mb-4 max-w-md">{course.desc}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                <span className="inline-block bg-blue-50 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm shadow-sm border border-blue-100">Duration: {course.duration}</span>
                <span className="inline-block bg-blue-700 text-white font-semibold px-4 py-1 rounded-full text-sm shadow-sm border border-blue-700">{course.amount}</span>
              </div>
              <span className="absolute right-6 bottom-6 text-blue-100 text-6xl font-black opacity-0 group-hover:opacity-20 transition-all duration-500 select-none pointer-events-none">{i+1}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 