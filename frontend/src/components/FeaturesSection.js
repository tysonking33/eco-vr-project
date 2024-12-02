// src/components/FeaturesSection.js
import React from 'react';

function FeaturesSection() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
            <p>Engage with interactive lessons that teach sustainable practices in a fun and immersive way.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">3D Simulations</h3>
            <p>Experience realistic 3D simulations of eco-friendly activities and explore virtual ecosystems.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Problem Solving Challenges</h3>
            <p>Test your problem-solving skills with challenges that simulate real-world environmental issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
