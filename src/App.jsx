import React, { useState } from 'react';
import { Menu, X, ChevronDown, Calendar, Users, Code, Trophy, Clock, MapPin, Mail, Phone } from 'lucide-react';

// About Component
const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wide">About the Event</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Where innovation meets execution.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg mb-6">
              DevHack24 is the premier event for developers of all skill levels organized by the Programming Club at Darshan University. Here students come together with real-world needs and to build creative technology solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Code className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Innovation First</h3>
                  <p className="text-gray-600">Build a cutting-edge project centered on real-world problems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Users className="text-cyan-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Community Driven</h3>
                  <p className="text-gray-600">Connect with like-minded developers, mentors, and tech enthusiasts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-xl p-8 flex items-center justify-center h-48">
              <Code className="text-cyan-400" size={80} />
            </div>
            <div className="bg-gray-300 rounded-xl h-48 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image Placeholder</span>
            </div>
            <div className="bg-gray-300 rounded-xl h-48 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image Placeholder</span>
            </div>
            <div className="bg-cyan-500 rounded-xl p-6 flex flex-col justify-center h-48">
              <p className="text-white text-lg font-semibold mb-2">"Best hackathon experience ever!"</p>
              <p className="text-cyan-100 text-sm">- Previous Participant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Timeline Component
