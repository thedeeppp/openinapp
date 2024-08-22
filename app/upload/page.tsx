// pages/upload.js
'use client'

import { useState } from "react";
import { UploadIcon } from '@heroicons/react/outline';
import Image from "next/image";

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0D0D0D] p-5">
        <div className="text-2xl font-bold mb-6">Base</div>
        <img src="/sidebar.png" alt="" />
        
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Navbar */}
        <header className="w-full pt-10 pl-10 text-[30px]">
          Upload CSV
        </header>

        {/* Content Area */}
        <main className="flex-1 flex items-center justify-center">
          <div className="bg-[#0D0D0D] rounded-lg p-10 shadow-lg w-full max-w-md">
            
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
                  <Image src="/Excel.png"
                    height={30}
                    width={30}
                  />
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
    </div>
  );
}
