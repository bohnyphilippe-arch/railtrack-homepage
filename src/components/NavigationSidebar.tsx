import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Menu, X } from "lucide-react";

interface NavItem {
  id: string;
  number: string;
  title: string;
  subsections?: string[];
}

const NavigationSidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('einleitung');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    {
      id: 'einleitung',
      number: 'a5.1',
      title: 'Einleitung',
      subsections: ['Vision & Bedeutung', 'railTRACK AG als Fallbeispiel']
    },
    {
      id: 'predictive-maintenance',
      number: 'a5.2',
      title: 'Predictive Maintenance & Data Lake',
      subsections: [
        'Predictive Maintenance Konzept',
        'Data Lake Architektur',
        'KI-Algorithmen & Techniken'
      ]
    },
    {
      id: 'services',
      number: 'a5.3',
      title: 'Datengetriebene Services',
      subsections: [
        'Smart Maintenance 360°',
        'railTRACK Insights',
        'NeuroRail Orchestrator', 
        'Green Ledger Certification',
        'Business Model Innovation',
        'Wertschöpfungskette'
      ]
    },
    {
      id: 'herausforderungen',
      number: 'a5.4',
      title: 'Herausforderungen & Chancen',
      subsections: [
        'Datenqualität & Governance',
        'Integration in Systeme',
        'Datenschutz & Ethik',
        'Monetarisierung & Chancen'
      ]
    },
    {
      id: 'fazit',
      number: 'a5.5',
      title: 'Fazit & Ausblick',
      subsections: ['Zusammenfassung', 'Zukünftige Entwicklungen']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Track completed sections
      const newCompleted = new Set<string>();
      navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrolled > elementTop + rect.height * 0.8) {
            newCompleted.add(item.id);
          }
        }
      });
      setCompletedSections(newCompleted);

      // Determine active section
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id);
        if (!element) return { id: item.id, top: Infinity };
        const rect = element.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top) };
      });

      const closest = sections.reduce((prev, curr) => 
        curr.top < prev.top ? curr : prev
      );

      setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-gradient-to-r from-slate-900 to-blue-900 text-white p-3 rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-slate-900 to-blue-900 text-white p-6 overflow-y-auto z-50 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            railTRACK AG
          </h2>
          <p className="text-sm text-blue-200">Datengetriebene Transformation</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-blue-300">Präsentationsfortschritt</span>
            <span className="text-xs text-cyan-400 font-bold">{Math.round(scrollProgress)}%</span>
          </div>
          <Progress value={scrollProgress} className="h-2 bg-blue-950" />
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const isCompleted = completedSections.has(item.id);
            
            return (
              <div key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left transition-all duration-300 rounded-lg ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg scale-105' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  <Card className={`border-0 bg-transparent p-4 ${
                    isActive ? 'text-white' : 'text-blue-200'
                  }`}>
                    <div className="flex items-start space-x-3">
                      {/* Status Icon */}
                      <div className="flex-shrink-0 mt-1">
                        {isCompleted ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Circle className={`h-5 w-5 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : 'bg-blue-800/50 text-blue-300'
                          }`}>
                            {item.number}
                          </span>
                          <span className={`font-semibold text-sm ${
                            isActive ? 'text-white' : 'text-blue-100'
                          }`}>
                            {index + 1}
                          </span>
                        </div>
                        <h3 className={`font-bold text-sm mb-1 ${
                          isActive ? 'text-white' : 'text-blue-100'
                        }`}>
                          {item.title}
                        </h3>
                        
                        {/* Subsections */}
                        {item.subsections && (
                          <ul className="mt-2 space-y-1">
                            {item.subsections.map((sub, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className={`w-1 h-1 rounded-full ${
                                  isActive ? 'bg-cyan-300' : 'bg-blue-400'
                                }`}></div>
                                <span className={`text-xs ${
                                  isActive ? 'text-cyan-100' : 'text-blue-300'
                                }`}>
                                  {sub}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Card>
                </button>
              </div>
            );
          })}
        </nav>

        {/* Footer Info */}
        <div className="mt-8 pt-6 border-t border-blue-800">
          <div className="text-xs text-blue-300 space-y-1">
            <p>📊 Abschlusspräsentation AIBI</p>
            <p>🏢 railTRACK AG</p>
            <p>📅 Dezember 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationSidebar;
