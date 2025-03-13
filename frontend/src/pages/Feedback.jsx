import React, { useState } from "react";
import feedbackPageBg from "../assets/feedback_page_bg.jpg"; 
import feedbackBg from "../assets/feedback_bg.jpg";

const Feedback = () => {
  const [rating, setRating] = useState(1);

  const ratings = [
    { label: "Worst", emoji: "😣" },
    { label: "Not Good", emoji: "😟" },
    { label: "Fine", emoji: "😐" },
    { label: "Look Good", emoji: "🙂" },
    { label: "Very Good", emoji: "😃" },
  ];

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${feedbackPageBg})` }}
    >
      <div
        className="backdrop-blur-lg rounded-lg shadow-lg p-6 w-96 border border-white/20 bg-cover bg-center"
        style={{ backgroundImage: `url(${feedbackBg})` }}
      >
        <button className="text-white text-sm mb-3">&larr; Back</button>
        <h2 className="text-lg font-semibold text-center text-white mb-4">Share your Experience</h2>

        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
            <input type="text" placeholder="Name" className="border p-2 rounded w-1/2 bg-white/20 text-white placeholder-white" />
            <input type="text" placeholder="Contact Number" className="border p-2 rounded w-1/2 bg-white/20 text-white placeholder-white" />
          </div>
          <input type="email" placeholder="Email Address" className="border p-2 rounded bg-white/20 text-white placeholder-white" />

          <div className="text-center my-2 text-white">Share your experience...</div>

          <div className="flex justify-between px-2">
            {ratings.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className={`text-2xl ${rating === index ? "text-yellow-400" : "text-gray-400"}`}>
                  {item.emoji}
                </span>
                <span className="text-xs text-white">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Slider for Rating */}
          <input
            type="range"
            min="0"
            max="4"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full accent-green-400"
          />

          <textarea placeholder="Add your comments..." className="border p-2 rounded h-20 bg-white/20 text-white placeholder-white"></textarea>

          <button className="bg-purple-700 text-white p-2 rounded mt-3 w-full hover:bg-purple-800">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
