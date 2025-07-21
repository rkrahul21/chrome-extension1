/* global chrome */

import { useState } from 'react';
import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';


function App() {
  const [title, setTitle] = useState('');

  const getTabTitle = () => {
  if (typeof chrome !== "undefined" && chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      console.log("Tab[0]",currentTab);
      console.log("Current Tab Title:", currentTab);

      setTitle(currentTab?.title || "No tab found");
    });
  } else {
    setTitle("Chrome extension APIs not available");
  }
};


  const refreshTitle = () => {
    setTitle(''); // Clears the tab title
  };


  return (
    <div className="p-4 font-sans w-100 ">
      <div className="flex gap-2">
        <button
          onClick={getTabTitle}
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Get Tab Title
        </button>

        <button
          onClick={refreshTitle}
          className="bg-gray-200 text-white px-4 py-2 rounded hover:bg-gray-500"
          title="Clear Title"
        >
          <ArrowPathIcon className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="w-80  items-center justify-center mt-4 mb-4 p-2 text-center break-words font-bold text-gray-800 text-sm  rounded-md border-1 border-blue-400">
        {title || 'Title will appear here'}
      </div>
    </div>
  );
}

export default App;
