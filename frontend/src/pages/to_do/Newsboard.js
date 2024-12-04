import React from 'react';
import Header from '../../components/Header';
import NavigationBar from '../../components/NavigationBar';

function Newsboard() {
    return (
        <>
            <NavigationBar />
            <div className="container mx-auto py-16 text-center">
                <div id="media">
                    <h1 className="text-4xl font-bold mb-4">Media</h1>
                    <p className="text-lg">Media</p>
                </div>
                <div id="progress-report">
                    <h1 className="text-4xl font-bold mb-4">Progress report</h1>
                    <p className="text-lg">Progress report</p>
                    
                    {/* Table for project phases */}
                    <div className="overflow-x-auto mt-6">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-green-600 text-white">
                                    <th className="border border-gray-300 px-4 py-2">Phase</th>
                                    <th className="border border-gray-300 px-4 py-2">Activities</th>
                                    <th className="border border-gray-300 px-4 py-2">Timeframe</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Initiation</td>
                                    <td className="border border-gray-300 px-4 py-2">Project approval, stakeholder alignment</td>
                                    <td className="border border-gray-300 px-4 py-2">Month 1</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Content development</td>
                                    <td className="border border-gray-300 px-4 py-2">Develop VR modules, test content</td>
                                    <td className="border border-gray-300 px-4 py-2">Months 2-6</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Training</td>
                                    <td className="border border-gray-300 px-4 py-2">Recruit and train educators</td>
                                    <td className="border border-gray-300 px-4 py-2">Month 7</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">School outreach</td>
                                    <td className="border border-gray-300 px-4 py-2">Schedule visits, deploy VR workshops</td>
                                    <td className="border border-gray-300 px-4 py-2">Months 7–12</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2">Evaluation</td>
                                    <td className="border border-gray-300 px-4 py-2">Collect and analyse impact data, report findings</td>
                                    <td className="border border-gray-300 px-4 py-2">Month 13</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newsboard;
