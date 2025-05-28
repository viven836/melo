import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MoodSelector = () => {
  const [mood, setMood] = useState("");
  const [customMood, setCustomMood] = useState("");
  const navigate = useNavigate();

  const handleSelect = (m) => {
    setMood(m);
    localStorage.setItem("mood", m);
    navigate("/chat");
  };

  const handleCustomSubmit = () => {
    const trimmed = customMood.trim();
    if (trimmed === "") return;
    localStorage.setItem("mood", trimmed);
    navigate("/chat");
  };

  const moods = ["Happy", "Sad", "Anxious", "Tired", "Excited"];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Vignette Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-pulse-vignette">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(128, 90, 213, 0.4) 40%, rgba(0, 0, 0, 0.9) 100%)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* Mood Selector Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen gap-6 px-4">
        <h1 className="text-3xl font-bold">How are you feeling?</h1>

        <div className="flex gap-4 flex-wrap justify-center">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => handleSelect(m)}
              className="px-6 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
            >
              {m}
            </button>
          ))}
        </div>

        <div className="text-gray-400 text-lg">or describe in one word</div>

        <div className="flex gap-2">
          <input
            type="text"
            value={customMood}
            onChange={(e) => setCustomMood(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCustomSubmit()}
            placeholder="e.g. nostalgic"
            className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-purple-500 placeholder-gray-400"
          />

          <button
            onClick={handleCustomSubmit}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodSelector;
