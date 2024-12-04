import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <header className="bg-green-500 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Make the h1 clickable */}
        <HashLink to="/" className="text-2xl font-bold hover:underline">
          Generations Unite
        </HashLink>
        <ul className="flex space-x-4">
          {/* Use HashLink for smooth scrolling */}
          <li>
            <HashLink to="/" smooth className="hover:underline">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="/#features" smooth className="hover:underline">
              Features
            </HashLink>
          </li>
          <li>
            <HashLink to="/#team" smooth className="hover:underline">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
