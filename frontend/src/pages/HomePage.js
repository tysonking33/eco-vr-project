import React from 'react';
import IntroSection from '../components/IntroSection';
import FeaturesSection from '../components/FeaturesSection';
import TeamSection from '../components/TeamSection';
import NavigationBar from '../components/NavigationBar';
import Overview from '../components/Overview';

function HomePage() {
  return (
    <div>
      <IntroSection />
      <NavigationBar />
      <Overview />
      <FeaturesSection />
      <TeamSection />
    </div>
  );
}

export default HomePage;
