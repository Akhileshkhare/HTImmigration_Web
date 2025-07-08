import React from 'react';

const AdminDashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Dashboard Header */}
      {/* <header className="w-full bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
      </header> */}
      <main className="p-0 mx-auto w-full">
        {children}
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
