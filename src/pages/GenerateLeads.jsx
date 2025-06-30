import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GenerateLeads = () => {
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const itemsPerPage = 20;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const countries = [
    { name: 'United States', value: 'US' },
    { name: 'India', value: 'IN' },
    { name: 'United Kingdom', value: 'GB' },
    { name: 'Brazil', value: 'BR' },
    { name: 'Japan', value: 'JP' },
    { name: 'Türkiye', value: 'TR' },
    { name: 'Indonesia', value: 'ID' },
    { name: 'Canada', value: 'CA' },
    { name: 'Mexico', value: 'MX' },
    { name: 'Australia', value: 'AU' },
    { name: 'China', value: 'CN' },
    { name: 'Argentina', value: 'AR' },
    { name: 'South Africa', value: 'ZA' },
    { name: 'Malaysia', value: 'MY' },
    { name: 'Philippines', value: 'PH' },
    { name: 'Thailand', value: 'TH' },
    { name: 'Iran', value: 'IR' },
    { name: 'Pakistan', value: 'PK' },
    { name: 'Bangladesh', value: 'BD' },
    { name: 'Colombia', value: 'CO' },
    { name: 'Ukraine', value: 'UA' },
    { name: 'New Zealand', value: 'NZ' },
    { name: 'Taiwan', value: 'TW' },
    { name: 'Greece', value: 'GR' },
    { name: 'Chile', value: 'CL' }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentLeads = leads.slice(indexOfFirstItem, indexOfLastItem);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const nextPage = () => {
    if (currentPage * itemsPerPage < leads.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGenerate = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("industry", industry);
    formData.append("country", country);
    formData.append("location", location);
    formData.append("description", description);

    try {
        const storedApi = sessionStorage.getItem('apiLink');
        if (storedApi) {
          const response = await fetch(`${storedApi}/generate-leads`, {
            method: "POST",
            body: formData,
          });

        const result = await response.json();
        console.log(result);

        if (result.status === "success") {
          setLeads(result.data);
        } else {
          alert("Failed to generate leads");
        }
      };
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIndustry('');
    setLocation('');
    setCountry('');
    setDescription('');
  };

  const handleEnrichButton = () => {
  if (selectedLeads.length === 0) {
    console.log('No leads selected!');
    return;
  }

  navigate('/enrichment_page', {
    state: { links: selectedLeads }
  });
};

    const handleCheckboxChange = (leadId) => {
        setSelectedLeads((prevSelectedLeads) => {
        if (prevSelectedLeads.includes(leadId)) {
            return prevSelectedLeads.filter(id => id !== leadId);
        } else {
            return [...prevSelectedLeads, leadId];
        }
        });
    };

    useEffect(() => {
  if (selectedLeads.length > 0) {
    console.log('Selected leads:', selectedLeads);
    const queryString = new URLSearchParams({ links: selectedLeads.join(',') }).toString();
    console.log('Selected leads1:', queryString);

  } else {
    console.log('No leads selected');
  }
}, [selectedLeads]);

  return (
    <section className="relative flex flex-col justify-start items-center min-h-screen text-center bg-gray-800 grid grid-cols-6 gap-4">
      {/* Search Engine Section */}
      <nav className="w-full bg-gray-900 text-white py-4 col-start-1 col-end-7">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">MimicsLeads</a>
          <ul className="flex space-x-8">
            <li><a href="/#how-to-use" className="hover:text-blue-400">How to Use</a></li>
            <li><a href="/#about-us" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/generate_leads" className="hover:text-blue-400">Generate Leads</a></li>
          </ul>
        </div>
      </nav>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6 mt-6 col-span-4 col-start-2">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">Search Engine</h2>
        
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-white mb-2">Industry</label>
            <input 
              type="text" 
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg" 
              placeholder="Enter industry (e.g. Software, Healthcare)"
            />
          </div>
          <div className="flex-1">
            <label className="block text-white mb-2">Country</label>
            <select
              value={country}
              onChange={handleCountryChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg"
            >
              <option value="" disabled>Select Country</option>
              {countries.map((countryItem, index) => (
                <option key={index} value={countryItem.value}>
                  {countryItem.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-white mb-2">Location</label>
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-lg" 
              placeholder="Enter location (e.g. San Francisco, CA)"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-white mb-2">Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded-lg" 
            rows="4" 
            placeholder="Enter description criteria leads. (e.g. engaged in mobile phone repair, need help with building materials)"
          />
        </div>

        <div className="flex space-x-4 justify-center">
          <button 
            onClick={handleGenerate} 
            className="bg-green-500 text-white text-l px-4 py-2 rounded-lg"
          >
            Generate
          </button>
          <button 
            onClick={handleCancel} 
            className="text-white bg-red-500 text-l px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* loading spinner */}
      {isLoading && (
        <div>
            <div className="fixed inset-x-0 loading-card z-100">
            <img
                    src="/loading.png"
                    alt="loading"
                    className="w-20 h-20 object-cover opacity-100 hero inset-0  animate-spin z-100"
                />
            </div>
            <div className="absolute w-full h-full inset-x-0 bg-black opacity-50 z-10"></div>
        </div>
      )}

      {/* Results Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg col-span-4 col-start-2">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">Results</h2>
        
        <table className="min-w-full bg-gray-800 text-white">
            <thead>
            <tr>
                <th className="px-6 py-4 text-center bg-gray-700">Num</th>
                <th className="px-6 py-4 text-center bg-gray-700">Company Name</th>
                <th className="px-6 py-4 text-center bg-gray-700">Region</th>
                <th className="px-6 py-4 text-center bg-gray-700">Score Leads</th>
                <th className="px-6 py-4 text-center bg-gray-700">Enrichment</th>
            </tr>
            </thead>
            <tbody>
            {currentLeads.length > 0 ? (
                currentLeads.map((lead, index) => (
                <tr key={index}>
                    <td className="px-6 py-4">{index + 1 + indexOfFirstItem}</td>
                    <td className="px-6 py-4">{lead.title}</td>
                    <td className="px-6 py-4">{lead.adress}</td>
                    <td className="px-6 py-4">{lead.score.toFixed(2)}</td>
                    <td className="px-6 py-4">
                    <div className="flex justify-center items-center">
                        <input
                            type="checkbox"
                            id={`checkbox-${lead.href}`}
                            checked={selectedLeads.includes(lead.href)}
                            onChange={() => handleCheckboxChange(lead.href)}
                            className="custom-checkbox"
                        />
                    </div>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan="5" className="px-6 py-4 text-center">
                    No results available
                </td>
                </tr>
            )}
            </tbody>
        </table>

        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={prevPage}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            disabled={currentPage === 1}
          >
            Previous Data
          </button>

          {currentPage * itemsPerPage < leads.length && (
            <button
              onClick={nextPage}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Next Data
            </button>
          )}

          <button
            onClick={handleEnrichButton}
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            Enrich Data
          </button>
        </div>
        
      </div>

      <footer className="w-full bg-gray-900 text-white py-8 mt-12 col-start-1 col-end-7">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MimicsLeads. All Rights Reserved.</p>
          <p className="text-sm">Contact us: info@mimicsleads.com</p>
        </div>
      </footer>
    </section>
  );
}

export default GenerateLeads;
