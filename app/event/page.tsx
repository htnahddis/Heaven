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
      image: '/api/placeholder/400/300',
      title: 'Ultimate Rivalry Esports',
      date: 'CSI AM EVENT',
      venue: '@MOVIEMANIA',
      type: 'flames'
    },
    {
      id: 2,
      image: '/api/placeholder/400/300',
      title: 'Ultimate Rivalry Esports',
      date: 'CSI AM EVENT',
      venue: '@MOVIEMANIA',
      type: 'concert'
    },
    {
      id: 3,
      image: '/api/placeholder/400/300',
      title: 'Ultimate Rivalry Esports',
      date: 'CSI AM EVENT',
      venue: '@MOVIEMANIA',
      type: 'concert'
    },
    {
      id: 4,
      image: '/api/placeholder/400/300',
      title: 'Ultimate Rivalry Esports',
      date: 'CSI AM EVENT',
      venue: '@MOVIEMANIA',
      type: 'concert'
    },
    {
      id: 5,
      image: '/api/placeholder/400/300',
      title: 'Ultimate Rivalry Esports',
      date: 'CSI AM EVENT',
      venue: '@MOVIEMANIA',
      type: 'flames-stage'
    },
    {
      id: 6,
      image: '/api/placeholder/400/300',
      title: 'Ultimate Rivalry Esports',
      date: 'CSI AM EVENT',
      venue: '@MOVIEMANIA',
      type: 'flames'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center gap-4 px-6 py-4">
          <button className="text-white hover:text-gray-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-orange-500">H</div>
            <span className="text-white text-xl font-semibold">Event</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="relative h-[400px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950">
            <img
              src="/api/placeholder/1920/400"
              alt="Event crowd"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          
          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">
              MADE FOR THOSE<br />WHO DO
            </h1>

            {/* Search Bar */}
            <div className="w-full max-w-4xl bg-gray-400/90 backdrop-blur rounded-lg p-2 flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 bg-white rounded px-4 py-3">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Looking for"
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="flex-1 flex items-center gap-2 bg-white rounded px-4 py-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500"
                />
              </div>

              <div className="flex-1 flex items-center gap-2 bg-white rounded px-4 py-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="When"
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                  className="flex-1 outline-none text-gray-900 placeholder-gray-500"
                />
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">
          Upcoming <span className="text-purple-500">Events</span>
        </h2>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all cursor-pointer group"
            >
              {/* Event Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {event.type === 'flames' && (
                  <div className="absolute inset-0 bg-orange-600/20"></div>
                )}
                {event.type === 'flames-stage' && (
                  <div className="absolute inset-0 bg-orange-500/30"></div>
                )}
                {event.type === 'concert' && (
                  <div className="absolute inset-0 bg-purple-600/20"></div>
                )}
              </div>

              {/* Event Info */}
              <div className="p-4">
                <h3 className="text-purple-400 text-sm font-semibold mb-1">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
            LOAD MORE
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-20 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-20 left-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}