const Timeline = () => {
  const events = [
    {
      title: "Opening Ceremony",
      time: "Nov 15, 09:00 AM",
      description: "Kickoff speeches, rules introduction, and team formation.",
      icon: "🎤",
      align: "left"
    },
    {
      title: "Hacking Begins",
      time: "Nov 15, 11:00 AM",
      description: "Start your engines! 48 hours of non-stop innovation starts now.",
      icon: "💻",
      align: "right"
    },
    {
      title: "Mentorship Sessions",
      time: "Nov 16, 02:00 PM",
      description: "Get guidance from industry experts and refine your solutions.",
      icon: "👨‍🏫",
      align: "left"
    },
    {
      title: "Closing & Awards",
      time: "Nov 17, 05:00 PM",
      description: "Demos, judging, and crowning the winners of HackTheFuture 2024.",
      icon: "🏆",
      align: "right"
    }
  ];

  return (
    <section id="timeline" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Timeline</h2>
          <p className="text-gray-600">Three days of intense coding, learning, and fun. Here is what to expect.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-16">
            {events.map((event, index) => (
              <div key={index} className={`flex items-center ${event.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`w-5/12 ${event.align === 'left' ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-cyan-500 font-semibold mb-3">{event.time}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>

                {/* Center Icon */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-16 h-16 bg-white border-4 border-cyan-400 rounded-full flex items-center justify-center text-2xl z-10 shadow-lg">
                    {event.icon}
                  </div>
                </div>

                {/* Empty Side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Prizes Component
const Prizes = () => {
  const prizes = [
    {
      place: "2nd Place",
      amount: "₹15,000",
      icon: <Trophy className="text-gray-500" size={32} />,
      bgColor: "bg-gray-200",
      textColor: "text-gray-900",
      border: "border-gray-200",
      benefits: [
        "Certificate of Excellence",
        "Tech Swag",
        "Internship Opportunities"
      ]
    },
    {
      place: "Winner",
      amount: "₹25,000",
      icon: <Trophy className="text-yellow-700" size={32} />,
      bgColor: "bg-yellow-400",
      textColor: "text-white",
      border: "",
      gradient: true,
      benefits: [
        "Ultimate Dev Bundle",
        "Internship Opportunities",
        "VC Consultation",
        "Featured Blog Post"
      ]
    },
    {
      place: "3rd Place",
      amount: "₹10,000",
      icon: <Trophy className="text-orange-600" size={32} />,
      bgColor: "bg-orange-200",
      textColor: "text-gray-900",
      border: "border-gray-200",
      benefits: [
        "Certificate of Achievement",
        "Tech Goodies",
        "Workshop Access"
      ]
    }
  ];

  return (
    <section id="prizes" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Prizes & Rewards</h2>
          <p className="text-gray-600">Code your way to winning amazing rewards!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`${
                prize.gradient
                  ? 'bg-gradient-to-br from-cyan-500 to-blue-600 transform md:-translate-y-4 shadow-xl'
                  : `bg-white border-2 ${prize.border}`
              } rounded-xl p-8 text-center hover:shadow-lg transition`}
            >
              <div className={`w-16 h-16 ${prize.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {prize.icon}
              </div>
              <h3 className={`text-xl font-bold ${prize.gradient ? 'text-white' : 'text-gray-900'} mb-2`}>
                {prize.place}
              </h3>
              <p className={`text-${prize.gradient ? '5' : '4'}xl font-bold ${prize.gradient ? 'text-white' : 'text-gray-900'} mb-4`}>
                {prize.amount}
              </p>
              <ul className={`${prize.gradient ? 'text-white' : 'text-gray-600'} text-sm space-y-2`}>
                {prize.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Who can participate?",
      answer: "All students from Darshan University are welcome! Whether you're a beginner or experienced developer, we encourage you to join."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, DevHack24 is completely free to attend! We believe in making innovation accessible to everyone."
    },
    {
      question: "Will travel be reimbursed?",
      answer: "Since the event is at Darshan University campus, travel reimbursement is not provided. However, meals and refreshments will be provided throughout the event."
    },
    {
      question: "Do I need a team?",
      answer: "You can participate solo or form a team of 2-4 members. We'll also have a team formation session during the opening ceremony!"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function HackathonWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="./src/assets/light_without_background.png" alt="Programming Club" className="h-20 w-20" />
              <span className="font-bold text-lg text-gray-900">DevHack24</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-cyan-500 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-cyan-500 transition">About</a>
              <a href="#timeline" className="text-gray-700 hover:text-cyan-500 transition">Timeline</a>
              <a href="#prizes" className="text-gray-700 hover:text-cyan-500 transition">Prizes</a>
              <a href="#faq" className="text-gray-700 hover:text-cyan-500 transition">FAQ</a>
              <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition">
                Register Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-cyan-500">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-cyan-500">About</a>
              <a href="#timeline" className="block text-gray-700 hover:text-cyan-500">Timeline</a>
              <a href="#prizes" className="block text-gray-700 hover:text-cyan-500">Prizes</a>
              <a href="#faq" className="block text-gray-700 hover:text-cyan-500">FAQ</a>
              <button className="w-full bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600">
                Register Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-cyan-50 rounded-lg px-4 py-2 inline-block mb-6">
            <span className="text-cyan-600 text-sm font-medium">📅 November 15-16, 2024</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900">Code.</span><br />
                <span className="text-cyan-500">Innovate.</span><br />
                <span className="text-gray-900">Win.</span>
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Join 100+ developers at the Darshan University Tech Hub for 24 hours of creation, collaboration, and competition.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition font-medium">
                  Register Now
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-cyan-500 hover:text-cyan-500 transition font-medium">
                  Problem Statements
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-300 rounded-xl h-80 flex items-center justify-center">
                <span className="text-gray-500">Hero Image Placeholder</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-gray-900 text-white px-4 py-2 rounded-lg">
                <p className="text-sm">Registration Ongoing</p>
                <p className="text-xs text-cyan-400">TechNovate2024</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div>
              <h3 className="text-4xl font-bold text-gray-900">24</h3>
              <p className="text-gray-500 mt-1">HOURS OF HACKING</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-500 mt-1">PARTICIPANTS</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">₹50k</h3>
              <p className="text-gray-500 mt-1">PRIZE POOL</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900">20+</h3>
              <p className="text-gray-500 mt-1">PROJECTS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Component Sections */}
      <About />
      <Timeline />
      <Prizes />

      {/* Rules Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Rules & Guidelines</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <Users className="text-cyan-500 mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Team Size</h3>
              <p className="text-gray-600 text-sm">Teams can have 2-4 members. Solo participation is also welcome!</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <Calendar className="text-cyan-500 mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Event Goals</h3>
              <p className="text-gray-600 text-sm">A project must be built during the hackathon from scratch. Pre-built code is not allowed.</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <Code className="text-cyan-500 mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Judging</h3>
              <p className="text-gray-600 text-sm">Projects will be evaluated based on innovation, execution, and presentation.</p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              <Trophy className="text-cyan-500 mb-4" size={32} />
              <h3 className="font-bold text-gray-900 mb-2">Code of Conduct</h3>
              <p className="text-gray-600 text-sm">Respect, collaboration, and integrity are expected from all participants.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://i.postimg.cc/t4sShm8P/image.png" alt="Programming Club" className="h-10 w-10" />
                <span className="font-bold text-lg">DevHack24</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building the next wave of tech innovation at Darshan University.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-cyan-400">About Event</a></li>
                <li><a href="#timeline" className="hover:text-cyan-400">Schedule</a></li>
                <li><a href="#prizes" className="hover:text-cyan-400">Prizes</a></li>
                <li><a href="#faq" className="hover:text-cyan-400">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>progclub@darshan.ac.in</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Rajkot, Gujarat, IN</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe for event updates and announcements.</p>
              <button className="w-full bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition">
                Subscribe
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Programming Club - Darshan University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}