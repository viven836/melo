import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    nickname: "",
    friendName: "",
    email: "",
    password: "",
  });

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isLogin ? "Logging in" : "Signing up"} with:`, formData);

    if (isLogin) {
      navigate("/mood"); // Existing user goes straight to mood
    } else {
      navigate("/name-your-bot"); // New user names the bot first
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Vignette */}
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

      {/* Auth Box */}
      <div className="flex items-center justify-center z-10">
        <div>
          <div className="flex justify-center mb-6">
            <div className="flex bg-purple-700 rounded-full p-1">
              <button
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  !isLogin ? "bg-black text-white" : "text-white"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Sign In
              </button>
              <button
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  isLogin ? "bg-black text-white" : "text-white"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Log In
              </button>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-black border border-white p-6 rounded-md w-80"
          >
            {!isLogin && (
              <>
                <div className="mb-4">
                  <label className="block mb-1">Nickname</label>
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    className="w-full p-2 bg-black border border-white text-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Friend Name</label>
                  <input
                    type="text"
                    name="friendName"
                    value={formData.friendName}
                    onChange={handleChange}
                    className="w-full p-2 bg-black border border-white text-white"
                  />
                </div>
              </>
            )}

            <div className="mb-4">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-black border border-white text-white"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 bg-black border border-white text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-700 px-4 py-2 rounded-full text-white hover:bg-purple-800 transition"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
