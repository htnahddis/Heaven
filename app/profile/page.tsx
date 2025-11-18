'use client';

import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function PlayerProfile() {
  const [activeTab, setActiveTab] = useState('ALL/T');
  const [activeFilter, setActiveFilter] = useState('Rating');

  const statBars = [
    { label: 'Rating', value: 2.0, max: 2.5, color: 'bg-blue-500' },
    { label: 'DPR', value: 140, max: 200, color: 'bg-white' },
    { label: 'KAST', value: 80, max: 100, color: 'bg-blue-500' },
    { label: 'Impact', value: 100, max: 150, color: 'bg-white' },
    { label: 'ADR', value: 140, max: 200, color: 'bg-blue-500' },
    { label: 'KPR', value: 0.80, max: 1.0, color: 'bg-white' },
  ];

  const hitRateData = [
    { date: '04.01', value: 12 },
    { date: '05.16', value: 18 },
    { date: '02.26', value: 16 },
    { date: '03.09', value: 14 },
    { date: '03.02', value: 22 },
    { date: '03.16', value: 12 },
    { date: '03.07', value: 16 },
    { date: '03.07', value: 18 },
    { date: '03.09', value: 16 },
    { date: '03.02', value: 14 },
  ];

  const radarStats = [
    { label: 'Headshots', value: 85 },
    { label: 'KAST', value: 90 },
    { label: 'Kills', value: 75 },
    { label: 'Deaths', value: 40 },
    { label: 'Assists', value: 70 },
    { label: 'Trades', value: 65 },
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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="text-3xl font-bold text-orange-400">H</div>
            <nav className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Matches</a>
              <a href="#" className="text-gray-400 hover:text-white">Teams</a>
              <a href="#" className="text-white border-b-2 border-orange-400 pb-1">Players</a>
              <a href="#" className="text-gray-400 hover:text-white">Competition</a>
              <a href="#" className="text-gray-400 hover:text-white">Tutorials</a>
              <a href="#" className="text-gray-400 hover:text-white">Preps</a>
              <a href="#" className="text-gray-400 hover:text-white">Support</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search player, team..."
                className="bg-gray-800 border border-gray-700 rounded px-9 py-2 text-sm w-64 focus:outline-none focus:border-gray-600"
              />
            </div>
            <button className="text-sm text-gray-400 hover:text-white">Faker *</button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 py-4 border-t border-gray-800">
          <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center">
            <span className="text-xs">LoL</span>
          </div>
          <div className="w-10 h-10 bg-gray-800 rounded opacity-50"></div>
          <div className="w-10 h-10 bg-gray-800 rounded opacity-50"></div>
          <div className="w-10 h-10 bg-gray-800 rounded opacity-50"></div>
          <div className="w-10 h-10 bg-gray-800 rounded opacity-50"></div>
          <div className="w-10 h-10 bg-gray-800 rounded opacity-50"></div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-6 py-3 text-xs text-gray-500">
        / Hall Matches / LoL Teams / <span className="text-white">FAKER</span>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Player Info */}
          <div className="col-span-3">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/300/300"
                alt="Player"
                className="w-full aspect-square object-cover bg-gray-800"
              />
              <div className="p-4 text-center text-xs text-gray-500">
                RECENT FORM
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="col-span-9">
            {/* Player Header */}
            <div className="mb-6">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">FAKER</h1>
                  <p className="text-sm text-gray-400">FAKER [INA] Top 20 IGL 27 years</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-700 rounded text-sm hover:bg-gray-800">
                    VIEW CHAMPIONSHIPS
                  </button>
                  <button className="px-4 py-2 bg-gray-800 rounded text-sm hover:bg-gray-700">
                    ADD TO COMPARISON
                  </button>
                </div>
              </div>

              {/* Stats Bars */}
              <div className="space-y-2">
                {statBars.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-16 text-sm text-gray-400">{stat.label}</div>
                    <div className="flex-1 bg-gray-800 h-5 rounded-sm overflow-hidden relative">
                      <div
                        className={`${stat.color} h-full transition-all`}
                        style={{ width: `${(stat.value / stat.max) * 100}%` }}
                      ></div>
                      <span className="absolute right-2 top-0 text-xs leading-5 text-gray-900 font-bold">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 border-b border-gray-800">
              {['RECENT FORM', 'GAMES', 'EVENT TYPE', 'MAPS'].map((tab) => (
                <button
                  key={tab}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-600"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6">
              <button className="px-4 py-1.5 bg-blue-600 rounded text-sm font-medium">
                Rating
              </button>
              {['ALL/T', 'Kills', 'Deaths', 'Assist', 'S2R', 'Illustrious', 'K/D Diff', 'Dea KS CST'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-1.5 bg-gray-800 rounded text-sm font-medium hover:bg-gray-700"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-2 gap-6">
              {/* Hit Rate Chart */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-sm font-medium mb-4">HIT RATE</h3>
                <div className="mb-4 text-xs text-gray-500">FAKER (TI)</div>
                
                <div className="flex gap-4 mb-4 text-xs">
                  <button className="px-3 py-1 bg-gray-800 rounded">Intra</button>
                  <button className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700">Opp</button>
                  <button className="px-3 py-1 bg-gray-800 rounded hover:bg-gray-700">Under</button>
                </div>

                <div className="flex justify-between mb-2 text-xs text-gray-500">
                  <span>Full</span>
                  <span>LW</span>
                  <span>LB</span>
                  <span>W Gen 5</span>
                </div>

                <div className="flex justify-between mb-4 text-xs">
                  <span>0.3</span>
                  <span>30.7</span>
                  <span>FI</span>
                  <span>11.5</span>
                </div>

                {/* Bar Chart */}
                <div className="relative h-48 flex items-end gap-1 mb-2">
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-600">
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                  </div>
                  <div className="ml-8 flex-1 flex items-end justify-between gap-1">
                    {hitRateData.map((data, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-600 rounded-t transition-all hover:bg-blue-500"
                          style={{ height: `${(data.value / 25) * 100}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dates */}
                <div className="ml-8 flex justify-between text-xs text-gray-600">
                  {hitRateData.map((data, idx) => (
                    <span key={idx}>{data.date}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <button className="text-gray-500">←</button>
                  <span className="text-gray-500">Last 10.0 16 Nov 2026 95% (Instiled Event 3=-Dea V -Gut) →</span>
                </div>
              </div>

              {/* Stats Radar */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-sm font-medium mb-4">STATS</h3>
                
                {/* Radar Chart Placeholder */}
                <div className="relative h-48 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Hexagon grid */}
                    {[0.25, 0.5, 0.75, 1].map((scale, idx) => (
                      <polygon
                        key={idx}
                        points="100,20 170,60 170,140 100,180 30,140 30,60"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="0.5"
                        transform={`scale(${scale}) translate(${(1 - scale) * 100}, ${(1 - scale) * 100})`}
                      />
                    ))}
                    {/* Data polygon */}
                    <polygon
                      points="100,35 155,65 155,135 100,165 45,135 45,65"
                      fill="#3B82F6"
                      fillOpacity="0.6"
                      stroke="#3B82F6"
                      strokeWidth="2"
                    />
                    {/* Labels */}
                    <text x="100" y="15" textAnchor="middle" fill="#9CA3AF" fontSize="10">Headshots</text>
                    <text x="180" y="65" textAnchor="start" fill="#9CA3AF" fontSize="10">KAST</text>
                    <text x="180" y="145" textAnchor="start" fill="#9CA3AF" fontSize="10">Kills</text>
                    <text x="100" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="10">Deaths</text>
                    <text x="20" y="145" textAnchor="end" fill="#9CA3AF" fontSize="10">Assists</text>
                    <text x="20" y="65" textAnchor="end" fill="#9CA3AF" fontSize="10">Trades</text>
                  </svg>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {detailedStats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{stat.label}</span>
                      <div className="flex gap-2">
                        <span className={stat.highlight ? 'text-green-400' : ''}>{stat.value}</span>
                        {stat.sub && <span className="text-gray-600">{stat.sub}</span>}
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