// pages/upload.tsx
'use client'

import { useEffect, useState } from "react";
import { UploadIcon } from '@heroicons/react/outline';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

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
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} text-${isDarkMode ? 'white' : 'black'}`}>
      <aside className={`${isCollapsed ? "w-20" : "w-64"} ${isDarkMode ? "bg-gray-800" : "bg-gray-200"} p-5 transition-all duration-500`}>
        <div className="flex justify-between items-center mb-6">
          {!isCollapsed && <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Base</div>}
          <button onClick={toggleSidebar}>
            <img src="/sidebar.png" alt="Toggle" className="w-8 h-auto cursor-pointer" />
          </button>
          <button onClick={toggleDarkMode} className="ml-4">
            <span className={`text-xl ${isDarkMode ? 'text-yellow-400' : 'text-gray-600'}`}>
              {isDarkMode ? '🌞' : '🌜'}
            </span>
          </button>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🏠</span>
                {!isCollapsed && <span>Dashboard</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📤</span>
                {!isCollapsed && <span>Upload</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🧾</span>
                {!isCollapsed && <span>Invoice</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📅</span>
                {!isCollapsed && <span>Schedule</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>📅</span>
                {!isCollapsed && <span>Calendar</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>🔔</span>
                {!isCollapsed && <span>Notification</span>}
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center space-x-2">
                <span>⚙️</span>
                {!isCollapsed && <span>Settings</span>}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 flex items-center justify-center">
        <div className={`rounded-lg p-10 shadow-lg w-full max-w-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <h1 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Upload CSV</h1>
          <div className={`border border-dashed ${isDarkMode ? 'border-gray-600' : 'border-gray-400'} rounded-lg p-6 flex flex-col items-center`}>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex flex-col items-center justify-center">
                <p className={`mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} flex-col justify-center items-center`}>
                  {"Upload-template.xlsx"}
                  <div className="text-red-500">Remove</div>
                </p>
              </div>
            </label>
          </div>
          <button className={`mt-6 w-full ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'} hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center`}>
            <img src="/rectangle.png" alt="Rectangle" />
          </button>
        </div>
      </main>
    </div>
  );
}
