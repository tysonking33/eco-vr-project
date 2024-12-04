import React from 'react';
import fortniteImage from '../images/fortnite.png';
import beanMan from '../images/kbean.png';

function SingleMember({ location, description, altName }) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-md flex items-center">
      {/* Circular Profile Picture */}
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img
          src={location}
          alt={altName}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'top' }}
        />
      </div>
      {/* Text */}
      <div>
        <h3 className="text-xl font-semibold">{description[0]}</h3>
        {description.slice(1).map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <section id="team" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Who we are - Our Swagstronauts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SingleMember
            location={fortniteImage}
            description={["Declan", "Head Research Analyst"]}
            altName="Declan"
          />
          <SingleMember
            location={beanMan}
            description={["Flynn", "Artistic Design Director"]}
            altName="Flynn"
          />
          <SingleMember
            location={fortniteImage}
            description={["James", "Marketing and Communications Manager"]}
            altName="James"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SingleMember
            location={beanMan}
            description={["Josh", "Quality, Risk and WHS Manager"]}
            altName="Josh"
          />
          <SingleMember
            location={fortniteImage}
            description={["Royce", "Chief Project Manager"]}
            altName="Royce"
          />
          <SingleMember
            location={beanMan}
            description={["Tyson", "Innovation Director"]}
            altName="Tyson"
          />
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
