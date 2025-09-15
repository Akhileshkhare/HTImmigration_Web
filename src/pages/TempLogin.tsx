import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TEMP_USERNAME = "demo";
const TEMP_PASSWORD = "demo123";
const TEMP_PIN = "1234";

export default function TempLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      username === TEMP_USERNAME &&
      password === TEMP_PASSWORD &&
      pin === TEMP_PIN
    ) {
      localStorage.setItem("tempLogin", "true");
      setError("");
      navigate("/"); // Redirect to home or main app
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Temporary Login</h2>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
            autoComplete="username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
            autoComplete="current-password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">PIN (4-digit)</label>
          <input
            type="text"
            value={pin}
            onChange={e => setPin(e.target.value)}
            className="border p-2 rounded w-full"
            maxLength={4}
            required
          />
        </div>
        {error && (
          <div className="text-red-600 mb-4 text-center">{error}</div>
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
