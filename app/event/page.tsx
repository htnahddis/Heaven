'use client';

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';

type EventItem = {
  id: number;
  image: string;
  title: string;
  date: string;
  venue: string;
  type: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [lookingFor, setLookingFor] = useState('');
  const [location, setLocation] = useState('');
  const [when, setWhen] = useState('');

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();

        const list: EventItem[] = Array.isArray(data) ? data : data.events;
        setEvents(list);
      } catch (error) {
        console.error("Error loading events:", error);
      }
    }

    loadEvents();
  }, []);

  const filteredEvents: EventItem[] = events.filter(event => {
    const matchesTitle =
      !lookingFor ||
      event.title.toLowerCase().includes(lookingFor.toLowerCase());

    const matchesLocation =
      !location ||
      event.venue.toLowerCase().includes(location.toLowerCase());

    const matchesDate =
      !when ||
      event.date.toLowerCase().includes(when.toLowerCase());

    return matchesTitle && matchesLocation && matchesDate;
  });

  const handleClearSearch = () => {
    setLookingFor('');
    setLocation('');
    setWhen('');
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative">
          <div className="relative h-[55rem] overflow-hidden">

            {/* Background Video */}
            <div className="absolute inset-0">
              <div className="h-full w-full relative">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/event/banner-video.mp4" type="video/mp4" />
                </video>

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
              <div className="w-full max-w-5xl bg-black/30 backdrop-blur-xl rounded-xl p-3 flex items-center gap-3 border border-orange-500/20 shadow-xl">

                <div className="flex-1 flex items-center gap-3 bg-white rounded-lg px-5 py-4">
                  <Search className="w-5 h-5 text-orange-500" />
                  <input
                    type="text"
                    placeholder="Search for events"
                    value={lookingFor}
                    onChange={(e) => setLookingFor(e.target.value)}
                    className="flex-1 outline-none text-gray-900"
                  />
                </div>

                <div className="flex-1 flex items-center gap-3 bg-white rounded-lg px-5 py-4">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 outline-none text-gray-900"
                  />
                </div>

                <div className="flex-1 flex items-center gap-3 bg-white rounded-lg px-5 py-4">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <input
                    type="text"
                    placeholder="When"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    className="flex-1 outline-none text-gray-900"
                  />
                </div>

                <button
                  onClick={handleClearSearch}
                  className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white p-4 rounded-lg shadow-lg"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* EVENTS */}
        <div className="px-6 py-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-7">
            Upcoming <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Events</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredEvents.length === 0 && (
              <p className="col-span-full text-center text-neutral-400">
                No events found.
              </p>
            )}

            {filteredEvents.map((event, index) => (
              <div
                key={`${event.id}-${index}`}
                className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-700 shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-neutral-400">{event.date}</p>
                  <p className="text-neutral-500">{event.venue}</p>
                  <span className="inline-block text-sm bg-neutral-800 px-3 py-1 rounded-full border border-neutral-600 mt-1">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}

          </div>

          {/* CREATE EVENT BUTTON */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => window.location.href = "/event/create"}
              className="px-10 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold rounded-xl shadow-lg"
            >
              Create your own event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
