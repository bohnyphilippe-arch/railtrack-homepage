import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Users, 
  TrendingUp, 
  Shield,
  Lock,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  Target
} from "lucide-react";

const ChallengesAndOpportunities: React.FC = () => {
  const challenges = [
    {
      title: 'Datenqualität & Governance',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      description: 'Sicherstellung vollständiger, genauer, konsistenter und aktueller Daten',
      details: [
        'Heterogene Flotte mit unterschiedlicher Sensorik',
        'Datensilos zwischen Produktion und Service',
        'Standardisierung von Datenformaten erforderlich',
        'Metadatenpflege zur Vermeidung von "Data Swamps"'
      ],
      solution: 'Einführung klarer Data Governance Regeln und Benennung von Data Stewards in jedem Fachbereich'
    },
    {
      title: 'Kultureller Wandel',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      description: 'Integration traditioneller Ingenieure mit Data Scientists',
      details: [
        'Unterschiedliche Denkweisen und Arbeitsweisen',
        'Skepsis gegenüber KI-basierten Entscheidungen',
        'Notwendigkeit neuer Rollen (Data Service Owner)',
        'Change Management als Erfolgsfaktor'
      ],
      solution: 'Förderung einer Innovationskultur mit Empathie und Prototyping als Kernprinzipien'
    },
    {
      title: 'Monetarisierung',
      icon: DollarSign,
      color: 'from-orange-500 to-red-500',
      description: 'ROI datenbasierter Services für Kunden nachweisen',
      details: [
        'Komplexität der Wertschöpfung schwer zu kommunizieren',
        'Kunden müssen Mehrwert verstehen',
        'Preismodelle für neue Services entwickeln',
        'Langfristige vs. kurzfristige Einsparungen'
      ],
      solution: 'Nachweisbare Energieeinsparungen und erhöhte Verfügbarkeit als messbare KPIs'
    },
    {
      title: 'Integration in bestehende Systeme',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      description: 'Nahtlose Anbindung an ERP und Legacy-Systeme',
      details: [
        'Cloud-Transformation bereits im Gange',
        'ERP- und Instandhaltungsplattformen einbinden',
        'Echtzeit-Integration von IoT-Daten',
        'Skalierbarkeit für 80+ Servicestandorte'
      ],
      solution: 'Iterative Implementierung mit Pilotprojekten in Detroit Smart Factory'
    },
    {
      title: 'Datenschutz & Ethik',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'DSGVO-konforme Datenverarbeitung und Transparenz',
      details: [
        'Kundendaten müssen anonymisiert werden',
        'Verschlüsselung sensibler Informationen',
        'Transparenz bei personalisierten Analysen',
        'Rollenbasierte Zugriffsr echte'
      ],
      solution: 'Implementierung von Privacy-by-Design Prinzipien und klare Datenschutzrichtlinien'
    }
  ];

  const opportunities = [
    {
      title: 'Strategischer Lock-in-Effekt',
      icon: Lock,
      description: 'Kontroll über Betriebssysteme und audit-sichere ESG-Nachweise erschweren Wechsel zur Konkurrenz erheblich',
      impact: 'Hoch'
    },
    {
      title: 'Neue Erlösmodelle',
      icon: DollarSign,
      description: 'Data-as-a-Service und Subscription-basierte Angebote schaffen zusätzliche Einnahmequellen',
      impact: 'Hoch'
    },
    {
      title: 'Marktanteilsicherung',
      icon: TrendingUp,
      description: 'Positionierung als Technologieführer im Bereich Smart Rail Services',
      impact: 'Hoch'
    },
    {
      title: 'Kundenbindung stärken',
      icon: Users,
      description: 'Transparente Service-Performance und messbare Mehrwerte erhöhen Kundenloyalität',
      impact: 'Mittel'
    },
    {
      title: 'Nachhaltigkeitsziele erreichen',
      icon: CheckCircle,
      description: 'ESG-Zertifizierung und CO₂-Reduktion als Wettbewerbsvorteil',
      impact: 'Hoch'
    }
  ];

  return (
    <section id="herausforderungen" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Badge */}
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-base px-4 py-2 border-0">
            a5.4 - Herausforderungen & Chancen
          </Badge>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Herausforderungen meistern, Chancen nutzen
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Integration der Erkenntnisse aus allen drei Essays: Datenqualität, Integration, 
            Datenschutz und Monetarisierung im Kontext der datengetriebenen Transformation
          </p>
        </div>

        {/* Herausforderungen */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <AlertCircle className="h-8 w-8 text-orange-500 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">
              Zentrale Herausforderungen
            </h3>
          </div>

          <div className="space-y-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {challenge.title}
                        </h4>
                        <p className="text-lg text-gray-600 mb-4">
                          {challenge.description}
                        </p>

                        {/* Details Grid */}
                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                          {challenge.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start space-x-2 bg-gray-50 rounded-lg p-3">
                              <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                              <span className="text-base text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Solution */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                          <div className="flex items-start space-x-3">
                            <Lightbulb className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="font-semibold text-green-900 mb-1">Lösungsansatz:</div>
                              <p className="text-base text-gray-700">{challenge.solution}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Chancen */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">
              Strategische Chancen
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <Badge className={`${
                        opportunity.impact === 'Hoch' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      } border-0`}>
                        Impact: {opportunity.impact}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {opportunity.title}
                    </h4>
                    <p className="text-base text-gray-600">
                      {opportunity.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {/* Schmitz-Zitat entfernt - erscheint bereits in ValueChainTransformation */}
        </div>

        {/* Balance of Challenges and Opportunities */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Balance zwischen Herausforderungen und Chancen
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Herausforderungen</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Die Implementierung von Predictive Maintenance, Data Lakes und datengetriebenen Services 
                erfordert umfassende Veränderungen in Technologie, Prozessen und Unternehmenskultur.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-base text-gray-600">5 zentrale Herausforderungen identifiziert</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Chancen</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Die Chancen überwiegen: Neue Erlösmodelle, strategischer Lock-in, Technologieführerschaft 
                und verstärkte Kundenbindung bieten erhebliches Wachstumspotenzial.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-base text-gray-600">5 strategische Chancen mit hohem Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesAndOpportunities;
