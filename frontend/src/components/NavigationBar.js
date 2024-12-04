import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function TopBar() {
    return (
        <nav className="bg-green-600 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <ul className="flex space-x-6 relative">
                    <li className="group relative">
                        <span className="cursor-pointer">What we do</span>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 p-2 rounded shadow-md">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/What_we_do#improve-sustainability">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        How we can improve understanding of sustainability
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/What_we_do#help-education">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Where can we help education
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="group relative">
                        <span className="cursor-pointer">For Teachers</span>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 p-2 rounded shadow-md">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/For_Teachers#program-overview">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Program overview
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/For_Teachers#work-with-schools">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        How we work with schools
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/For_Teachers#teaching-resources">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Free teacher resources
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="group relative">
                        <span className="cursor-pointer">For Parents</span>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 p-2 rounded shadow-md">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/For_Parents#Unite-session">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        What happens during a Unite session
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/For_Parents#activities-and-resources">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Activities and resources
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="group relative">
                        <span className="cursor-pointer">Newsboard</span>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 p-2 rounded shadow-md">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/Newsboard#media">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Media
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/Newsboard#progress-report">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Progress report
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="group relative">
                        <span className="cursor-pointer">Newsboard</span>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 p-2 rounded shadow-md">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/Newsboard#media">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Media
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/Newsboard#progress-report">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Progress report
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="group relative">
                        <span className="cursor-pointer">About Us</span>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 p-2 rounded shadow-md">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/About_Us#our-mission">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Our mission
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/About_Us#government-partners">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Government partners
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/About_Us#financial-backers">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Financial backers
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/About_Us#code-of-conduct">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Code Of Conduct
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/About_Us#key-principles">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Key Principles
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/About_Us#future-events">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Future events
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="group relative">
                        <span className="cursor-pointer">Support Us</span>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white text-black mt-2 p-2 rounded shadow-md">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/Support_Us#Donate">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Donate
                                    </button>
                                </Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                <Link smooth to="/Support_Us#Shop">
                                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                                        Shop
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default TopBar;
