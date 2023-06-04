"use client";
import React, { useState } from "react";

export default function FandQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const accordionItems = [
    {
      title: "when does the bootcamp starts and timings?",
      content:
        "Content for Accordion Item 1 Content for Accordion Item 1 Content for Accordion Item 1",
    },
    {
      title: "Is it live bootcamp?",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Will I get the recording?",
      content: "Content for Accordion Item 3",
    },
    {
      title: "Will notes be provided?",
      content: "Content for Accordion Item 3",
    },
    {
      title: "What are the prerequisites of the course?",
      content: "Content for Accordion Item 3",
    },
    {
      title: "Do you offer refund if I am not satisfied?",
      content: "Content for Accordion Item 3",
    },
  ];

  return (
    <div className="pt-4 lg:p-20">
      <h2 className="text-center font-bold text-xl">
        Frequently Asked Questions
      </h2>
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={`border rounded-md  my-4 ${
            activeIndex === index ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <button
            className="flex items-center justify-between w-full p-4 focus:outline-none"
            onClick={() => handleAccordionToggle(index)}
          >
            <span className="text-lg font-medium">{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 transform ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
