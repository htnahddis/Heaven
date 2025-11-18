"use client";

import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function EventBookingPage() {
  const [showModal, setShowModal] = useState(true);
  const [calendar, setCalendar] = useState('');

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4 flex items-center gap-3">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <div className="text-amber-500 font-serif text-2xl">H</div>
          <span className="text-sm">Event</span>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200")',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-left space-y-4">
                <div className="inline-block bg-purple-600 text-xs px-3 py-1 rounded">
                  Event
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Dream world wide<br />in jakarta
                </h1>
                <h2 className="text-2xl text-gray-300">IIIT Sonepat</h2>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Tonight it's wonderful III-T Sonepat meresenya—mempengaruhi di kini maupun nanti. 
                  Itu, lalu membuat layak pertajaman atas thuss off revelling anything 10 thousand the 
                  acela bahama karena menyembap
                </p>
                <button className="flex items-center gap-2 text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                  <MapPin className="w-4 h-4" />
                  View map
                </button>
              </div>

              {/* Booking Modal */}
              {showModal && (
                <div className="bg-white rounded-lg p-6 text-black shadow-2xl max-w-md">
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-500 block mb-2">Calendar, March 8 2023, 9:30PM</label>
                      <select 
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                        value={calendar}
                        onChange={(e) => setCalendar(e.target.value)}
                      >
                        <option value="">Add to calendar</option>
                        <option value="google">Google Calendar</option>
                        <option value="outlook">Outlook</option>
                        <option value="apple">Apple Calendar</option>
                      </select>
                    </div>
                    
                    <button className="w-full bg-purple-600 text-white py-3 rounded font-medium hover:bg-purple-700 transition">
                      Book now
                    </button>
                    
                    <button 
                      className="w-full text-gray-500 text-sm hover:text-gray-700"
                      onClick={() => setShowModal(false)}
                    >
                      No thanks
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-black px-6 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Tonight it's marvelous III-T Sonepat meresenya demikian di kini January di 9. 
                Itu, lalu membuat layak pertajaman kaos thuss off revelling anything 10 thousand the 
                acela bahama karena menyembap pertinggal.mati.dan.experience user. Bedecke 1 rok include my both segmented.pada jere-priced value 
                has pakai pertacoma ini berbeda—aman cuma vaihi-valeh tidak cukup lah
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tonight it's marvelous III-T Sonepat meresenya demikian di kini January di 9. 
                Itu, lalu membuat layak pertajaman kaos thuss off revelling anything 10 thousand the 
                acela bahama karena menyembap pertinggal mati.dan.experience
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Sun-Thurs 10AM - 11PM</span>
                  <span className="text-blue-500">22nd = 02PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fri-Sat 10AM - 12AM</span>
                  <span className="text-blue-500">23rd = 11AM</span>
                </div>
              </div>
            </div>

            {/* Organizer Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Organizer Contact</h3>
              <p className="text-gray-400 text-sm">
                Please go to{' '}
                <a href="#" className="text-blue-500 underline">
                  iu.events.drama-jakarta.com
                </a>{' '}
                or refer the FAQ section for more detail
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Event Location */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Event location</h3>
              <div className="bg-gray-800 rounded-lg overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Map placeholder</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Dream world wide in jakarta
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Find direction to event's venue: Jl.III-T, On kenkalan gerombols, 
                privettrebility ah,kiny locations
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-black px-4 py-2 rounded text-sm">Tag 1</span>
                <span className="bg-white text-black px-4 py-2 rounded text-sm">Tag 2</span>
                <span className="bg-white text-black px-4 py-2 rounded text-sm">Tag 3</span>
                <span className="bg-white text-black px-4 py-2 rounded text-sm">Tag 4</span>
                <span className="bg-white text-black px-4 py-2 rounded text-sm">Tag 5</span>
              </div>
            </div>

            {/* Share with friends */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Share with friends</h3>
              <div className="flex gap-3">
                <button className="bg-blue-600 p-3 rounded hover:bg-blue-700 transition">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="bg-blue-400 p-3 rounded hover:bg-blue-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                </button>
                <button className="bg-blue-700 p-3 rounded hover:bg-blue-800 transition">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="bg-blue-400 p-3 rounded hover:bg-blue-500 transition">
                  <Twitter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}