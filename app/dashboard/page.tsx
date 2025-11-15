import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>

      {/* Game Carousel Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {[
            { title: 'FORTNITE', subtitle: 'CHAPTER 5 - SEASON 5', image: '/game1.jpg', bg: 'from-blue-900 to-cyan-700' },
            { title: 'CS:GO', subtitle: 'COUNTER STRIKE / GLOBAL OFFENSE', image: '/game2.jpg', bg: 'from-orange-900 to-red-700' },
            { title: 'VALORANT', subtitle: 'TACTICAL SHOOTER', image: '/game3.jpg', bg: 'from-red-900 to-pink-700' }
          ].map((game, i) => (
            <div key={i} className="min-w-[400px] h-[200px] rounded-xl overflow-hidden snap-start relative group cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-r ${game.bg} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
              <div className="relative h-full p-6 flex flex-col justify-end">
                <p className="text-xs text-gray-300 mb-1">{game.subtitle}</p>
                <h3 className="text-3xl font-bold">{game.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Trending Games Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Currently Trending Games</h2>
          <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all">
            SEE ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { color: 'from-red-900 to-red-700', followers: 40 },
            { color: 'from-purple-900 to-purple-700', followers: 40 },
            { color: 'from-gray-900 to-gray-700', followers: 40 },
            { color: 'from-orange-900 to-pink-700', followers: 40 }
          ].map((game, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`h-[200px] rounded-xl bg-gradient-to-br ${game.color} mb-4 transform group-hover:scale-105 transition-transform duration-300 group-hover:shadow-2xl group-hover:shadow-orange-500/30`}></div>
              <div className="flex items-center gap-2 text-orange-400">
                <span className="text-xl">🔥</span>
                <span className="font-semibold">{game.followers} Followers</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Game Section - Call of Duty */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-gray-900 opacity-80"></div>
            <div className="relative h-full flex items-center justify-center text-white text-6xl font-bold">
              COD
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm text-gray-400">
              <span>Home</span> <span className="text-orange-400">/ COD</span>
            </div>
            
            <h2 className="text-5xl font-bold">Call of Duty:Ghosts</h2>
            
            <p className="text-gray-300 leading-relaxed">
              Call of Duty: Ghosts is a first-person shooter set in a near-apocalyptic world. Where players control a group of elite soldiers fighting for survival. The game features intense action-packed gameplay, a gripping story focused on brotherhood and resilience, and engaging dynamics environments, all while focusing on tactical combat and a deep dive into about survival and struggle.
            </p>

            <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all">
              Get more
            </button>
          </div>
        </div>
      </div>

      {/* Find Your Dream ORG Section */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-400 mb-2">
            <span>Home</span> <span className="text-orange-400">/ COD</span>
          </p>
          <h2 className="text-5xl font-bold mb-16">Find Your Dream ORG Today!</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <p className="text-gray-400">Gaming Setup Image</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Search by category</h3>
            
            <div className="space-y-4">
              {[
                { icon: '👤', label: 'FULL TIME MENTOR', color: 'from-green-500 to-emerald-600' },
                { icon: '🎯', label: 'COACH', color: 'from-green-500 to-emerald-600' },
                { icon: '👥', label: 'IN GAME LEADER', color: 'from-green-500 to-emerald-600' },
                { icon: '⚔️', label: 'ASSUALTEE', color: 'from-green-500 to-emerald-600' }
              ].map((category, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="text-white text-sm">{category.icon}</span>
                  </div>
                  <span className="text-lg font-semibold group-hover:text-orange-400 transition-colors">{category.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard