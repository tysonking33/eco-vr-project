import React from 'react';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';

function What_we_do() {
    return (
        <>
            <NavigationBar />
            <div className="container mx-auto py-16 text-center">
                <div id="improve-sustainability">
                    <h1 className="text-4xl font-bold mb-4">How we can improve understanding of sustainability</h1>
                    <p className="text-lg">We recognise that today's generation is already immersed in technology and VR a perfect tool to enhance engagement and learning within the education system.
                    </p>
                </div>
                <div id="help-education">
                    <h1 className="text-4xl font-bold mb-4">Where can we help education</h1>
                    <p className="text-lg">We recognise that today's generation is already immersed in technology and VR a perfect tool to enhance engagement and learning within the education system.
                    </p>
                </div>
            </div>
        </>
    );
}

export default What_we_do;
