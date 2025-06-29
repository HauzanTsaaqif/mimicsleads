import React, { useState } from 'react';
import '../css/index.css';

const Settings = () => {
  const [apiLink, setApiLink] = useState('');
  const [savedApi, setSavedApi] = useState('');

  const handleSaveApi = () => {
    // Menyimpan API link ke dalam sessionStorage atau localStorage
    sessionStorage.setItem('apiLink', apiLink);
    setSavedApi(apiLink);
  };

  return (
    <section className="relative flex flex-col justify-start items-center min-h-screen text-center bg-gray-800 grid grid-cols-8">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 text-white py-4 col-start-1 col-end-9">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">MimicsLeads</a>
          <ul className="flex space-x-8">
            <li><a href="#about-us" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#how-to-use" className="hover:text-blue-400">How to Use</a></li>
            <li><a href="/generate_leads" className="hover:text-blue-400">Generate Leads</a></li>
            <li><a href="/setting_page" className="hover:text-blue-400">Settings</a></li>
          </ul>
        </div>
      </nav>

      <div id="how-to-use" className="container mx-auto px-6 py-8 bg-gray-900 p-6 rounded-lg shadow-lg text-white rounded-lg mt-20 mb-20 col-start-1 col-end-9">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">How to Use the Settings</h2>
            <ul className="text-lg sm:text-xl text-gray-200 text-left mx-auto mb-6 px-2">
                <li>Enter your API link in the field below.</li>
                <li>Click the "Save API" button to store the link in your settings.</li>
                <li>The saved API link will be stored in your session, allowing you to access it later.</li>
            </ul>
            
            {/* API Settings Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl text-white mb-4">API Settings</h3>
                <div className="flex justify-center items-center space-x-4">
                    <div>
                        <div class="flex">
                            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                            </span>
                            <input  type="text" 
                                    id="website-admin" 
                                    value={apiLink}
                                    onChange={(e) => setApiLink(e.target.value)} 
                                    className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-80 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
                        </div>
                    </div>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-md"
                        onClick={handleSaveApi}
                    >
                        Save API
                    </button>
                </div>
                
                {/* Display the saved API link */}
                {savedApi && (
                    <div className="mt-4 p-4 border-2 border-blue-500 text-center text-white">
                        <span>Saved API Link: </span>
                        <span>{savedApi}</span>
                    </div>
                )}
            </div>
        </div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-4 mt-6 col-start-1 col-end-9">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MimicsLeads. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default Settings;
