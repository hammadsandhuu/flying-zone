import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PackageDatePicker = ({ label = "Departure Date", availableDates = [], style = "" }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Convert date strings to Date objects and ensure they're valid
  // Use UTC to avoid timezone issues
  const availableDatesObjects = availableDates
    .map(dateStr => {
      const [year, month, day] = dateStr.split('-').map(Number);
      const date = new Date(Date.UTC(year, month - 1, day));
      return isNaN(date.getTime()) ? null : date;
    })
    .filter(date => date !== null);

  // Add CSS styles for available/disabled dates
  useEffect(() => {
    const styleId = 'package-date-picker-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .package-date-picker .react-datepicker__day--disabled {
        opacity: 0.3 !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
        text-decoration: line-through;
        background-color: transparent !important;
      }
      .package-date-picker .available-date {
        background-color: #e3f2fd !important;
        font-weight: 600 !important;
        color: #1976d2 !important;
      }
      .package-date-picker .available-date:hover {
        background-color: #1976d2 !important;
        color: white !important;
      }
      .package-date-picker .react-datepicker__day--highlighted {
        background-color: #1976d2 !important;
        color: white !important;
        border-radius: 0.3rem;
        font-weight: 600;
      }
      .package-date-picker .react-datepicker__day--selected {
        background-color: #1976d2 !important;
        color: white !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Helper function to format date as YYYY-MM-DD (UTC-based to avoid timezone issues)
  const formatDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Filter function to only allow available dates - disable all others
  const filterDate = (date) => {
    if (availableDates.length === 0) {
      // If no dates specified, allow future dates only
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }
    
    // Format date to YYYY-MM-DD for comparison (using local date, not UTC)
    const dateStr = formatDateString(date);
    return availableDates.includes(dateStr);
  };

  // Custom day class name to highlight available dates only
  const dayClassName = (date) => {
    if (availableDates.length === 0) return '';
    const dateStr = formatDateString(date);
    if (availableDates.includes(dateStr)) {
      return 'available-date';
    }
    return '';
  };

  return (
    <div className="searchbox-input">
      <label>{label}</label>
      <div className={`custom-select-dropdown ${style}`}>
        <div className="select-input">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MMM d, yyyy"
            placeholderText={availableDates.length > 0 ? "Select available date" : "Select departure date"}
            filterDate={filterDate}
            dayClassName={dayClassName}
            calendarClassName="package-date-picker"
            strictParsing
          />
          <i className="bi bi-chevron-down" />
        </div>
      </div>
    </div>
  );
};

export default PackageDatePicker;

