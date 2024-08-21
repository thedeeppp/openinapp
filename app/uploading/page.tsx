// pages/upload.tsx
'use client'

import { useEffect, useState } from "react";
import { UploadIcon } from '@heroicons/react/outline';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this code runs only on the client side
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  if (!isClient) {
    return null; // Avoid rendering the component on the server side
  }

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
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center justify-center">
                <p className="mt-4 text-gray-400 flex-col justify-center items-center">
                  {"Upload-template.xlsx"}
                  <div className="text-red-500">Remove</div>
                </p>
              </div>
            </label>
          </div>
          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center">
            <img src="/rectangle.png" alt="Rectangle" />
          </button>
        </div>
      </main>
    </div>
  );
}
