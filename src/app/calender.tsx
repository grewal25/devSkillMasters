"use client";
import React, { useState } from "react";

const Calendar: React.FC = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const renderDaysOfWeek = () => {
    return days.map((day) => (
      <div key={day} className="text-center text-gray-600 font-medium">
        {day}
      </div>
    ));
  };

  const renderCalendarDays = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarDays = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="text-center" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(
        <div key={day} className="text-center border border-gray-200 p-2">
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 0 ? 11 : prevMonth - 1;
      setCurrentYear((prevYear) => (prevMonth === 0 ? prevYear - 1 : prevYear));
      return newMonth;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = prevMonth === 11 ? 0 : prevMonth + 1;
      setCurrentYear((prevYear) =>
        prevMonth === 11 ? prevYear + 1 : prevYear
      );
      return newMonth;
    });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between mb-2">
        <button
          className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={goToPreviousMonth}
        >
          Previous
        </button>
        <div className="text-lg font-medium">{`${new Intl.DateTimeFormat(
          "en-US",
          {
            month: "long",
            year: "numeric",
          }
        ).format(new Date(currentYear, currentMonth))}`}</div>
        <button
          className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={goToNextMonth}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderDaysOfWeek()}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;
