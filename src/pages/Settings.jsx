import React, { useState, useEffect } from 'react';
import '../css/index.css';
import { Link } from 'react-scroll';

const Settings = () => {
  const [apiLink, setApiLink] = useState('');
  const [savedApi, setSavedApi] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
      <nav className="w-full col-start-1 col-end-9 bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center pr-4">
          <a href="/" className="flex items-center text-2xl font-bold">
            <img src="/icon.png" alt="Logo" className="mr-4 max-h-20" />
            MimicsLeads
          </a>
          <ul className="hidden md:flex space-x-8">
            <li><a href="/" className="block hover:text-blue-400" onClick={toggleMenu}>About Me</a></li>
            <li><a href="/" className="block hover:text-blue-400" onClick={toggleMenu}>How to Use</a></li>
            <li><a href="/generate_leads" className="hover:text-blue-400">Generate Leads</a></li>
            <li><a href="/setting_page" className="hover:text-blue-400">Settings</a></li>
          </ul>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 text-white`}>
          <ul className="space-y-4 p-4">
            <li><a href="/" className="block hover:text-blue-400" onClick={toggleMenu}>About Me</a></li>
            <li><a href="/" className="block hover:text-blue-400" onClick={toggleMenu}>How to Use</a></li>
            <li><a href="/generate_leads" className="block hover:text-blue-400" onClick={toggleMenu}>Generate Leads</a></li>
            <li><a href="/setting_page" className="block hover:text-blue-400" onClick={toggleMenu}>Settings</a></li>
          </ul>
        </div>
      </nav>

      <div id="how-to-use" className="container mx-auto px-6 py-8 bg-gray-900 p-6 rounded-lg shadow-lg text-white mt-20 mb-20 col-start-1 col-end-9">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">How to Settings</h2>
        <ol className="list-decimal text-lg sm:text-xl text-gray-200 text-left mx-auto mb-6 px-20 space-y-3">
          <li>Create an account at <a href="https://ngrok.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">https://ngrok.com/</a> and copy your NGROK Auth Token. <strong>(See example image)</strong></li>
          <div className='flex justify-center'><img src="/Tutor1.png" alt="Logo" className="mr-4 max-h-50" /></div>
          <li>Open the AI server on Colab using this link: <a href="https://colab.research.google.com/drive/1rKuB3zvjuqfuZ3PgZDAEyMLi7XRvK4tk?usp=sharing#scrollTo=RddER8iVL4jn" target="_blank" rel="noopener noreferrer" className="underline text-blue-400">Colab Server Link</a></li>
          <li>Paste your NGROK token into the input field provided in the Colab notebook.</li>
          <li>Connect to the Colab runtime (GPU is not required).</li>
          <li>Press <code>Ctrl + F9</code> or go to <strong>Runtime &gt; Run all</strong> to execute all cells.  <strong>(See example image)</strong></li>
          <div className='flex justify-center'><img src="/Tutor2.png" alt="Logo" className="mr-4 max-h-50" /></div>
          <li>Wait until an API link appears. Copy the generated API link. <strong>(See example image)</strong></li>
          <div className='flex justify-center'><img src="/Tutor3.png" alt="Logo" className="mr-4 max-h-50" /></div>
          <li>Paste the copied API link into the settings input field below on this page and click save API.</li>
          <li>Once saved, you’re ready to start generating leads.</li>
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
              <p className="text-sm text-green-400 mt-2">Links are active and saved in the current session.</p>
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
