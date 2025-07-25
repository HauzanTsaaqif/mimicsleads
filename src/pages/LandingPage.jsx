import React from 'react';
import '../css/index.css';
import { Link } from 'react-scroll';
import { useState } from 'react';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <section className="relative flex flex-col justify-start items-center min-h-screen text-center bg-gray-800 grid grid-cols-8">
      <nav className="w-full col-start-1 col-end-9 bg-gray-900 text-white">
        <div className="container mx-auto flex justify-between items-center pr-4">
          <a href="/" className="flex items-center text-2xl font-bold">
            <img src="/icon.png" alt="Logo" className="mr-4 max-h-20" />
            MimicsLeads
          </a>
          <ul className="hidden md:flex space-x-8">
            <li><Link to="about-us" smooth={true} duration={500} className="hover:text-blue-400">About Me</Link></li>
            <li><Link to="how-to-use" smooth={true} duration={500} className="hover:text-blue-400">How to Use</Link></li>
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
            <li><Link to="about-us" smooth={true} duration={500} className="block hover:text-blue-400" onClick={toggleMenu}>About Me</Link></li>
            <li><Link to="how-to-use" smooth={true} duration={500} className="block hover:text-blue-400" onClick={toggleMenu}>How to Use</Link></li>
            <li><a href="/generate_leads" className="block hover:text-blue-400" onClick={toggleMenu}>Generate Leads</a></li>
            <li><a href="/setting_page" className="block hover:text-blue-400" onClick={toggleMenu}>Settings</a></li>
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

        <div className="container mx-auto px-10 py-8 bg-gray-900 p-6 rounded-lg shadow-lg text-white rounded-lg mt-12 col-start-1 col-end-9">
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

        <div id="about-us" className="container mx-auto px-6 py-8 bg-gray-900 p-6 rounded-lg shadow-lg text-white rounded-lg mt-12 col-start-1 col-end-9">
          <h2 className="text-3xl sm:text-4xl font-bold text-center">About Me</h2>
          
          <div >
            {/* Profile Image */}
            <div className="flex flex-col sm:flex-row justify-center items-center py-4 px-8">
              <div className="min-w-1/4 h-64 mb-6 sm:mb-0 sm:mr-8">
                <img src="/self/1.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>

              {/* Content */}
              <div className="min-w-3/4 text-center sm:text-left">
                <h3 className="text-2xl font-semibold mb-4">ML Engineer – Web Deployment Specialist</h3>
                <p className="italic text-lg py-3">"Every time is precious, so don't waste it"</p>
                
                <p className="text-lg mb-4">
                  I am a passionate ML Engineer and Web Deployment Specialist based in Indonesia. I have a strong background in deploying machine learning models into production environments, with expertise in building scalable web applications. 
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 content-stretch flex-row gap-4 mt-6">
                <div className="social-item p-4 bg-gray-700 hover:bg-blue-500">
                    <a href="https://www.instagram.com/hauzantsaaqif" target="_blank" rel="noopener noreferrer">
                    <img src="\icon\5.png" alt="Instagram" className="social-icon" />
                    <span className="social-name">@hauzantsaaqif</span>
                    </a>
                </div>
                
                <div className="social-item p-4 bg-gray-700 hover:bg-blue-500">
                    <a href="https://www.linkedin.com/in/hauzan-tsaaqif-mushaddaq" target="_blank" rel="noopener noreferrer">
                    <img src="\icon\1.png" alt="LinkedIn" className="social-icon" />
                    <span className="social-name">LinkedIn</span>
                    </a>
                </div>
                
                <div className="social-item p-4 bg-gray-700 hover:bg-blue-500">
                    <a href="https://github.com/HauzanTsaaqif" target="_blank" rel="noopener noreferrer">
                    <img src="\icon\4.png" alt="GitHub" className="social-icon" />
                    <span className="social-name">Github</span>
                    </a>
                </div>
                
                {/* New Social Media */}
                <div className="social-item p-4 bg-gray-700 hover:bg-blue-500">
                    <a href="https://huggingface.co/hauzantsaaqif" target="_blank" rel="noopener noreferrer">
                    <img src="\icon\2.png" alt="Hugging Face" className="social-icon" />
                    <span className="social-name">Hugging Face</span>
                    </a>
                </div>
                
                <div className="social-item p-4 bg-gray-700 hover:bg-blue-500">
                    <a href="https://devpost.com/HauzanTsaaqif" target="_blank" rel="noopener noreferrer">
                    <img src="\icon\3.png" alt="Devpost" className="social-icon" />
                    <span className="social-name">Devpost</span>
                    </a>
                </div>
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
