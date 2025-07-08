
import { useState } from "react";

export default function Phase1({ onNext, language, setLanguage, setUser }) {
  const [solId, setSolId] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleProceed = () => {
    const sol = parseInt(solId);
    if (sol >= 8701 && sol <= 8771 && userName.trim() !== "") {
      setError("");
      setUser(userName.trim());
      onNext();
    } else {
      setError("Please enter valid SOL ID (8701–8771) and your name.");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400 min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="text-3xl font-bold text-blue-900 text-center">OTS NIVARAN</h1>
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <div>
          <label className="block mb-1 font-semibold text-blue-800">Your Name:</label>
          <input
            type="text"
            className="w-full border border-blue-300 rounded p-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-blue-800">Enter SOL ID (8701–8771):</label>
          <input
            type="number"
            className="w-full border border-blue-300 rounded p-2"
            value={solId}
            onChange={(e) => setSolId(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="font-semibold text-blue-800">Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border border-blue-300 p-2 rounded"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          onClick={handleProceed}
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700"
        >
          Proceed
        </button>
      </div>
      <div className="text-red-600 font-bold text-sm mt-6">© P.Raa</div>
    </div>
  );
}
