import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Leaf, 
  ArrowRight, 
  CheckCircle, 
  Calendar,
  DollarSign,
  Shield,
  Award,
  TrendingUp,
  Lock,
  FileCheck,
  Target
} from "lucide-react";

const ServiceInnovationSection: React.FC = () => {
  const neuroRailFeatures = [
    {
      title: 'Prädiktive Analysen',
      description: 'KI-basierte Achslager-Überwachung mit Echtzeitdaten',
      icon: Zap
    },
    {
      title: 'Automatische Wartungsbuchung',
      description: 'Proaktive Werkstatt-Terminierung bei erkannten Anomalien',
      icon: Calendar
    },
    {
      title: 'Dynamic Pricing',
      description: 'Risk-Premium oder Availability-Guarantee Modelle',
      icon: DollarSign
    },
    {
      title: 'Maximale Uptime',
      description: 'Garantierte Verfügbarkeit durch proaktive Orchestrierung',
      icon: Shield
    }
  ];

  const greenLedgerFeatures = [
    {
      title: 'ESG-Zertifizierung',
      description: 'Audit-sichere Nachhaltigkeitszertifikate auf Datenbasis',
      icon: Award
    },
    {
      title: 'CO₂-Tracking',
      description: 'Transparente Erfassung und Reporting von Emissionen',
      icon: TrendingUp
    },
    {
      title: 'Compliance-Vorteile',
      description: 'Steuervorteile und staatliche Förderungen',
      icon: FileCheck
    },
    {
      title: 'Strategischer Lock-in',
      description: 'Kundenbindung durch integrierte Betriebssystem-Kontrolle',
      icon: Lock
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: 'Analyse',
      description: 'Prädiktive Analysen der Achslagerdaten',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Entscheidung',
      description: 'Berechnung des Risikos und Optimierung',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      title: 'Aktion',
      description: 'Automatische Buchung und Risikokompensation',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600">
            Datengetriebene Service-Innovation
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Von Predictive Maintenance zu Smart Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Wie Data Lake und KI-Analysen die Entwicklung neuer, datengetriebener Services ermöglichen
          </p>
        </div>

        {/* Innovation Flow */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <div className="bg-white rounded-lg px-6 py-4 shadow-lg border-2 border-blue-200">
              <div className="text-center">
                <div className="text-base text-gray-500 mb-1">Grundlage</div>
                <div className="font-bold text-blue-600">Data Lake</div>
              </div>
            </div>
            <ArrowRight className="h-8 w-8 text-gray-400 rotate-90 md:rotate-0" />
            <div className="bg-white rounded-lg px-6 py-4 shadow-lg border-2 border-purple-200">
              <div className="text-center">
                <div className="text-base text-gray-500 mb-1">Fähigkeit</div>
                <div className="font-bold text-purple-600">Predictive Maintenance</div>
              </div>
            </div>
            <ArrowRight className="h-8 w-8 text-gray-400 rotate-90 md:rotate-0" />
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg px-6 py-4 shadow-lg">
              <div className="text-center">
                <div className="text-base text-white/80 mb-1">Innovation</div>
                <div className="font-bold text-white">Neue Services</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service A: NeuroRail Orchestrator */}
        <div className="mb-20">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <Badge className="mb-3 bg-white text-orange-600">Service Initiative A</Badge>
                  <h3 className="text-4xl font-bold text-white mb-3">
                    NeuroRail Orchestrator
                  </h3>
                  <p className="text-xl text-white/90">
                    Intelligente Flotten-Orchestrierung statt passiver Überwachung
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              {/* Key Concept */}
              <div className="bg-white rounded-xl p-6 mb-8 border-l-4 border-orange-500 shadow-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Das Konzept</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Transformation von "Smart Maintenance 360°" zu einer <span className="font-bold text-orange-600">autonomen, 
                  aktiven Flotten-Orchestrierung</span>. Im Gegensatz zu traditionellen Systemen, die nur Fehler anzeigen, 
                  geht der NeuroRail Orchestrator einen entscheidenden Schritt weiter: <span className="font-bold">Er warnt 
                  nicht nur, sondern handelt proaktiv.</span>
                </p>
              </div>

              {/* Workflow */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Workflow des NeuroRail Orchestrator
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {workflowSteps.map((step) => (
                    <div key={step.step} className="relative">
                      <div className={`bg-gradient-to-r ${step.color} rounded-xl p-6 text-white h-full`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold">{step.step}</span>
                          </div>
                          <Target className="h-8 w-8 opacity-50" />
                        </div>
                        <h5 className="text-xl font-bold mb-2">{step.title}</h5>
                        <p className="text-white/90">{step.description}</p>
                      </div>
                      {step.step < 3 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ArrowRight className="h-6 w-6 text-orange-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {neuroRailFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-5 shadow-sm border border-orange-100">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-1">{feature.title}</h5>
                        <p className="text-base text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Business Model Innovation */}
              <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
                <h4 className="text-2xl font-bold mb-3">Business Model Innovation</h4>
                <p className="text-lg mb-4 opacity-90">
                  Vom Service zum Availability-Partner: railTRACK verkauft nicht nur Service, 
                  sondern <span className="font-bold">Zuverlässigkeit</span> und maximiert die Verfügbarkeit der Flotte
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white border-0">Risikobasierte Preismodelle</Badge>
                  <Badge className="bg-white/20 text-white border-0">Maximale Uptime</Badge>
                  <Badge className="bg-white/20 text-white border-0">Proaktive Wertschöpfung</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service B: Green Ledger Certification */}
        <div>
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <Badge className="mb-3 bg-white text-green-600">Service Initiative B</Badge>
                  <h3 className="text-4xl font-bold text-white mb-3">
                    Green Ledger Certification
                  </h3>
                  <p className="text-xl text-white/90">
                    Sustainability-as-a-Service: Von Insights zu audit-sicheren ESG-Zertifikaten
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Leaf className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              {/* Key Concept */}
              <div className="bg-white rounded-xl p-6 mb-8 border-l-4 border-green-500 shadow-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Das Konzept</h4>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Entwicklung der bisherigen "railTRACK Insights" zu einem umfassenden 
                  <span className="font-bold text-green-600"> "Sustainability-as-a-Service"</span>-Angebot. 
                  railTRACK nutzt die gesammelten Daten, um für die Betreiber <span className="font-bold">
                  audit-sichere ESG-Zertifikate</span> zu erstellen.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-base text-gray-700 italic">
                    "Eine vorhandene Ressource (Daten) wird genutzt, um ein Kundenproblem zu lösen." 
                    <span className="block mt-2 text-sm text-gray-500">
                      - Freiling, J., & Harima, J. (2024). Entrepreneurship
                    </span>
                  </p>
                </div>
              </div>

              {/* Certification Process */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Certification Process
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center border-2 border-green-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-2">Datenerfassung</h5>
                    <p className="text-base text-gray-600">Kontinuierliche Sammlung von Betriebs- und Emissionsdaten</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center border-2 border-green-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-2">Analyse</h5>
                    <p className="text-base text-gray-600">Berechnung von CO₂-Footprint und ESG-Metriken</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 text-center border-2 border-green-200">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h5 className="text-lg font-bold text-gray-900 mb-2">Zertifikat</h5>
                    <p className="text-base text-gray-600">Audit-sichere ESG-Zertifizierung für Compliance</p>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {greenLedgerFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-5 shadow-sm border border-green-100">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-1">{feature.title}</h5>
                        <p className="text-base text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Kundenvorteile */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
                <h4 className="text-2xl font-bold mb-4">Kundenvorteile</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Nachhaltigkeit</div>
                      <div className="text-base opacity-90">Unterstützung der Klimaziele und ESG-Strategien</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Finanzielle Vorteile</div>
                      <div className="text-base opacity-90">Steuervorteile und staatliche Förderungen</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Wettbewerbsvorteil</div>
                      <div className="text-base opacity-90">Marktdurchdringung und Differenzierung</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold mb-1">Strategische Partnerschaft</div>
                      <div className="text-base opacity-90">Vertrauensvolle Zusammenarbeit mit railTRACK</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 border-0 shadow-2xl">
            <CardContent className="p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Neue Erlösmodelle durch datengetriebene Services
              </h3>
              <p className="text-xl mb-6 opacity-90">
                railTRACK transformiert sich vom Produkthersteller zum Service- und Plattformanbieter
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Mehr über unsere Services erfahren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceInnovationSection;
