import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Weather from './components/Weather';
import ContactForm from './components/ContactForm';

function App() {
  const [city, setCity] = useState('London');

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar setCity={setCity} />
        <div style={{ marginLeft: '220px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Weather city={city} />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
