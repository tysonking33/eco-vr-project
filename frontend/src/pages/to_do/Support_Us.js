import React from 'react';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';

function Support_Us() {
    return (
        <>
            <NavigationBar />
            <div className="container mx-auto py-16 text-center">
                <div id="Donate">
                    <h1 className="text-4xl font-bold mb-4">Donate</h1>
                    <p className="text-lg">Donate</p>
                </div>
                <div id="Shop">
                    <h1 className="text-4xl font-bold mb-4">Shop</h1>
                    <p className="text-lg">Shop</p>
                </div>
            </div>
        </>
    );
}

export default Support_Us;
