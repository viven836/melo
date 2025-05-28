// File: src/App.tsx (or App.jsx)
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthForm from "./pages/SignIn";
import NameYourBot from "./pages/NameYourBot";
import MoodSelector from "./components/MoodSelector";
import ChatScreen from "./components/ChatScreen";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/name-your-bot" element={<NameYourBot />} />
        <Route path="/mood" element={<MoodSelector />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </div>
  );
}

export default App;
