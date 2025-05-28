import React, { useState, useRef, useEffect } from "react";

const ChatScreen = ({
  mood = localStorage.getItem("mood"),
  username = localStorage.getItem("username"),
  botName = localStorage.getItem("botName"),
}) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: `Hey there! How are you feeling today?` },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotReply = (userText) => {
    const replies = {
      sad: [
        "I’m really sorry you're feeling this way 💙",
        "Do you want to talk about what's been heavy on your heart?",
        "You’re not alone, I promise. I'm here to sit with you in this moment.",
      ],
      happy: [
        "Ayyyy that's what I love to hear! 😄",
        "Tell me what’s making your heart dance today!",
        "You deserve all the joy you’re feeling rn ✨",
      ],
      anxious: [
        "Let’s do a breathing check together: in… hold… out…",
        "Anxiety is loud, but I’ll be your calm.",
        "You’re doing so much better than you think 🤍",
      ],
      angry: [
        "Rage is real. Wanna scream into the void together? 😤🕳️",
        "What triggered you? Let’s unpack it safely.",
        "Even the strongest storms pass. I’m right here with you.",
      ],
      tired: [
        "Rest is resistance, baby. You’ve earned it 🛌",
        "Let it all go for a moment. Close your eyes. Breathe.",
        "Need a pep talk or a nap reminder? 👀",
      ],
      neutral: [
        "Hey hey, just checking in — how’s your head, heart, and soul today?",
        "We don’t have to feel everything all at once. Wanna just chat casually?",
        "Even ordinary days deserve love 🌤️",
      ],
    };

    const options = replies[mood] || replies["neutral"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);
    setTimeout(() => {
      const botText = getBotReply(input);
      const botReply = {
        sender: "bot",
        text: botText,
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="relative flex flex-col h-screen p-4 bg-black text-white overflow-hidden">
      {/* Vignette Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-pulse-vignette">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(128, 90, 213, 0.7) 40%, rgba(0, 0, 0, 0.9) 100%)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* Chat Content Layer */}
      <div className="relative z-10 flex-1 overflow-y-scroll space-y-4 mb-4 px-2 sm:px-4 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-900">
        {messages.map((msg, i) => {
          const isUser = msg.sender === "user";
          const name = isUser ? username : botName;

          return (
            <div
              key={i}
              className={`flex flex-col max-w-xs ${
                isUser
                  ? "self-end ml-auto items-end"
                  : "self-start mr-auto items-start"
              }`}
            >
              <span className="text-xs text-gray-400 mb-1">{name}</span>
              <div
                className={`p-3 rounded-xl ${
                  isUser
                    ? "bg-purple-700 text-white"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex flex-col max-w-xs self-start mr-auto items-start">
            <span className="text-xs text-gray-400 mb-1">{botName}</span>
            <div className="bg-gray-800 text-gray-200 p-3 rounded-xl animate-pulse">
              Typing...
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="relative z-10 flex gap-2">
        <input
          className="flex-1 bg-gray-900 border border-gray-600 p-2 rounded text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-purple-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your feels..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
