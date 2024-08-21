// pages/upload.js
'use client'

import { useState } from "react";
import { UploadIcon } from '@heroicons/react/outline';

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-5">
        <div className="text-2xl font-bold mb-6">Base</div>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🏠</span>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📤</span>
                <span>Upload</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🧾</span>
                <span>Invoice</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📅</span>
                <span>Schedule</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📅</span>
                <span>Calendar</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🔔</span>
                <span>Notification</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>⚙️</span>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg p-10 shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4">Upload CSV</h1>
          <div className="border border-dashed border-gray-600 rounded-lg p-6 flex flex-col items-center">
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <UploadIcon className="h-10 w-10 text-gray-400" />
                <p className="mt-4 text-gray-400">
                  {file ? file.name : "Drop your excel sheet here or browse"}
                </p>
              </div>
            </label>
          </div>
          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center">
            <UploadIcon className="h-5 w-5 mr-2" />
            Upload
          </button>
        </div>
      </main>
    </div>
  );
}
