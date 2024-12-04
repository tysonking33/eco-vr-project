import React from 'react';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';

function For_Parents() {
    return (
        <>
            <NavigationBar />
            <div className="container mx-auto py-16 text-center">
                <div id="Unite-session">
                    <h1 className="text-4xl font-bold mb-4">What happens during a Unite session</h1>
                    <p className="text-lg">What happens during a Unite session</p>
                </div>
                <div id="activities-and-resources">
                    <h1 className="text-4xl font-bold mb-4">Activities and resources</h1>
                    <p className="text-lg">Activities and resources</p>
                </div>
            </div>
        </>
    );
}

export default For_Parents;
