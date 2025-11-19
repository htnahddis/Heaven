"use client";

import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Facebook, Linkedin, Twitter, Trophy, Gamepad2, Shield, Target } from 'lucide-react';

export default function EventBookingPage() {
  const [showModal, setShowModal] = useState(true);
  const [calendar, setCalendar] = useState('');

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

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
          animation: float 3s ease-in-out infinite;
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
       

        {/* Hero Section */}
        <div className="relative min-h-screen ">
          <div className="relative h-[90vh]">
            {/* Background Image with Gradient */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200")',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 to-yellow-900/30"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-left space-y-6">
                  <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-lg">
                    <Gamepad2 className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-semibold text-orange-400">GAMING TOURNAMENT</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                      BATTLEGROUNDS
                    </span>
                    <br />
                    <span className="text-white">MUMBAI SHOWDOWN</span>
                  </h1>
                  
                  <div className="flex items-center gap-3 text-lg">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300 font-medium">Phoenix Marketcity, Mumbai</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed max-w-xl text-lg">
                    Join Mumbai's biggest PUBG Mobile tournament featuring 100 teams competing for a prize pool of ₹5 Lakhs. 
                    Experience intense Squad matches, meet pro players, and showcase your gaming skills on the biggest stage.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="glass-card px-6 py-3 rounded-lg">
                      <div className="text-orange-400 text-sm font-semibold">Prize Pool</div>
                      <div className="text-2xl font-bold text-white">₹5,00,000</div>
                    </div>
                    <div className="glass-card px-6 py-3 rounded-lg">
                      <div className="text-orange-400 text-sm font-semibold">Teams</div>
                      <div className="text-2xl font-bold text-white">100 Squads</div>
                    </div>
                    <div className="glass-card px-6 py-3 rounded-lg">
                      <div className="text-orange-400 text-sm font-semibold">Format</div>
                      <div className="text-2xl font-bold text-white">Squad TPP</div>
                    </div>
                  </div>

                  <button className="flex items-center gap-3 glass-card px-6 py-3 rounded-lg hover:bg-orange-600/20 transition-all border border-orange-500/30 hover:border-orange-500/60 group">
                    <MapPin className="w-5 h-5 text-orange-400 group-hover:text-orange-300" />
                    <span className="font-semibold group-hover:text-orange-300">View Venue Location</span>
                  </button>
                </div>

                {/* Booking Modal */}
                {showModal && (
                  <div className="glass-card rounded-xl p-8 shadow-2xl max-w-md animate-float border-2 border-orange-500/30">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Trophy className="w-6 h-6 text-orange-400" />
                          <h3 className="text-xl font-bold text-white">Register Your Squad</h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm text-gray-300">
                            <Calendar className="w-4 h-4 text-orange-400" />
                            <span>December 28, 2025</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-300">
                            <Clock className="w-4 h-4 text-orange-400" />
                            <span>10:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-300">
                            <Users className="w-4 h-4 text-orange-400" />
                            <span>Squad Registration (4 Players)</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm text-gray-400 block mb-2 font-medium">Add to Calendar</label>
                        <select 
                          className="w-full glass-card border border-orange-500/30 rounded-lg px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none transition-all"
                          value={calendar}
                          onChange={(e) => setCalendar(e.target.value)}
                        >
                          <option value="">Select calendar</option>
                          <option value="google">Google Calendar</option>
                          <option value="outlook">Outlook Calendar</option>
                          <option value="apple">Apple Calendar</option>
                        </select>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105">
                        REGISTER NOW - ₹500/Squad
                      </button>
                      
                      <button 
                        className="w-full text-gray-400 text-sm hover:text-orange-400 font-medium transition-colors"
                        onClick={() => setShowModal(false)}
                      >
                        Maybe Later
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Tournament Overview */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Tournament Overview
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Get ready for Mumbai's most anticipated PUBG Mobile tournament of the year! Battlegrounds Mumbai Showdown 
                    brings together the best gaming squads from across Maharashtra for an epic day of competitive gaming.
                  </p>
                  <p>
                    The tournament features multiple rounds including Qualifiers, Semi-Finals, and Grand Finals. All matches 
                    will be played on Erangel and Miramar maps in Squad TPP mode. Teams will compete for rankings based on 
                    placement points and kill points, with the top 16 teams advancing to the Grand Finals.
                  </p>
                  <p>
                    Special guest appearances by popular PUBG Mobile streamers and pro players. Live commentary, instant 
                    replays, and big screen displays will ensure an unforgettable experience for both players and spectators.
                  </p>
                </div>
              </div>

              {/* Prize Distribution */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Prize Distribution
                </h3>
                <div className="space-y-3">
                  {[
                    { place: '1st Place', prize: '₹2,50,000', color: 'from-yellow-400 to-amber-400' },
                    { place: '2nd Place', prize: '₹1,25,000', color: 'from-gray-300 to-gray-400' },
                    { place: '3rd Place', prize: '₹75,000', color: 'from-orange-400 to-amber-600' },
                    { place: '4th-10th Place', prize: '₹20,000 each', color: 'from-orange-500 to-yellow-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-black/40 rounded-lg border border-orange-500/20">
                      <span className={`font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.place}
                      </span>
                      <span className="text-white font-bold text-lg">{item.prize}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Schedule */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Event Schedule
                </h3>
                <div className="space-y-3">
                  {[
                    { time: '10:00 AM', event: 'Registration & Check-in' },
                    { time: '11:00 AM', event: 'Opening Ceremony & Rules Briefing' },
                    { time: '12:00 PM', event: 'Qualifier Rounds (Match 1-3)' },
                    { time: '2:00 PM', event: 'Lunch Break' },
                    { time: '3:00 PM', event: 'Semi-Finals (Match 4-6)' },
                    { time: '6:00 PM', event: 'Grand Finals (Match 7-9)' },
                    { time: '7:30 PM', event: 'Prize Distribution & Closing Ceremony' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="glass-card px-3 py-1 rounded text-orange-400 font-bold text-sm whitespace-nowrap">
                        {item.time}
                      </div>
                      <div className="text-gray-300">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Contact & Support
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p>
                    For tournament rules, registration queries, or technical support:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400">Email:</span>
                      <a href="mailto:support@battlegroundsmumbai.in" className="text-white hover:text-orange-400 transition-colors">
                        support@battlegroundsmumbai.in
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400">Phone:</span>
                      <a href="tel:+919876543210" className="text-white hover:text-orange-400 transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400">Website:</span>
                      <a href="#" className="text-white hover:text-orange-400 transition-colors underline">
                        www.battlegroundsmumbai.in
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 pt-2">
                    Visit our FAQ section for detailed tournament rules, map rotation, and point system information.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Event Location */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Venue Location
                </h3>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden h-64 flex items-center justify-center border border-orange-500/20 mb-4">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-16 h-16 mx-auto mb-3 text-orange-400" />
                    <p className="text-sm text-gray-400">Interactive Map</p>
                    <p className="text-xs text-gray-500 mt-1">Phoenix Marketcity</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-white font-bold text-lg mb-1">Phoenix Marketcity Mumbai</div>
                    <div className="text-gray-400 text-sm">Gaming Arena, Level 3</div>
                  </div>
                  <div className="text-gray-400 text-sm leading-relaxed">
                    LBS Marg, Kurla West, Mumbai, Maharashtra 400070
                  </div>
                  <div className="pt-2">
                    <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold flex items-center gap-2 transition-colors">
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Tournament Features */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Tournament Features
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: 'Anti-Cheat System', desc: 'Advanced monitoring and fair play enforcement' },
                    { icon: Trophy, title: 'Prize Pool', desc: '₹5 Lakhs total prize money distribution' },
                    { icon: Target, title: 'Pro Commentary', desc: 'Live casting by top PUBG Mobile casters' },
                    { icon: Users, title: 'Live Audience', desc: 'Spectator tickets available for gaming fans' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-black/40 rounded-lg border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                      <div className="glass-card p-3 rounded-lg">
                        <item.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold mb-1">{item.title}</div>
                        <div className="text-gray-400 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tournament Tags */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['PUBG Mobile', 'Esports', 'Gaming Tournament', 'Squad TPP', 'Mumbai', 'Battle Royale', 'Competitive Gaming', 'Prize Pool'].map((tag, index) => (
                    <span key={index} className="bg-gradient-to-r from-orange-600 to-yellow-600 px-4 py-2 rounded-lg text-sm font-semibold hover:from-orange-500 hover:to-yellow-500 transition-all cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Event */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Share Event
                </h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 p-4 rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                    <Facebook className="w-5 h-5 mx-auto" />
                  </button>
                  <button className="flex-1 bg-blue-400 p-4 rounded-lg hover:bg-blue-500 transition-all hover:scale-105 shadow-lg shadow-blue-400/30">
                    <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </button>
                  <button className="flex-1 bg-blue-700 p-4 rounded-lg hover:bg-blue-800 transition-all hover:scale-105 shadow-lg shadow-blue-700/30">
                    <Linkedin className="w-5 h-5 mx-auto" />
                  </button>
                  <button className="flex-1 bg-sky-400 p-4 rounded-lg hover:bg-sky-500 transition-all hover:scale-105 shadow-lg shadow-sky-400/30">
                    <Twitter className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-20 right-10 w-40 h-40 bg-orange-600/15 rounded-full blur-3xl pointer-events-none animate-blob"></div>
        <div className="fixed bottom-20 left-10 w-48 h-48 bg-yellow-600/15 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}