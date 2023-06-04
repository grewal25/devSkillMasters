"use client";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex", overflow: "hidden" }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              transform: `translateX(${index === currentIndex ? "0" : "100%"})`,
              transition: "transform 0.3s ease-in-out",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#e0e0e0",
            }}
          >
            <span style={{ fontSize: "24px" }}>{item}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
