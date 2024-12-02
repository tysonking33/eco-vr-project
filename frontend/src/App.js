// Import React
import React from 'react';

// Import your custom components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TeamSection from './components/TeamSection';

// Remove the default logo import and CSS import if not needed
import './App.css';

function App() {
  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Hero section component */}
      <HeroSection />

      {/* Features section component */}
      <FeaturesSection />

      {/* Features section component */}
      <TeamSection />
    </div>
  );
}

export default App;
