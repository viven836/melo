import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NameYourBot() {
  const [friendName, setFriendName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Friend name submitted:", friendName);
    navigate("/mood"); // 🔮 Teleport to Mood Selector
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-center space-y-6"
      >
        <h1 className="text-2xl font-semibold">Give your friend a name</h1>

        <input
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          placeholder="Type a name..."
          className="w-64 px-4 py-2 bg-black border border-white rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700"
        />

        <button
          type="submit"
          className="bg-purple-700 px-6 py-2 rounded-full text-white hover:bg-purple-800 transition"
        >
          Next
        </button>
      </form>
    </div>
  );
}
