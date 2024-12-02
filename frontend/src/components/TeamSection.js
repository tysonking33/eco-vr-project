import React from 'react';
import fortniteImage from '../images/fortnite.png';
import beanMan from '../images/kbean.png';

function TeamSection() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Swag Lords</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-md flex items-center">
            {/* Circular Profile Picture */}
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src={fortniteImage}
                alt="Harry Hogan"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
              />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold">Harry Hogan</h3>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-md flex items-center">
            {/* Circular Profile Picture */}
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img
                src={beanMan}
                alt="OG Bean"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
              />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold">OG Bean</h3>
              <p>All the Swag</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
