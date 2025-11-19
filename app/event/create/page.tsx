'use client';

import { useState, ChangeEvent } from "react";

type EventForm = {
  title: string;
  image: string;
  date: string;
  venue: string;
  type: string;
};

export default function CreateEventPage() {
  const [form, setForm] = useState<EventForm>({
    title: "",
    image: "",
    date: "",
    venue: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);

    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      alert("Event created!");
      window.location.href = "/event";
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="p-10 text-white min-h-screen bg-black mt-10 flex-1 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Create New Event
      </h1>

      <div className="space-y-5 max-w-xl">
        {(Object.keys(form) as (keyof EventForm)[]).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key.toUpperCase()}
            value={form[key]}
            onChange={handleChange}
            className="w-full p-4 rounded bg-gray-900 border border-gray-700 
                       text-white"
          />
        ))}

        <button
          onClick={handleSubmit}
          disabled={loading}
        className="w-full cursor-pointer px-10 py-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold rounded-xl shadow-lg"
        >
          {loading ? "Creating..." : "Create Event"}
        </button>
      </div>
    </div>
  );
}
