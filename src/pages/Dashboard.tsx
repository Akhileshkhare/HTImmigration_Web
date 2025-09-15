import React, { useState, useEffect } from 'react';
import CommonGrid from './CommonGrid';
import CommonHeader from './CommonHeader';

const Dashboard = () => {
    // Document list mock
    const [documents, setDocuments] = useState([
        { id: 1, name: "Passport.pdf", status: "Uploaded" },
        { id: 2, name: "Visa.pdf", status: "Approved" },
    ]);
    // Chat mock
    const [chatMessages, setChatMessages] = useState([
        { id: 1, sender: "client", message: "Hello, I need help with my visa." },
        { id: 2, sender: "operator", message: "Sure, please provide your details." },
    ]);
    const [newMessage, setNewMessage] = useState("");

    // Document upload handler (mock)
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setDocuments([...documents, { id: Date.now(), name: file.name, status: "Uploaded" }]);
        }
    };

    // Document delete handler (mock)
    const handleDelete = (id: number) => {
        setDocuments(documents.filter(doc => doc.id !== id));
    };

    // Document download handler (mock)
    const handleDownload = (name: string) => {
        alert(`Download ${name}`);
    };

    // Chat send handler (mock)
    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setChatMessages([...chatMessages, { id: Date.now(), sender: "client", message: newMessage }]);
            setNewMessage("");
            // TODO: Send mail to operator/admin here
        }
    };

    return (
        <div className="flex h-[calc(100vh-67px)]">
            <div className="flex-1">
                <CommonHeader title="Dashboard" />
                <main className="flex-1 p-4 sm:p-8 lg:p-10">
                    {/* Document Section */}
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Documents</h2>
                        <input type="file" onChange={handleUpload} className="mb-4" />
                        <ul>
                            {documents.map(doc => (
                                <li key={doc.id} className="flex items-center justify-between mb-2 p-2 border rounded">
                                    <span>{doc.name} - <span className="font-semibold">{doc.status}</span></span>
                                    <div className="flex gap-2">
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => handleDownload(doc.name)}>Download</button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(doc.id)}>Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    {/* Chat Section */}
                    <section>
                        <h2 className="text-xl font-bold mb-4">Chat</h2>
                        <div className="border rounded p-4 mb-4 h-64 overflow-y-auto bg-white">
                            {chatMessages.map(msg => (
                                <div key={msg.id} className={`mb-2 text-left ${msg.sender === "client" ? "text-blue-700" : "text-green-700"}`}>
                                    <span className="font-bold">{msg.sender === "client" ? "You" : "Operator/Admin"}:</span> {msg.message}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={e => setNewMessage(e.target.value)}
                                className="border rounded p-2 flex-1"
                                placeholder="Type your message..."
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSendMessage}>Send</button>
                        </div>
                        {/* TODO: Send mail to operator/admin on send, and mail to user on response */}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
