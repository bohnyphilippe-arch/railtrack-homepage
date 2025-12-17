import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Circle,
  Database,
  Brain,
  Zap,
  Rocket,
  TrendingUp,
  Users
} from "lucide-react";

const RoadmapSection: React.FC = () => {
  const phases = [
    {
      id: 1,
      title: 'Kurzfristig (1-2 Jahre)',
      status: 'in-progress',
      color: 'from-blue-500 to-cyan-500',
      icon: Database,
      goals: [
        'Vollständige Implementierung des Data Lakes',
        'Etablierung KI-Anwendungen für Predictive Maintenance',
        'Gründung interdisziplinärer Teams (Data Scientists + Ingenieure)',
        'Pilotprojekte in Detroit Smart Factory'
      ],
      keyMilestones: [
        'Data Lake Raw Zone operativ',
        'Erste Predictive Maintenance Modelle im Einsatz',
        'Smart Maintenance 360° Dashboard produktiv'
      ]
    },
    {
      id: 2,
      title: 'Mittelfristig (3-5 Jahre)',
      status: 'planned',
      color: 'from-purple-500 to-pink-500',
      icon: Zap,
      goals: [
        'Ausbau des "NeuroRail Orchestrator"',
        'Erweiterung des Serviceportfolios (Green Ledger Certification)',
        'Integration von IoT-Daten in Echtzeit',
        'Skalierung auf alle 80+ Servicestandorte weltweit'
      ],
      keyMilestones: [
        'NeuroRail Orchestrator Rollout',
        'Erste ESG-Zertifikate ausgestellt',
        'Dynamic Pricing Modelle etabliert'
      ]
    },
    {
      id: 3,
      title: 'Langfristig (>5 Jahre)',
      status: 'vision',
      color: 'from-orange-500 to-red-500',
      icon: Rocket,
      goals: [
        'Integration Deep Learning Ansätze wie RailCANet',
        '"Railway context-aware neural architecture"',
        'Predictive Maintenance auf nächste Stufe',
        'Vollautonome Flotten-Orchestrierung'
      ],
      keyMilestones: [
        'RailCANet Forschung & Entwicklung',
        'Autonome Wartungsentscheidungen',
        'Marktführerschaft in Smart Rail Services'
      ]
    }
  ];

  const challenges = [
    {
      title: 'Datenqualität & Governance',
      description: 'Sicherstellung vollständiger, genauer, konsistenter und aktueller Daten',
      solution: 'Einführung klarer Regeln und Data Stewards in jedem Fachbereich',
      icon: Database
    },
    {
      title: 'Kultureller Wandel',
      description: 'Integration traditioneller Ingenieure mit Data Scientists',
      solution: 'Förderung einer Innovationskultur mit Empathie und Prototyping',
      icon: Users
    },
    {
      title: 'Monetarisierung',
      description: 'Kunden helfen, ROI datenbasierter Services zu verstehen',
      solution: 'Nachweisbare Energieeinsparungen und erhöhte Verfügbarkeit',
      icon: TrendingUp
    }
  ];

  const getStatusIcon = (status: string) => {
    if (status === 'in-progress') return <CheckCircle className="h-6 w-6 text-green-500" />;
    if (status === 'planned') return <Circle className="h-6 w-6 text-blue-500" />;
    return <Circle className="h-6 w-6 text-gray-400" />;
  };

  const getStatusText = (status: string) => {
    if (status === 'in-progress') return 'In Umsetzung';
    if (status === 'planned') return 'Geplant';
    return 'Vision';
  };

  const getStatusColor = (status: string) => {
    if (status === 'in-progress') return 'bg-green-100 text-green-800';
    if (status === 'planned') return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600">
            Roadmap zur Marktführerschaft
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Der Weg zur Smart Rail Services Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Von der Data Lake Implementierung bis zur vollautonomen Flotten-Orchestrierung: 
            Unsere Vision für die Zukunft der Bahnindustrie
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 via-purple-300 to-orange-300"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={phase.id} className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Card */}
                  <div className="lg:w-5/12">
                    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className={`bg-gradient-to-r ${phase.color} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <Badge className={`mb-2 ${getStatusColor(phase.status)}`}>
                              {getStatusText(phase.status)}
                            </Badge>
                            <h3 className="text-3xl font-bold">{phase.title}</h3>
                          </div>
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <IconComponent className="h-8 w-8" />
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        {/* Goals */}
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-3">Ziele</h4>
                          <ul className="space-y-2">
                            {phase.goals.map((goal, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Milestones */}
                        <div className="border-t pt-4">
                          <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase">
                            Key Milestones
                          </h4>
                          <div className="space-y-2">
                            {phase.keyMilestones.map((milestone, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm text-gray-600">{milestone}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Icon */}
                  <div className="lg:w-2/12 flex justify-center">
                    <div className="relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl font-bold text-white">{phase.id}</span>
                      </div>
                      <div className="absolute -top-2 -right-2">
                        {getStatusIcon(phase.status)}
                      </div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="lg:w-5/12 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RailCANet Highlight */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <Badge className="mb-3 bg-white text-orange-600">Langfristige Vision</Badge>
                  <h3 className="text-4xl font-bold mb-3">
                    RailCANet: Die nächste Generation
                  </h3>
                  <p className="text-xl opacity-90">
                    Railway context-aware neural architecture
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Brain className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                RailCANet ist ein fortschrittlicher Deep Learning Ansatz, der verschiedene zeitliche, 
                räumliche und multiquellenbezogene Daten integriert. Dies ermöglicht robuste 
                Anomalieerkennung und bringt Predictive Maintenance auf die nächste Stufe.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                  <div className="font-bold text-gray-900 mb-2">Zeitliche Daten</div>
                  <p className="text-sm text-gray-600">Historische Zeitreihen und Trends</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                  <div className="font-bold text-gray-900 mb-2">Räumliche Daten</div>
                  <p className="text-sm text-gray-600">Geografische Kontextinformationen</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
                  <div className="font-bold text-gray-900 mb-2">Multiquellen</div>
                  <p className="text-sm text-gray-600">Integration verschiedener Datenströme</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Challenges & Opportunities */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Herausforderungen & Chancen
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 mx-auto">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {challenge.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 text-center">
                      {challenge.description}
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-xs font-semibold text-blue-800 mb-1">Lösung:</div>
                      <p className="text-sm text-gray-700">{challenge.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 border-0 shadow-2xl">
            <CardContent className="p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">
                Gemeinsam in die Zukunft der Bahnindustrie
              </h3>
              <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
                railTRACK AG positioniert sich als Technologieführer und treibt die Transformation 
                vom traditionellen Zughersteller zum Mobility-Intelligence-Provider voran.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="bg-white/20 text-white text-base px-4 py-2 border-0">
                  Innovationsführerschaft
                </Badge>
                <Badge className="bg-white/20 text-white text-base px-4 py-2 border-0">
                  Nachhaltigkeitsziele
                </Badge>
                <Badge className="bg-white/20 text-white text-base px-4 py-2 border-0">
                  Neue Erlösmodelle
                </Badge>
                <Badge className="bg-white/20 text-white text-base px-4 py-2 border-0">
                  Kundenbindung
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
