'use client';

import { useState } from 'react';

const Upload = () => {
  const [selectedTags, setSelectedTags] = useState<{ [key: number]: string[] }>({});

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

  const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Upload CSV</h2>
          <div className="border-dashed border-2 border-gray-600 p-10 text-center">
            <p>Drop your excel sheet here or <span className="text-blue-500 cursor-pointer">browse</span></p>
          </div>
          <button className="mt-4 w-full py-2 bg-blue-600 rounded-md">Upload</button>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Uploads</h3>
          <table className="w-full text-left bg-gray-800 rounded-lg">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-4">Sl No.</th>
                <th className="p-4">Links</th>
                <th className="p-4">Prefix</th>
                <th className="p-4">Add Tags</th>
                <th className="p-4">Selected Tags</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="border-b border-gray-700">
                  <td className="p-4">{`0${item}`}</td>
                  <td className="p-4 text-blue-500">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">www.google.com</a>
                  </td>
                  <td className="p-4">prefixsample</td>
                  <td className="p-4">
                    <select
                      className="bg-gray-700 p-2 rounded-md"
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
                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedTags[item]?.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-600 text-xs py-1 px-2 rounded-full cursor-pointer"
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
  );
};

export default Upload;
