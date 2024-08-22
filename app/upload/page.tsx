'use client';

import { useState } from 'react';
import { UploadIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files ? e.target.files[0] : null);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      
      {/* Sidebar */}
      <aside className={`${isCollapsed ? 'w-20' : 'w-64'} ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} p-5 transition-all duration-500`}>
        <div className="flex justify-between items-center mb-6">
          {!isCollapsed && (
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Base
            </div>
          )}
          <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
            <img src="/sidebar.png" alt="Toggle Sidebar" className="w-8 h-auto cursor-pointer" />
          </button>
          <button onClick={toggleDarkMode} className="ml-4" aria-label="Toggle Dark Mode">
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className={`w-full pt-10 pl-10 text-${isDarkMode ? 'white' : 'black'} text-2xl`}>
          Upload CSV
        </header>

        <div className="flex-1 flex items-center justify-center">
          <div className={`rounded-lg p-10 shadow-lg w-full max-w-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            
            <div className={`border border-dashed ${isDarkMode ? 'border-gray-600' : 'border-gray-400'} rounded-lg p-6 flex flex-col items-center`}>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <Image src="/Excel.png" height={30} width={30} alt="Excel Icon" />
                  <p className={`mt-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    {file ? file.name : 'Drop your excel sheet here or browse'}
                  </p>
                </div>
              </label>
            </div>
            
            <button className={`mt-6 w-full ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'} hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center`}>
              <UploadIcon className="h-5 w-5 mr-2" />
              Upload
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
