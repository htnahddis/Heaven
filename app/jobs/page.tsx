"use client";
import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ChevronRight, Menu, X, SlidersHorizontal } from 'lucide-react';

export default function JobPortal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Full Time Coach",
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      tags: ["Marketing", "Design"],
      level: "Intermediate",
      posted: "11 July 2021"
    },
    {
      id: 2,
      title: "Full Time Marketer",
      company: "Udacity",
      location: "Spain, Barcelona",
      type: "Internship",
      tags: ["Marketing", "Design"],
      level: "Intermediate",
      posted: "11 July 2021"
    },
    {
      id: 3,
      title: "Associate",
      company: "Packer",
      location: "Lucern, Switzerland",
      type: "Full-Time",
      tags: ["Operations"],
      level: "Senior Level",
      posted: "11 July 2021"
    },
    {
      id: 4,
      title: "Jr. Game Leader",
      company: "Blizzard",
      location: "Mumbai, India",
      type: "Full-Time",
      tags: ["Operations"],
      level: "Senior Level",
      posted: "11 July 2021"
    },
    {
      id: 5,
      title: "Barber",
      company: "Figma",
      location: "California, USA",
      type: "Freelance",
      tags: ["Operations"],
      level: "Entry Level",
      posted: "11 July 2021"
    },
    {
      id: 6,
      title: "Entry Pregger",
      company: "Discord",
      location: "California, USA",
      type: "Freelance",
      tags: ["Marketing"],
      level: "Entry Level",
      posted: "11 July 2021"
    }
  ];

  const jobTypes = [
    { label: "Full Time Jobs", count: 159 },
    { label: "Part Time Jobs", count: 38 },
    { label: "Remote Jobs", count: 50 },
    { label: "Internship Jobs", count: 76 },
    { label: "Training Jobs", count: 15 }
  ];

  const seniorityLevels = [
    { label: "Student Level", count: 24 },
    { label: "Entry Level", count: 35 },
    { label: "Mid Level", count: 46 },
    { label: "Senior Level", count: 38 },
    { label: "Directors", count: 27 },
    { label: "VP or Above", count: 8 }
  ];

  const salaryRanges = [
    { label: "700-1000", count: 48 },
    { label: "1000-1200", count: 35 },
    { label: "1200-1400", count: 27 },
    { label: "1500-1800", count: 19 },
    { label: "3000 or above", count: 4 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold">HEAVEN</div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-white/90 hover:text-white">Home</a>
                <a href="#" className="text-white/90 hover:text-white">Find Job</a>
                <a href="#" className="text-white/90 hover:text-white">Employers</a>
                <a href="#" className="text-white/90 hover:text-white">Candidates</a>
                <a href="#" className="text-white/90 hover:text-white">Pricing Plans</a>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition">
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

      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center">Jobs</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-4">
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Search by Keywords</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Job title or Keyword"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Location</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="City or postcode"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Type of Employment */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Type of Employment</h3>
                <div className="space-y-2">
                  {jobTypes.map((type, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-700 rounded" />
                        <span className="ml-3 text-sm text-gray-300 group-hover:text-white">{type.label}</span>
                      </div>
                      <span className="text-xs text-gray-500">{type.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Seniority Level */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Seniority Level</h3>
                <div className="space-y-2">
                  {seniorityLevels.map((level, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-700 rounded" />
                        <span className="ml-3 text-sm text-gray-300 group-hover:text-white">{level.label}</span>
                      </div>
                      <span className="text-xs text-gray-500">{level.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Salary Range</h3>
                <div className="space-y-2">
                  {salaryRanges.map((range, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center">
                        <input type="checkbox" className="w-4 h-4 bg-gray-800 border-gray-700 rounded" />
                        <span className="ml-3 text-sm text-gray-300 group-hover:text-white">${range.label}</span>
                      </div>
                      <span className="text-xs text-gray-500">{range.count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 mt-8">
                <h3 className="font-bold text-lg mb-2">WE ARE HIRING</h3>
                <p className="text-sm text-gray-300 mb-4">Join us now</p>
                <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg text-sm font-semibold transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Jobs Listing */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">All Jobs</h2>
                <p className="text-gray-400 text-sm">Showing 73 results</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-sm transition">
                  <SlidersHorizontal size={16} />
                  Filters
                </button>
                <select className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-purple-500">
                  <option>Most relevant</option>
                  <option>Most recent</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition border border-gray-800">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex-shrink-0 flex items-center justify-center text-xl font-bold">
                        {job.company.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 hover:text-purple-400 cursor-pointer">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} />
                            {job.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-xs font-medium">
                            {job.type}
                          </span>
                          {job.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                          <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-xs">
                            {job.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition whitespace-nowrap h-fit font-semibold">
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 transition">
                ←
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-600 text-white font-semibold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 transition">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 transition">
                3
              </button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 transition">
                32
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">HEAVEN</h3>
              <p className="text-sm text-gray-400">Great Platform for job seeker passionate about startups. Find your dream job easier.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Job Seekers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Create Account</a></li>
                <li><a href="#" className="hover:text-white">Find Jobs</a></li>
                <li><a href="#" className="hover:text-white">Saved Jobs</a></li>
                <li><a href="#" className="hover:text-white">Job Alerts</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4">Subscribe to get latest updates</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>2024 @ Heaven. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white">Terms & Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}