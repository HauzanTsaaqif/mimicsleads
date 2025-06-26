import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { useLocation } from 'react-router-dom';

const EnrichmentPage = () => {
  const location = useLocation();
  const [links, setLinks] = useState([]);
  const [enrichedData, setEnrichedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location.state && location.state.links) {
      setLinks(location.state.links);
    }
  }, [location]);

  useEffect(() => {
    if (links.length > 0) {
      const sendLinksToAPI = async () => {
        const formData = { links };
        setIsLoading(true);

        try {
        // Example link api : https://30f3-34-73-242-53.ngrok-free.app/generate-leads
          const response = await fetch("((YOUR API))/enrich-leads", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
            const result = await response.json();
            console.log("Enrichment result:", result);

            setEnrichedData(result.data);
          } else {
            console.log("Failed to enrich leads");
          }
        } catch (error) {
          console.error("Error during fetch:", error);
        } finally {
            setIsLoading(false);
        }
      };

      sendLinksToAPI();
    }
  }, [links]);

  const handleModalOpen = (lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedLead(null);
  };

  const handleSaveAsXLSX = () => {
    const ws = XLSX.utils.json_to_sheet(enrichedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Enriched Leads");
    const excelFile = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    const blob = new Blob([s2ab(excelFile)], { type: "application/octet-stream" });
    saveAs(blob, "enriched_leads.xlsx");
  };

  const handleSaveAsCSV = () => {
    const csvData = enrichedData.map((lead) => ({
      'Company Name': lead.companyName,
      'Region': lead.region,
      'Phone Number': lead.phoneNumber,
      'Company Website': lead.companyWebsite,
      'Description': lead.desc,
    }));
    const csv = convertToCSV(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "enriched_leads.csv");
  };

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0]);
    const csv = [
      headers.join(','),
      ...data.map(row => headers.map(field => row[field]).join(',')) // Rows
    ].join('\n');
    return csv;
  };

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  };

  return (
    <section className="relative flex flex-col justify-start items-center min-h-screen text-center bg-gray-800 grid grid-cols-8 gap-4">
      <nav className="w-full bg-gray-900 text-white py-4 col-start-1 col-end-9">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">MimicsLeads</a>
          <ul className="flex space-x-8">
            <li><a href="/#how-to-use" className="hover:text-blue-400">How to Use</a></li>
            <li><a href="/#about-us" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/generate_leads" className="hover:text-blue-400">Generate Leads</a></li>
          </ul>
        </div>
      </nav>

      {/* Show loading spinner when isLoading is true */}
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

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg col-span-6 col-start-2 mt-6">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">Enrichment Data</h2>

        <table className="min-w-full bg-gray-800 text-white mb-8">
          <thead>
            <tr>
              <th className="px-6 py-4 text-left bg-gray-700">Num</th>
              <th className="px-6 py-4 text-left bg-gray-700">Company Name</th>
              <th className="px-6 py-4 text-left bg-gray-700">Region</th>
              <th className="px-6 py-4 text-left bg-gray-700">Phone Number</th>
              <th className="px-6 py-4 text-left bg-gray-700">Company Website</th>
              <th className="px-6 py-4 text-left bg-gray-700">Desc</th>
            </tr>
          </thead>
          <tbody>
            {enrichedData.map((lead, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{lead.name}</td>
                <td className="px-6 py-4">{lead.address}</td>
                <td className="px-6 py-4">{lead.number}</td>
                <td className="px-6 py-4">{lead.url}</td>
                <td className="px-6 py-4">
                  <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    onClick={() => handleModalOpen(lead)}
                  >
                    View Description
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center space-x-4">
          <button 
            className="bg-green-500 text-white py-2 px-4 rounded-lg"
            onClick={handleSaveAsXLSX}
          >
            Save as XLSX
          </button>
          <button 
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
            onClick={handleSaveAsCSV}
          >
            Save as CSV
          </button>
        </div>

        {/* Modal for Description */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-1/2">
              <h3 className="text-xl font-bold mb-4">{selectedLead.companyName}</h3>
              <p>{selectedLead.desc}</p>
              <div className="mt-4">
                <button 
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  onClick={handleModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="w-full bg-gray-900 text-white py-8 mt-6 col-start-1 col-end-9">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MimicsLeads. All Rights Reserved.</p>
          <p className="text-sm">Contact us: info@mimicsleads.com</p>
        </div>
      </footer>
    </section>
  );
};

export default EnrichmentPage;
