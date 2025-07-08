import React, { useState, useEffect } from 'react';
import CommonGrid from './CommonGrid';
import CommonHeader from './CommonHeader';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<string>('users');



    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    if (!dashboardData) {
        return <div className='dark:text-gray-50 text-center mt-[200px]'>Loading...</div>;
    }

    return (
        <div className="flex h-[calc(100vh-67px)]">
            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <CommonHeader title="Dashboard" />

                {/* Dashboard Content */}
                <main className="flex-1 p-4 sm:p-8 lg:p-10">
            
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
