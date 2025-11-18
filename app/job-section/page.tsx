'use client';

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, ChevronRight, Menu, X } from 'lucide-react';

export default function JobPortal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Full Stack Coach",
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      salary: "$20,000 - $25,000"
    },
    {
      id: 2,
      title: "Full Time Marketer",
      company: "Udacity",
      location: "Spain, Barcelona",
      type: "Internship",
      tags: ["Marketing", "Design"],
      salary: "$20,000 - $25,000"
    },
    {
      id: 3,
      title: "Associate",
      company: "Packer",
      location: "Lucern, Switzerland",
      type: "Full-Time",
      tags: ["Development", "IT", "Senior Level", "Project M"],
      salary: "$20,000 - $25,000"
    },
    {
      id: 4,
      title: "Jr. Game Leader",
      company: "Blizzard",
      location: "Mumbai, India",
      type: "Full-Time",
      tags: ["Operations", "Senior Level", "Flexible Schedule", "Mobile B"],
      salary: "$20,000 - $25,000"
    },
    {
      id: 5,
      title: "Expert",
      company: "Discord",
      location: "California, USA",
      type: "Full-Time",
      tags: ["Operations", "Full-Time", "Senior Level", "Mobile D"],
      salary: "$20,000 - $25,000"
    }
  ];

  const categories = [
    { name: "Graphics & Design", count: 357, icon: "🎨" },
    { name: "Code & Programming", count: 312, icon: "💻" },
    { name: "Digital Marketing", count: 297, icon: "📱" },
    { name: "Video & Animation", count: 247, icon: "🎬" },
    { name: "Music & Audio", count: 204, icon: "🎵" },
    { name: "Account & Finance", count: 167, icon: "💰" },
    { name: "Health & Care", count: 125, icon: "🏥" },
    { name: "Data & Science", count: 57, icon: "📊" }
  ];

  const stats = [
    { number: "1,75,324", label: "Live Job", gradient: "from-purple-600 to-blue-500" },
    { number: "97,354", label: "Companies", gradient: "from-blue-500 to-cyan-500" },
    { number: "38,47,154", label: "Candidates", gradient: "from-cyan-500 to-green-500" },
    { number: "7,532", label: "New Jobs", gradient: "from-green-500 to-purple-600" }
  ];

  const blogPosts = [
    {
      id: 1,
      category: "Technology",
      date: "August 15, 2021",
      title: "How To Make A Perfect CV That Will Yield Excellent Job Positions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus augue."
    },
    {
      id: 2,
      category: "Technology",
      date: "August 15, 2021",
      title: "How To Make A Perfect CV That Will Yield Excellent Job Positions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus augue."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold">HIATEK</div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
                <a href="#" className="text-gray-300 hover:text-white">Find Job</a>
                <a href="#" className="text-gray-300 hover:text-white">Employers</a>
                <a href="#" className="text-gray-300 hover:text-white">Candidates</a>
                <a href="#" className="text-gray-300 hover:text-white">Pricing Plans</a>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition">
                Post A Job
              </button>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-300 hover:text-white">Home</a>
            <a href="#" className="block text-gray-300 hover:text-white">Find Job</a>
            <a href="#" className="block text-gray-300 hover:text-white">Employers</a>
            <a href="#" className="block text-gray-300 hover:text-white">Candidates</a>
            <a href="#" className="block text-gray-300 hover:text-white">Pricing Plans</a>
            <button className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition">
              Post A Job
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl font-bold mb-8 text-yellow-500">H</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Find Your Dream ORG Today!
          </h1>
          
          {/* Search Bar */}
          <div className="bg-gray-900 rounded-lg p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto mb-8">
            <div className="flex-1 flex items-center gap-2 px-4 py-2">
              <Search size={20} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Job title, Keyword..."
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
            <div className="flex-1 flex items-center gap-2 px-4 py-2 border-l border-gray-700">
              <MapPin size={20} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Your Location"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg transition font-medium">
              Find Job
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-gray-400">Suggestion:</span>
            <button className="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">UI/UX Designer</button>
            <button className="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">Programming</button>
            <button className="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">Digital Marketing</button>
            <button className="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">Video</button>
            <button className="px-4 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition">Animation</button>
          </div>
        </div>
      </div>

      {/* Recent Jobs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Recent Jobs Available</h2>
          <button className="text-purple-500 hover:text-purple-400 flex items-center gap-2">
            View All <ChevronRight size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={16} />
                        {job.salary}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Browse by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-400">
            All Categories are available here discover your dream team, Let's connect with each other and make organization stable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-900 hover:bg-gray-800 rounded-lg p-6 text-center cursor-pointer transition group">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold mb-2 group-hover:text-purple-500 transition">{category.name}</h3>
              <p className="text-sm text-gray-400">{category.count} Open position</p>
            </div>
          ))}
        </div>
      </div>

      {/* Good Life Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-700 rounded-lg h-80"></div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Good Life Begins With A Good Company</h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus augue dignissim lacus, egestas. Arcu, euismod ante lorem pretium.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 text-center">
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Create A Better Future For Yourself</h2>
            <p className="text-lg mb-8 opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus augue.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* News and Blog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">News and Blog</h2>
          <button className="text-purple-500 hover:text-purple-400 flex items-center gap-2">
            View All <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition cursor-pointer">
              <div className="bg-gray-700 h-48"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-xs">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <button className="text-purple-500 hover:text-purple-400 flex items-center gap-2">
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">HIATEK</h3>
              <p className="text-sm text-gray-400">Find your dream job today</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 HIATEK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}