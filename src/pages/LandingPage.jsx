import React from 'react';
import '../css/index.css';

const LandingPage = () => {
  return (
    <section className="relative flex flex-col justify-start items-center min-h-screen text-center bg-gray-800 grid grid-cols-8">
      {/* Navbar */}
      <nav className="w-full bg-gray-900 text-white col-start-1 col-end-9">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo dan Title */}
          <a href="/" className="flex items-center text-2xl font-bold">
            {/* Logo */}
            <img src="/icon.png" alt="Logo" className="mr-4 max-h-20" /> {/* Sesuaikan path dan ukuran logo */}
            MimicsLeads
          </a>
          
          {/* Menu */}
          <ul className="flex space-x-8">
            <li><a href="#about-us" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#how-to-use" className="hover:text-blue-400">How to Use</a></li>
            <li><a href="/generate_leads" className="hover:text-blue-400">Generate Leads</a></li>
            <li><a href="/setting_page" className="hover:text-blue-400">Settings</a></li>
          </ul>
        </div>
      </nav>

      <div className="relative z-10 px-6 py-20 bg-gradient-to-b from-transparent to-black w-full text-center col-start-1 col-end-9">
        <div className="max-w-3xl mx-auto relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 text-shadow-lg tracking-tight">
            MimicsLeads
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 mx-auto max-w-3xl">
            Empowering your business with AI-driven lead generation that perfectly matches your target audience.
            </p>

            <a
            href="/generate_leads"
            className="btn-primary text-xl mx-auto block mt-6"
            >
            Generate Leads
            </a>
        </div>

        <img
            src="/a.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-70 hero absolute inset-0 z-0"
        />

        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </div>

        <div id="about-us" className="container mx-auto px-10 py-8 bg-gray-900 p-6 rounded-lg shadow-lg text-white rounded-lg mt-12 col-start-1 col-end-9">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">How the System Works</h2>
            <p className="text-lg sm:text-xl text-gray-200 text-center mx-auto mb-6">
                MimicsLeads is an advanced application designed to revolutionize the way businesses manage and generate high-quality leads. 
                By utilizing cutting-edge technology, we automate the process of discovering prospects that align perfectly with your business needs.
            </p>
            <img
                src="/c.png"
                alt="Hero"
                className="w-full h-full object-cover opacity-70 hero inset-0"
            />
            <p className="text-lg sm:text-xl text-gray-200 text-center mx-auto mb-6">
                The process begins when you input your desired lead criteria, described abstractly in natural language. MimicsLeads then uses AI-powered algorithms to analyze and understand your input. 
                We perform intelligent web scraping, collecting relevant data based on your specifications. 
                With the power of artificial intelligence, we automatically score and rank the leads based on how closely they match your descriptive criteria, ensuring the most relevant prospects are prioritized for your business.
            </p>
        </div>

        <div id="how-to-use" className="container mx-auto px-6 py-8 bg-gray-900 p-6 rounded-lg shadow-lg text-white rounded-lg mt-12 col-start-1 col-end-9">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">How to Use</h2>

            <div className="max-w-3xl mx-auto">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/4cr4sBc51B0"
                    title="How to Use MimicsLeads"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                ></iframe>
                </div>
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

export default LandingPage;
