import React, { useState } from "react";
import questions from "../data/faq"; // Importing FAQ data

// Defining the PopularQuestions component
const PopularQuestions = () => {
  // State to manage the currently active question index
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      id="popularquestion"
      className="bg-[#FFDAB9] text-black p-6 sm:p-12 rounded-lg shadow-lg mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Popular Questions</h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {questions.map((item, index) => (
          <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center bg-[#FFF5EE] px-4 py-3 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            >
              <span>{item.question}</span>
              <span className="ml-4">
                {activeIndex === index ? (
                  <svg
                    className="w-5 h-5 transform rotate-180 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="bg-[#FFF5EE] px-4 py-3 text-gray-800">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting the PopularQuestions component
export default PopularQuestions;
