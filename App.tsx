// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Your code here
    setBookingData({
        ...bookingData,
        [e.target.name]: e.target.value,
    });
  }


;

  return (
    <div className="App">
      <h1>Booking Page</h1>
   <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={bookingData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={bookingData.time}
            onChange={handleInputChange}
            required
          />
        </label>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default App;

