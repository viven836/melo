import React, { useEffect, useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const emotionalLines = [
  "Feel your feelings. Let the music hold you.",
  "Use headphones for a deeper connection.",
  "You’re safe here. Just vibe.",
  "No rush. Just breathe and be.",
  "Let it out. Let it in.",
  "You're not alone in this frequency.",
];

function QuoteRotator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % emotionalLines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="flex justify-center items-center text-gray-400 text-lg italic transition-opacity duration-1000 ease-in-out">
      <FaHeadphones className="mr-2" />
      <span>{emotionalLines[currentIndex]}</span>
    </p>
  );
}

export default function HomePage() {
  const navigate = useNavigate(); // ✅ move this up here

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-pulse-vignette">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(128, 90, 213, 0.5) 40%, rgba(0, 0, 0, 0.9) 100%)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="z-10 text-center space-y-6">
        <h1
          className="text-5xl font-bold text-purple-600"
          style={{ fontFamily: "cursive" }}
        >
          melomood
        </h1>

        <QuoteRotator />

        <button
          onClick={() => navigate("/auth")} // ✅ now this will work
          className="bg-purple-700 px-6 py-2 rounded-full text-white hover:bg-purple-800 transition text-lg font-semibold"
        >
          Start
        </button>
      </div>
    </div>
  );
}
