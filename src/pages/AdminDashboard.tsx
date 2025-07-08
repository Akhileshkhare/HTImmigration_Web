import React, { useState } from 'react';
import { FaUserCircle, FaSignOutAlt, FaHome, FaUsers, FaGlobe, FaCog } from 'react-icons/fa';
import Users from './Users';
import Immigrations from './Immigrations';

const menuItems = [
  { label: 'Home', icon: FaHome, key: 'home' },
  { label: 'Users', icon: FaUsers, key: 'users' },
  { label: 'Immigrations', icon: FaGlobe, key: 'immigrations' },
  { label: 'Settings', icon: FaCog, key: 'settings' },
];

const AdminDashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleMenuClick = (key: string) => setActiveMenu(key);
  const handleLogout = () => {
    // Implement logout logic here
    window.location.href = '/adminlogin';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b">Dashboard</div>
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <li key={item.key}>
                  <button
                    className={`flex items-center w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-200 transition rounded-r-full ${activeMenu === item.key ? 'bg-gray-200 font-semibold' : ''}`}
                    onClick={() => handleMenuClick(item.key)}
                  >
                    <span className="mr-3 text-lg"><Icon /></span>
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="p-4 text-xs text-gray-400">Version 1.0.0</div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <div className="font-semibold text-lg">{menuItems.find(m => m.key === activeMenu)?.label}</div>
          <div className="relative">
            <button
              className="flex items-center gap-2 focus:outline-none"
              onClick={() => setUserMenuOpen(v => !v)}
            >
              <FaUserCircle className="text-2xl text-gray-600" />
              <span className="font-medium text-gray-700">Admin</span>
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100" onClick={() => { setShowProfile(true); setUserMenuOpen(false); }}>Profile</button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </header>
        {/* Content Area */}
        <main className="flex-1 p-8 overflow-auto">
          {activeMenu === 'home' && (
            <div>
              <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="stat bg-white p-4 rounded shadow">
                  <h2 className="text-lg">Total Users</h2>
                  <p className="text-2xl">150</p>
                </div>
                <div className="stat bg-white p-4 rounded shadow">
                  <h2 className="text-lg">Active Sessions</h2>
                  <p className="text-2xl">75</p>
                </div>
                <div className="stat bg-white p-4 rounded shadow">
                  <h2 className="text-lg">Pending Requests</h2>
                  <p className="text-2xl">5</p>
                </div>
              </div>
            </div>
          )}
          {activeMenu === 'users' && (
            <Users />
          )}
          {activeMenu === 'immigrations' && (
            <Immigrations />
          )}
          {activeMenu === 'settings' && (
            <div>
              <h1 className="text-xl font-bold mb-4">Settings</h1>
              {/* Settings content here */}
            </div>
          )}
        </main>
      </div>
      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-lg p-6 w-full max-w-md relative">
            <button className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-2xl font-bold" onClick={() => setShowProfile(false)}>&times;</button>
            <h2 className="text-xl font-bold mb-4">Admin Profile</h2>
            <div className="flex flex-col items-center gap-4">
              <FaUserCircle className="text-6xl text-gray-500" />
              <div className="text-lg font-semibold">Admin</div>
              <div className="text-gray-600">admin@yourdomain.com</div>
              <div className="w-full mt-4">
                <div className="flex justify-between py-2 border-b"><span className="font-semibold">Role:</span> <span>Administrator</span></div>
                <div className="flex justify-between py-2 border-b"><span className="font-semibold">Username:</span> <span>admin</span></div>
                {/* Add more profile fields as needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;