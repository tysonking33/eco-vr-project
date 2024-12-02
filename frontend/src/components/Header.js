// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-green-500 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Eco VR Project</h1>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
