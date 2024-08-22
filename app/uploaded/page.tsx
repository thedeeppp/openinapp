'use client';

import { useState, useEffect } from 'react';

const Upload = () => {
  const [selectedTags, setSelectedTags] = useState<{ [key: number]: string[] }>({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  const handleTagSelect = (item: number, tag: string) => {
    setSelectedTags((prev) => {
      const tags = prev[item] || [];
      if (tags.includes(tag)) {
        return { ...prev, [item]: tags.filter((t) => t !== tag) };
      } else {
        return { ...prev, [item]: [...tags, tag] };
      }
    });
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className={`bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 p-4 md:p-8`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">Upload CSV</h2>
            <button 
              onClick={toggleDarkMode} 
              className="py-2 px-4 bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 rounded-md"
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <div className="bg-gray-800 dark:bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg">
            <div className="border-dashed border-2 border-gray-600 dark:border-gray-400 p-6 md:p-10 text-center">
              <p>
                Drop your Excel sheet here or <span className="text-blue-500 dark:text-blue-700 cursor-pointer">browse</span>
              </p>
            </div>
            <button className="mt-4 w-full py-2 bg-blue-600 dark:bg-blue-400 rounded-md text-white dark:text-gray-900">
              Upload
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Uploads</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-gray-800 dark:bg-gray-100 rounded-lg">
                <thead>
                  <tr className="border-b border-gray-700 dark:border-gray-300">
                    <th className="p-2 md:p-4">Sl No.</th>
                    <th className="p-2 md:p-4">Links</th>
                    <th className="p-2 md:p-4">Prefix</th>
                    <th className="p-2 md:p-4">Add Tags</th>
                    <th className="p-2 md:p-4">Selected Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="border-b border-gray-700 dark:border-gray-300">
                      <td className="p-2 md:p-4">{item}</td>
                      <td className="p-2 md:p-4 text-blue-500 dark:text-blue-700">
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">www.google.com</a>
                      </td>
                      <td className="p-2 md:p-4">prefixsample</td>
                      <td className="p-2 md:p-4">
                        <select
                          className="bg-gray-700 dark:bg-gray-300 p-2 rounded-md w-full text-white dark:text-gray-900"
                          onChange={(e) => handleTagSelect(item, e.target.value)}
                        >
                          <option>Select Tags</option>
                          {tags.map((tag, index) => (
                            <option key={index} value={tag}>
                              {tag}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2 md:p-4">
                        <div className="flex flex-wrap gap-2">
                          {selectedTags[item]?.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-600 dark:bg-blue-400 text-xs py-1 px-2 rounded-full cursor-pointer text-white dark:text-gray-900"
                              onClick={() => handleTagSelect(item, tag)}
                            >
                              {tag} &#x2715;
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
