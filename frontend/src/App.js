// Import React and React Router components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import HomePage from './pages/HomePage.js';
import PageB from './pages/page_b.js'; // Import your target page
import What_we_do from './pages/to_do/What_we_do.js';
import For_Teachers from './pages/to_do/For_Teachers.js';
import For_Parents from './pages/to_do/For_Parents.js';
import Newsboard from './pages/to_do/Newsboard.js';
import About_Us from './pages/to_do/About_Us.js';
import Support_Us from './pages/to_do/Support_Us.js';


// Import CSS
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Common header */}
        <Header />

        {/* Define Routes */}
        <Routes>
          {/* Render HomePage for the root URL */}
          <Route path="/" element={<HomePage />} />

          {/* Additional route for PageB */}
          <Route path="/page_b" element={<PageB />} />
          <Route path="/What_we_do" element={<What_we_do />} />
          <Route path="/For_Teachers" element={<For_Teachers />} />
          <Route path="/For_Parents" element={<For_Parents />} />
          <Route path="/Newsboard" element={<Newsboard />} />
          <Route path="/About_Us" element={<About_Us />} />
          <Route path="/Support_Us" element={<Support_Us />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
