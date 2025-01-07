import React, { useState } from "react";

const PopularQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase with a valid receipt. Items must be unused and in original packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping fees and delivery times vary based on location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking link provided in your confirmation email or by logging into your account.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and other secure payment methods. Please check the checkout page for the full list.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Orders can be canceled within 24 hours of placing them. Contact our support team for assistance.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFDAB9] text-black p-6 sm:p-12 rounded-lg shadow-lg  mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Questions</h2>
      <div className="space-y-4 max-w-4xl mx-auto">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg overflow-hidden"
          >
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

export default PopularQuestions;
