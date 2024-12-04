import React from 'react';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';
import DOE from '../../images/Gov_Partners/DOE.png';
import DoCCEEW from '../../images/Gov_Partners/DoCCEEW.png';
import ARC from '../../images/Gov_Partners/ARC.png';

import BCS from '../../images/Corporate_Partners/BCS.png';
import WWF from '../../images/Corporate_Partners/WWF.png';

function About_Us() {
    return (
        <>
            <NavigationBar />
            <div className="container mx-auto py-16 text-center">
                <div id="our-mission">
                    <h1 className="text-4xl font-bold mb-4">Our mission</h1>
                    <p className="text-lg">Through collaboration, innovation, and a steadfast commitment to educational excellence, we seek to inspire a future where technology and human ingenuity work together to unlock limitless potential in every learner.</p>
                </div>
                <br></br>

                <div id="government-partners">
                    <h1 className="text-4xl font-bold mb-4">Potential Government partners</h1>

                    {/* Flex container for images */}
                    <div className="flex justify-center mt-4">
                        <img src={DOE} alt="DOE" className="mx-2 w-24 h-12 object-contain" />
                        <img src={DoCCEEW} alt="DoCCEEW" className="mx-2 w-24 h-12 object-contain" />
                        <img src={ARC} alt="ARC" className="mx-2 w-24 h-12 object-contain" />
                    </div>
                </div>
                <br></br>

                <div id="financial-backers">
                    <h1 className="text-4xl font-bold mb-4">Potential Corporate partners</h1>

                    {/* Flex container for images */}
                    <div className="flex justify-center mt-4">
                        <img src={BCS} alt="BCS" className="mx-2 w-24 h-12 object-contain" />
                        <img src={WWF} alt="WWF" className="mx-2 w-24 h-12 object-contain" />
                    </div>
                </div>
                <br></br>

                <div id="code-of-conduct">
                    <h1 className="text-4xl font-bold mb-4">Code Of Conduct</h1>

                    {/* Two-column grid layout for the code of conduct */}
                    <div className="grid grid-cols-2 gap-4 mt-4 text-left">
                        <div>
                            <ul className="list-disc pl-5">
                                <li>Professional Integrity</li>
                                <li>Respect and Inclusion</li>
                                <li>Ethical Technology Development</li>
                                <li>Commitment to Education</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-disc pl-5">
                                <li>Collaboration and Teamwork</li>
                                <li>Social Responsibility</li>
                                <li>Enforcement and Accountability</li>
                                <li>Continuous Improvement</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>

                <div id="key-principles">
                    <h1 className="text-4xl font-bold mb-4">Key Mission Principles</h1>
                    <div className="space-y-4">
                        <div>
                            <strong>Innovation:</strong>
                            <p>Harness cutting-edge technologies to create solutions that enhance teaching and learning.</p>
                        </div>
                        <br />
                        <div>
                            <strong>Accessibility and Equity:</strong>
                            <p>Strive to eliminate barriers to learning by developing tools that are affordable, inclusive, and adaptable to diverse needs.</p>
                        </div>
                        <br />
                        <div>
                            <strong>Empowering Educators:</strong>
                            <p>Design our software to assist educators by simplifying their work, and provide actionable insights allowing them to focus on what they do best—nurturing minds and inspiring growth.</p>
                        </div>
                        <br />
                        <div>
                            <strong>Data Privacy and Ethics:</strong>
                            <p>Trust is the cornerstone of our relationships with users. We prioritize user privacy and data security, ensuring that our products comply with all regulations and ethical standards.</p>
                        </div>
                        <br />
                        <div>
                            <strong>Sustainability and Social Impact:</strong>
                            <p>Beyond technological advancements, we aim to contribute to the broader societal good.</p>
                        </div>
                    </div>
                </div>
                <br></br>

                <div id="future-events">
                    <h1 className="text-4xl font-bold mb-4">Future events</h1>
                    <p className="text-lg">Future events</p>
                </div>
            </div>
        </>
    );
}

export default About_Us;
