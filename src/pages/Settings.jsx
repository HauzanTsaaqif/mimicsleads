import React, { useState, useEffect } from 'react';
import '../css/index.css';

const Settings = () => {
  const [apiLink, setApiLink] = useState('');
  const [savedApi, setSavedApi] = useState('');

  useEffect(() => {
    const storedApi = sessionStorage.getItem('apiLink');
    if (storedApi) {
      setApiLink(storedApi);
      setSavedApi(storedApi);
    }
  }, []);

  const handleSaveApi = () => {
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
        <ol className="list-decimal text-lg sm:text-xl text-gray-200 text-left mx-auto mb-6 px-20">
          <li>Enter your API link in the field below.</li>
          <li>Click the "Save API" button to store the link in your settings.</li>
          <li>The saved API link will be stored in your session, allowing you to access it later.</li>
        </ol>

        {/* API Settings Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg px-16">
          <h3 className="text-2xl text-white mb-4">API Settings</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex w-full sm:w-auto">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <a href={apiLink || '#'} target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414M10.172 13.828a4 4 0 010-5.656l1.414-1.414a4 4 0 015.656 5.656l-1.414 1.414"></path>
                  </svg>
                </a>
              </span>
              <input
                type="url"
                id="api-link"
                value={apiLink}
                onChange={(e) => setApiLink(e.target.value)}
                placeholder="https://example.com/api"
                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-80 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
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
              <a href={savedApi} className="underline text-blue-400" target="_blank" rel="noopener noreferrer">
                {savedApi}
              </a>
              <p className="text-sm text-green-400 mt-2">Link aktif dan tersimpan di sesi saat ini.</p>
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
};

export default Settings;
