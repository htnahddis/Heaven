'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Search, ChevronDown, TrendingUp, Award, Target } from 'lucide-react';

export default function PlayerProfile() {
  const [activeTab, setActiveTab] = useState('ALL/T');
  const [activeFilter, setActiveFilter] = useState('Rating');

  const statBars = [
    { label: 'Rating', value: 2.0, max: 2.5, color: 'from-orange-500 via-amber-500 to-yellow-500' },
    { label: 'DPR', value: 140, max: 200, color: 'from-yellow-500 via-orange-500 to-amber-500' },
    { label: 'KAST', value: 80, max: 100, color: 'from-orange-500 via-amber-500 to-yellow-500' },
    { label: 'Impact', value: 100, max: 150, color: 'from-yellow-500 via-orange-500 to-amber-500' },
    { label: 'ADR', value: 140, max: 200, color: 'from-orange-500 via-amber-500 to-yellow-500' },
    { label: 'KPR', value: 0.80, max: 1.0, color: 'from-yellow-500 via-orange-500 to-amber-500' },
  ];

  const hitRateData = [
    { label: 'Mon', value: 15 },
    { label: 'Tue', value: 22 },
    { label: 'Wed', value: 18 },
    { label: 'Thu', value: 25 },
    { label: 'Fri', value: 20 },
  ];

  const detailedStats = [
    { label: 'Rating', value: '1.20' },
    { label: 'K/D', value: '1.20' },
    { label: 'Headsh...', value: '79.4%' },
    { label: 'Kills', value: '21.71', highlight: true },
    { label: 'Deaths', value: '18.25', highlight: true },
    { label: 'Assists', value: '7.76' },
    { label: 'K/D Diff', value: '5.69', highlight: true },
    { label: 'AoR', value: '85.37', sub: '89.34' },
  ];

  const user = {
    name: 'FAKER',
    email: 'faker@example.com',
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden mt-30">
      {/* Advanced Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent"></div>
        
        {/* Moving gradient orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-amber-500/10 animate-gradient-x"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -50px) scale(1.1); }
          50% { transform: translate(-50px, 100px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
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

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.4), inset 0 0 20px rgba(249, 115, 22, 0.1); }
          50% { box-shadow: 0 0 60px rgba(251, 191, 36, 0.6), inset 0 0 30px rgba(251, 191, 36, 0.2); }
        }

        .animate-blob {
          animation: blob 12s infinite cubic-bezier(0.4, 0, 0.6, 1);
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
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite linear;
          background: linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.4), transparent);
          background-size: 200% 100%;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .glass-card {
          background: rgba(17, 24, 39, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(251, 146, 60, 0.2);
        }

        .glass-card-hover:hover {
          background: rgba(17, 24, 39, 0.6);
          border-color: rgba(251, 146, 60, 0.4);
          transform: translateY(-4px);
        }
      `}</style>

      {/* Header */}
      {/* <nav className="bg-black text-white p-4 z-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <span className="text-2xl font-bold tracking-wider">HEAVEN</span>
        </div>

        <div className="flex gap-6">
          <Link href="/" className={`hover:text-orange-400 transition`}>Home</Link>
          <Link href="/event" className={`hover:text-orange-400 transition`}>Events</Link>
          <Link href="/job-section" className={`hover:text-orange-400 transition`}>Jobs</Link>
        </div>

        
      </div>
    </nav> */}

      {/* Main Content */}
      <div className="px-6 py-8 relative z-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Player Info */}
          <div className="col-span-3">
            <div className="glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-500 animate-float">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-yellow-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 animate-glow-pulse rounded-t-2xl"></div>
                <img
                  src="/profile/gamer-profile.jpg"
                  alt="Profile"
                  className="w-full aspect-square object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="p-6 text-center text-sm text-gray-300 leading-relaxed">
                Im an Indian gamer who grew up with the classic mix of school stress, street cricket, and late-night gaming sessions. What started as a hobby with casual mobile games slowly turned into a passion for competitive multiplayer titles, strategy gameplay, and the challenge of constantly improving.

                I love exploring new games, understanding their mechanics, and experimenting with different playstyles. Whether its grinding ranked matches, trying out fresh launches, or revisiting nostalgic classics, gaming has always been my way to disconnect and recharge.
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="col-span-9 space-y-8">
            {/* Player Header */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h1 className="text-6xl font-black mb-3 bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                    {user.name}
                  </h1>
                  <p className="text-base text-orange-300/80">{user.email}</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-3 glass-card hover:glass-card-hover rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 border border-orange-500/30">
                    VIEW CHAMPIONSHIPS
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/80 hover:scale-105 relative overflow-hidden group">
                    <span className="relative z-10">ADD TO COMPARISON</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Stats Bars */}
              <div className="space-y-4">
                {statBars.map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-orange-300">{stat.label}</span>
                      <span className="text-sm font-bold text-white">{stat.value}</span>
                    </div>
                    <div className="relative h-3 bg-slate-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-orange-500/20">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out relative overflow-hidden rounded-full`}
                        style={{ width: `${(stat.value / stat.max) * 100}%` }}
                      >
                        <div className="absolute inset-0 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="glass-card rounded-2xl p-2 flex gap-2">
              {['RECENT FORM', 'GAMES', 'EVENT TYPE', 'MAPS'].map((tab) => (
                <button
                  key={tab}
                  className="flex-1 px-4 py-3 text-sm font-medium text-orange-300 hover:text-white rounded-xl hover:bg-orange-500/20 transition-all duration-300"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-3 flex-wrap">
              <button className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-xl text-sm font-semibold shadow-lg shadow-orange-500/50 hover:shadow-orange-500/80 hover:scale-105 transition-all duration-300">
                Rating
              </button>
              {['ALL/T', 'Kills', 'Deaths', 'Assist', 'S2R', 'Illustrious', 'K/D Diff', 'Dea KS CST'].map((filter) => (
                <button
                  key={filter}
                  className="px-5 py-2.5 glass-card rounded-xl text-sm font-medium hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-8">
              {/* Hit Rate Chart */}
              <div className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-orange-200 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-yellow-400" />
                    HIT RATE
                  </h3>
                </div>
                <div className="mb-6 text-sm text-orange-400/80 font-medium">FAKER (TI)</div>
                
                <div className="flex gap-3 mb-6">
                  <button className="px-4 py-2 bg-orange-600/50 border border-orange-500/50 rounded-lg text-sm font-medium hover:bg-orange-600/70 transition-all duration-300">
                    Intra
                  </button>
                  <button className="px-4 py-2 glass-card rounded-lg text-sm font-medium hover:bg-orange-500/20 transition-all duration-300">
                    Opp
                  </button>
                  <button className="px-4 py-2 glass-card rounded-lg text-sm font-medium hover:bg-orange-500/20 transition-all duration-300">
                    Under
                  </button>
                </div>

                <div className="flex justify-between mb-3 text-sm text-orange-400/70 font-medium">
                  <span>Full</span>
                  <span>LW</span>
                  <span>LB</span>
                  <span>W Gen 5</span>
                </div>

                <div className="flex justify-between mb-6 text-sm text-white font-semibold">
                  <span>0.3</span>
                  <span>30.7</span>
                  <span>FI</span>
                  <span>11.5</span>
                </div>

                {/* Bar Chart */}
                <div className="relative h-56 flex items-end gap-1 mb-4">
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-orange-400/70 py-1 font-medium">
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                  </div>
                  
                  <div className="ml-10 flex-1 flex items-end justify-between gap-2 h-full">
                    {hitRateData.map((data, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
                        <div
                          className="w-full bg-gradient-to-t from-orange-600 via-yellow-500 to-amber-500 rounded-t-xl transition-all duration-500 relative overflow-hidden hover:from-orange-500 hover:via-yellow-400 hover:to-amber-400 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/60"
                          style={{ height: `${(data.value / 30) * 100}%` }}
                          title={`${data.label}: ${data.value}`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ml-10 flex justify-between text-xs text-orange-300/70 font-medium mb-4">
                  {hitRateData.map((data, idx) => (
                    <span key={idx}>{data.label}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-orange-400/70 pt-4 border-t border-orange-500/20">
                  <button className="hover:text-orange-300 transition-colors">←</button>
                  <span>Last 10.0 16 Nov 2026 95% (Instiled Event 3=-Dea V -Gut)</span>
                  <button className="hover:text-orange-300 transition-colors">→</button>
                </div>
              </div>

              {/* Stats Radar */}
              <div className="glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-orange-200 flex items-center gap-2">
                    <Target className="w-5 h-5 text-yellow-400" />
                    STATS OVERVIEW
                  </h3>
                </div>
                
                <div className="relative h-56 flex items-center justify-center mb-8">
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    {[0.25, 0.5, 0.75, 1].map((scale, idx) => (
                      <polygon
                        key={idx}
                        points="100,20 170,60 170,140 100,180 30,140 30,60"
                        fill="none"
                        stroke="#ea580c"
                        strokeWidth="1"
                        transform={`scale(${scale}) translate(${(1 - scale) * 100}, ${(1 - scale) * 100})`}
                        opacity={0.2 + idx * 0.1}
                      />
                    ))}
                    <polygon
                      points="100,35 155,65 155,135 100,165 45,135 45,65"
                      fill="url(#radarGradient)"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      filter="url(#glow)"
                    />
                    <text x="100" y="15" textAnchor="middle" fill="#fed7aa" fontSize="11" fontWeight="600">Headshots</text>
                    <text x="185" y="65" textAnchor="start" fill="#fed7aa" fontSize="11" fontWeight="600">KAST</text>
                    <text x="185" y="145" textAnchor="start" fill="#fed7aa" fontSize="11" fontWeight="600">Kills</text>
                    <text x="100" y="195" textAnchor="middle" fill="#fed7aa" fontSize="11" fontWeight="600">Deaths</text>
                    <text x="15" y="145" textAnchor="end" fill="#fed7aa" fontSize="11" fontWeight="600">Assists</text>
                    <text x="15" y="65" textAnchor="end" fill="#fed7aa" fontSize="11" fontWeight="600">Trades</text>
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {detailedStats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-xl hover:bg-orange-500/10 transition-all duration-300 group">
                      <span className="text-sm text-orange-300/80 font-medium group-hover:text-orange-200 transition-colors">{stat.label}</span>
                      <div className="flex gap-2 items-center">
                        <span className={`text-sm font-bold ${stat.highlight ? 'text-yellow-400' : 'text-white'}`}>
                          {stat.value}
                        </span>
                        {stat.sub && <span className="text-xs text-orange-400/50 font-medium">{stat.sub}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}