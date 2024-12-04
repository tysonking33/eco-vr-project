import React from 'react';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';

function For_Teachers() {
    return (
        <>
            <NavigationBar />
            <div className="container mx-auto py-16 text-center">
                <div id="program-overview">
                    <h1 className="text-4xl font-bold mb-4">Program overview</h1>
                    <p className="text-lg">Program overview</p>
                </div>
                <div id="work-with-schools">
                    <h1 className="text-4xl font-bold mb-4">How we work with schools</h1>
                    <p className="text-lg">How we work with schools</p>
                </div>
                <div id="teaching-resources">
                    <h1 className="text-4xl font-bold mb-4">Free teacher resources</h1>
                    <p className="text-lg">Free teacher resources</p>
                </div>
                
            </div>
        </>
    );
}

export default For_Teachers;
