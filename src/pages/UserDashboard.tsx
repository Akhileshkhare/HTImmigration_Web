import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const mockProfile = {
  name: "John Doe",
  email: "john@example.com",
  role: "Client",
  pin: "1234",
};

const mockDocuments = [
  { id: 1, name: "Passport.pdf", status: "Approved" },
  { id: 2, name: "Visa.pdf", status: "Pending" },
];

const mockNotifications = [
  { id: 1, message: "Your document was approved." },
  { id: 2, message: "New message from admin." },
];

export default function UserDashboard() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [documents, setDocuments] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    // Replace with real API calls
    setProfile(mockProfile);
    setDocuments(mockDocuments);
    setNotifications(mockNotifications);
  }, []);

  const handleLogout = () => {
    // Clear user session here
    navigate("/userlogin");
  };

  return (
    <div className="flex h-screen">
      {/* Side Menu */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 font-bold text-xl border-b border-gray-700">
          User Menu
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-4 font-semibold">Profile</li>
            <li className="mb-4 font-semibold">Documents</li>
            <li className="mb-4 font-semibold">Notifications</li>
          </ul>
        </nav>
        <button
          className="m-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <div className="font-bold text-lg">User Dashboard</div>
          <div className="flex items-center gap-4">
            <span>{profile?.name}</span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded">{profile?.role}</span>
            <button
              className="bg-gray-900 text-white px-3 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 p-8 bg-gray-50">
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2">Profile</h2>
            <div>Name: {profile?.name}</div>
            <div>Email: {profile?.email}</div>
            <div>Role: {profile?.role}</div>
            <div>PIN: {profile?.pin}</div>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2">Document List</h2>
            <ul>
              {documents.map((doc) => (
                <li key={doc.id} className="mb-2">
                  {doc.name} - <span className="font-semibold">{doc.status}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-2">Notifications</h2>
            <ul>
              {notifications.map((n) => (
                <li key={n.id} className="mb-2">
                  {n.message}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}