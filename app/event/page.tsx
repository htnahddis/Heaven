'use client';

import React, { useState } from 'react';
import { ChevronLeft, Search, MapPin, Calendar, Users } from 'lucide-react';

export default function EventsPage() {
  const [lookingFor, setLookingFor] = useState('');
  const [location, setLocation] = useState('');
  const [when, setWhen] = useState('');

  const events = [
    {
      id: 1,
      image: '/event/event-pubg.jpg',
      title: 'Favourite in Game',
      date: '25/12/2025',
      venue: 'Online',
      type: 'flames'
    },
    {
      id: 2,
      image: '/event/event-cod.jpg',
      title: 'Last Blood',
      date: '30/12/25',
      venue: 'Online',
      type: 'concert'
    },
    {
      id: 3,
      image: '/event/event-pubg-more.jpg',
      title: 'Trvia Event',
      date: '20/11/25',
      venue: 'Mumbai',
      type: 'concert'
    },
    {
      id: 4,
      image: '/event/event-fortnite.jpg',
      title: 'Kill that blood',
      date: '1/1/25',
      venue: 'New Delhi',
      type: 'concert'
    },
    {
      id: 5,
      image: '/event/event-cod-poster.jpg',
      title: 'Solo VS Squad',
      date: '1/1/25',
      venue: 'Mumbai',
      type: 'flames-stage'
    },
    {
      id: 6,
      image: '/event/event-cs.jpg',
      title: 'Counter Maiden',
      date: '3/1/25',
      venue: 'Online',
      type: 'flames'
    }
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      

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

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
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

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.3), transparent);
          background-size: 200% 100%;
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
        {/* Hero Section - Increased Height */}
        <div className="relative ">
          <div className="relative h-[55rem] overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 ">
              <div className="h-full w-full relative">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/event/banner-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-yellow-900/20"></div>
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-6">
              <h1 className="text-6xl md:text-7xl font-black text-white text-center mb-16 leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  MADE FOR THOSE
                </span>
                <br />
                <span className="text-white">WHO DO</span>
              </h1>

              {/* Search Bar */}
              <div className="w-full max-w-5xl glass-card rounded-xl p-3 flex items-center gap-3 shadow-2xl shadow-orange-500/20">
                <div className="flex-1 flex items-center gap-3 bg-white rounded-lg px-5 py-4 hover:ring-2 hover:ring-orange-500/50 transition-all">
                  <Search className="w-5 h-5 text-orange-500" />
                  <input
                    type="text"
                    placeholder="Looking for"
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className="flex-1 outline-none text-gray-900 placeholder-gray-500 font-medium"
                  />
                </div>

                <div className="flex-1 flex items-center gap-3 bg-white rounded-lg px-5 py-4 hover:ring-2 hover:ring-orange-500/50 transition-all">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 outline-none text-gray-900 placeholder-gray-500 font-medium"
                  />
                </div>

                <div className="flex-1 flex items-center gap-3 bg-white rounded-lg px-5 py-4 hover:ring-2 hover:ring-orange-500/50 transition-all">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <input
                    type="text"
                    placeholder="When"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    className="flex-1 outline-none text-gray-900 placeholder-gray-500 font-medium"
                  />
                </div>

                <button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white p-4 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105">
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="px-6 py-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">
            Upcoming <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Events</span>
          </h2>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="glass-card glass-card-hover rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group"
              >
                {/* Event Image */}
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {event.type === 'flames' && (
                    <div className="absolute inset-0 bg-orange-600/30 group-hover:bg-orange-600/40 transition-colors"></div>
                  )}
                  {event.type === 'flames-stage' && (
                    <div className="absolute inset-0 bg-amber-600/30 group-hover:bg-amber-600/40 transition-colors"></div>
                  )}
                  {event.type === 'concert' && (
                    <div className="absolute inset-0 bg-yellow-600/30 group-hover:bg-yellow-600/40 transition-colors"></div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                </div>

                {/* Event Info */}
                <div className="p-5 relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                  <h3 className="text-orange-400 text-base font-bold mb-2 group-hover:text-orange-300 transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4 text-orange-500/70" />
                    <span>{event.date}</span>
                    <span className="text-orange-500/50">•</span>
                    <MapPin className="w-4 h-4 text-orange-500/70" />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-16">
            <button className="px-10 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105 text-sm tracking-wider">
              LOAD MORE
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-20 right-10 w-40 h-40 bg-orange-600/15 rounded-full blur-3xl pointer-events-none animate-blob"></div>
        <div className="fixed bottom-20 left-10 w-48 h-48 bg-yellow-600/15 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}