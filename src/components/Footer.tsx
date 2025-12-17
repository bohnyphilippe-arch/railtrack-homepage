import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, FileText, Download } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">railTRACK AG</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Führender Anbieter für datengetriebene Bahninfrastruktur-Services. 
                Wir transformieren die Bahnindustrie durch innovative Smart Maintenance 
                und KI-basierte Insights.
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Smart Maintenance 360°
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  railTRACK Insights
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  IoT-Sensorik
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Datenintegration
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Karriere
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  News & Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Partnerschaften
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>railTRACK AG</p>
                  <p>Bahnhofstrasse 123</p>
                  <p>6363 Obbürgen, Schweiz</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+41441234567" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  +41 41 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@railtrack.ch" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  info@railtrack.ch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-lg p-6 backdrop-blur-sm border border-blue-400/30">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Abschlusspräsentation</h4>
                  <p className="text-sm text-gray-300">Laden Sie die vollständige Präsentation herunter</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handlePrintPDF}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                >
                  <Download size={18} />
                  <span className="font-semibold">Als PDF speichern</span>
                </button>
                <a 
                  href="../4_Präs_Abschluss_railTRACKAG_Philippe_Bohny.pptx" 
                  download="4_Präs_Abschluss_railTRACKAG_Philippe_Bohny.pptx"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Download size={18} />
                  <span className="font-semibold">PowerPoint herunterladen</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} railTRACK AG. Alle Rechte vorbehalten.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Datenschutz
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Impressum
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                AGB
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Cookie-Einstellungen
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
