import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Brain, Zap, Leaf, ArrowRight, CheckCircle, TrendingUp, Shield } from "lucide-react";

const InnovationShowcase: React.FC = () => {
  const innovations = [
    {
      id: 'data-lake',
      title: 'Data Lake',
      subtitle: 'Zentrale Datenplattform',
      description: 'Umfassende Sammlung und Analyse aller Bahnbetriebsdaten in einer einheitlichen, skalierbaren Plattform.',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Echtzeitdatenverarbeitung',
        'Skalierbare Cloud-Architektur',
        'Integrierte Datenqualitätssicherung',
        'API-basierte Datenzugriffe'
      ],
      metrics: {
        label: 'Datenquellen',
        value: '500+',
        description: 'Sensoren und Systeme'
      }
    },
    {
      id: 'ki-initiative',
      title: 'KI-Initiative',
      subtitle: 'Intelligente Automatisierung',
      description: 'Fortschrittliche Machine Learning Algorithmen für prädiktive Wartung und optimierte Betriebsführung.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Predictive Analytics',
        'Anomalieerkennung',
        'Automatisierte Entscheidungsfindung',
        'Kontinuierliches Lernen'
      ],
      metrics: {
        label: 'Genauigkeit',
        value: '94%',
        description: 'Vorhersagequalität'
      }
    },
    {
      id: 'neurorail',
      title: 'NeuroRail Orchestrator',
      subtitle: 'Intelligente Systemsteuerung',
      description: 'KI-gesteuerte Orchestrierung aller Bahnbetriebsprozesse für maximale Effizienz und Sicherheit.',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      features: [
        'Dynamische Ressourcenallokation',
        'Echtzeit-Optimierung',
        'Integrierte Sicherheitssysteme',
        'Adaptive Prozesssteuerung'
      ],
      metrics: {
        label: 'Effizienz',
        value: '+35%',
        description: 'Betriebsoptimierung'
      }
    },
    {
      id: 'green-ledger',
      title: 'Green Ledger Certification',
      subtitle: 'Nachhaltigkeitszertifizierung',
      description: 'Blockchain-basierte Zertifizierung für nachhaltige und umweltfreundliche Bahnbetriebspraktiken.',
      icon: Leaf,
      color: 'from-green-500 to-emerald-500',
      features: [
        'CO₂-Footprint Tracking',
        'Nachhaltigkeitsmetriken',
        'Transparente Berichterstattung',
        'Compliance-Management'
      ],
      metrics: {
        label: 'CO₂-Reduktion',
        value: '-28%',
        description: 'Emissionseinsparung'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovation im Fokus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            wegweisenden Technologien, die die Zukunft des Bahnbetriebs gestalten
          </p>
        </div>

        {/* Innovation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {innovations.map((innovation, index) => {
            const IconComponent = innovation.icon;
            return (
              <Card key={innovation.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${innovation.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{innovation.title}</h3>
                        <p className="text-sm text-gray-500">{innovation.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{innovation.metrics.value}</div>
                      <div className="text-xs text-gray-500">{innovation.metrics.description}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{innovation.description}</p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {innovation.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Innovation Impact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Innovation trifft auf Realität</h3>
              <p className="text-blue-100 mb-6">
                Unsere Innovationen sind nicht nur Zukunftsvisionen, sondern bereits heute im Einsatz. 
                Sie transformieren den Bahnbetrieb und schaffen messbare Mehrwerte für unsere Kunden.
              </p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Erfolgsgeschichten ansehen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-green-300" />
                </div>
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-blue-200">Implementierte Projekte</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-green-300" />
                </div>
                <div className="text-3xl font-bold">99.8%</div>
                <div className="text-sm text-blue-200">Systemverfügbarkeit</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Database className="h-8 w-8 text-green-300" />
                </div>
                <div className="text-3xl font-bold">50TB</div>
                <div className="text-sm text-blue-200">Daten täglich verarbeitet</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Leaf className="h-8 w-8 text-green-300" />
                </div>
                <div className="text-3xl font-bold">-40%</div>
                <div className="text-sm text-blue-200">Wartungskosten reduziert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;