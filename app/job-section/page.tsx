'use client';

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, ChevronRight, Menu, X } from 'lucide-react';

export default function JobPortal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const bannerImages = [

    '/jobs-section/image-banner.jpg',
    
  ];

  // Auto-rotate banner images
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      title: "Full Time Team Lead",
      company: "Udacity",
      location: "Spain, Barcelona",
      type: "Internship",
      tags: ["Marketing", "Design"],
      salary: "$20,000 - $25,000"
    },
    {
      id: 3,
      title: "Training Guide",
      company: "Packer",
      location: "Lucern, Switzerland",
      type: "Full-Time",
      tags: ["Development", "IT", "Senior Level", "Project M"],
      salary: "$20,000 - $25,000"
    },
    {
      id: 4,
      title: "Streamer",
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
    { name: "Valorant", count: 357 },
    { name: "PUBG", count: 312},
    { name: "Call of Duty", count: 297},
    { name: "Fortnite", count: 247},
    { name: "League of Legends", count: 204 },
    { name: "Apex Legends", count: 167 },
    { name: "FIFA", count: 125},
    { name: "Counter Strike", count: 57 }
  ];

  const stats = [
    { number: "1,75,324", label: "Live Job", gradient: "from-orange-600 to-yellow-500" },
    { number: "97,354", label: "Companies", gradient: "from-yellow-500 to-amber-500" },
    { number: "38,47,154", label: "Candidates", gradient: "from-amber-500 to-orange-500" },
    { number: "7,532", label: "New Jobs", gradient: "from-orange-500 to-yellow-600" }
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
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
     

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, -40px) scale(1.1); }
          66% { transform: translate(-40px, 80px) scale(0.9); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 10s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }

        .animate-gradient-x {
          animation: gradient-x 12s ease infinite;
          background-size: 200% 200%;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.3), transparent);
          background-size: 200% 100%;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .glass-card {
          background: rgba(17, 24, 39, 0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(251, 146, 60, 0.15);
        }

        .glass-card-hover:hover {
          background: rgba(17, 24, 39, 0.6);
          border-color: rgba(251, 146, 60, 0.3);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="relative z-10">
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card border-b border-orange-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">Home</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">Find Job</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">Employers</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">Candidates</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">Pricing Plans</a>
              <button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 px-6 py-2 rounded-lg transition-all duration-300 font-medium">
                Post A Job
              </button>
            </div>
          </div>
        )}
       
        {/* Hero Section with Banner */}
        <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image Carousel */}
          <div className="absolute inset-0">
            <div>
                <img 
                  src="/jobs-section/image-banner.jpg"
                  alt= "image banner"
                  className="w-full h-full object-cover"
                />
              </div>
          
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10"></div>
            
            {/* Animated particles */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-float animation-delay-2000 opacity-60"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-float animation-delay-4000 opacity-60"></div>
            <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-300 rounded-full animate-float animation-delay-6000 opacity-60"></div>
          </div>

          {/* Banner Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-orange-400 w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Content Over Background */}
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-float">
              Find Your Dream{' '}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                ORG
              </span>{' '}
              Today!
            </h1>
            
            {/* Search Bar */}
            <div className="glass-card rounded-xl p-2 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto mb-8 shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex-1 flex items-center gap-2 px-4 py-3">
                <Search size={20} className="text-orange-400" />
                <input 
                  type="text" 
                  placeholder="Job title, Keyword..."
                  className="bg-transparent outline-none w-full text-white placeholder-gray-400 focus:placeholder-gray-500 transition-colors"
                />
              </div>
              <div className="flex-1 flex items-center gap-2 px-4 py-3 border-l border-orange-500/20">
                <MapPin size={20} className="text-orange-400" />
                <input 
                  type="text" 
                  placeholder="Your Location"
                  className="bg-transparent outline-none w-full text-white placeholder-gray-400 focus:placeholder-gray-500 transition-colors"
                />
              </div>
              <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105">
                Find Job
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="text-gray-400">Suggestion:</span>
              <button className="px-4 py-2 glass-card rounded-full hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
               Orangutan
              </button>
              <button className="px-4 py-2 glass-card rounded-full hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
               Appeal
              </button>
              <button className="px-4 py-2 glass-card rounded-full hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
               Furious7
              </button>
              <button className="px-4 py-2 glass-card rounded-full hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
               MortarGX
              </button>
              <button className="px-4 py-2 glass-card rounded-full hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105">
              Hydra
              </button>
            </div>
          </div>
        </div>

        {/* Recent Jobs Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              Recent <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Jobs Available</span>
            </h2>
            <button className="text-orange-400 hover:text-orange-300 flex items-center gap-2 transition-colors group">
              View All <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div 
                key={job.id} 
                className="glass-card glass-card-hover rounded-xl p-6 transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-lg flex-shrink-0 border border-orange-500/30 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 hover:text-orange-400 transition-colors cursor-pointer">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1 hover:text-orange-400 transition-colors">
                          <Briefcase size={16} />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1 hover:text-orange-400 transition-colors">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 hover:text-orange-400 transition-colors">
                          <DollarSign size={16} />
                          {job.salary}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 glass-card text-gray-300 rounded-full text-xs hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap font-medium shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105">
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
            <h2 className="text-3xl font-bold mb-4">
              Browse by <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              All Categories are available here discover your dream team, Let's connect with each other and make organization stable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="glass-card glass-card-hover rounded-xl p-6 text-center cursor-pointer transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600/20 to-yellow-600/20 rounded-lg mx-auto mb-4 flex items-center justify-center border border-orange-500/30 group-hover:border-orange-500/60 transition-all">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-400">{category.count} Open position</p>
              </div>
            ))}
          </div>
        </div>

        {/* Good Life Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-80 w-full rounded-xl overflow-hidden glass-card">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/jobs-section/game-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start your pro journey with{' '}
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  HEAVEN
                </span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                Whether you're an aspiring esports athlete or a rising creator, HEAVEN gives you the platform, resources, and visibility to grow.
              </p>
              <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 px-8 py-4 rounded-lg transition-all duration-300 font-medium shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105">
                Know More
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card glass-card-hover rounded-xl p-6 text-center transition-all duration-300">
                <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* News and Blog */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">
              News and <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Blog</span>
            </h2>
            <button className="text-orange-400 hover:text-orange-300 flex items-center gap-2 transition-colors group">
              View All <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="glass-card glass-card-hover rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group">
                <div className="relative bg-gradient-to-br from-orange-600/20 to-yellow-600/20 h-48 border-b border-orange-500/20 group-hover:from-orange-600/30 group-hover:to-yellow-600/30 transition-all duration-300 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600"
                    alt="Blog post"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gradient-to-r from-orange-600 to-yellow-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.description}</p>
                  <button className="text-orange-400 hover:text-orange-300 flex items-center gap-2 transition-colors group">
                    Read More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-20 right-10 w-40 h-40 bg-orange-600/15 rounded-full blur-3xl pointer-events-none animate-blob"></div>
        <div className="fixed bottom-20 left-10 w-48 h-48 bg-yellow-600/15 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}