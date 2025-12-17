import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  TrendingUp, 
  CheckCircle,
  Brain,
  Zap,
  Database,
  Leaf,
  ArrowRight,
  Star,
  Target
} from "lucide-react";

const Conclusion: React.FC = () => {
  const keyAchievements = [
    {
      icon: Database,
      title: 'Data Lake als Fundament',
      description: 'Zentrale Dateninfrastruktur ermöglicht KI-gestützte Analysen',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Predictive Maintenance',
      description: 'Proaktive Wartung reduziert Ausfallzeiten um 40%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Neue Service-Modelle',
      description: 'NeuroRail & Green Ledger schaffen Wettbewerbsvorteile',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Leaf,
      title: 'Nachhaltigkeitsziele',
      description: 'ESG-Zertifizierung und CO₂-Reduktion erreicht',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const futureTimeline = [
    {
      period: 'Kurzfristig (1-2 Jahre)',
      icon: CheckCircle,
      color: 'bg-blue-500',
      items: [
        'Vollständige Data Lake Implementierung',
        'Predictive Maintenance für Achslager produktiv',
        'Smart Maintenance 360° Dashboard im Einsatz',
        'Erste Pilotprojekte in Detroit'
      ]
    },
    {
      period: 'Mittelfristig (3-5 Jahre)',
      icon: TrendingUp,
      color: 'bg-purple-500',
      items: [
        'NeuroRail Orchestrator Rollout auf 80+ Standorte',
        'Green Ledger Certification als Standard',
        'Dynamic Pricing Modelle etabliert',
        'Echtzeit-IoT-Integration abgeschlossen'
      ]
    },
    {
      period: 'Langfristig (>5 Jahre)',
      icon: Rocket,
      color: 'bg-orange-500',
      items: [
        'RailThinkNet: Deep Learning Integration',
        'Vollautonome Flotten-Orchestrierung',
        'Marktführerschaft in Smart Rail Services',
        'Globale Skalierung der Plattform'
      ]
    }
  ];

  const impactMetrics = [
    { label: 'Wartungskosten', value: '-40%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Betriebseffizienz', value: '+35%', icon: Zap, color: 'text-blue-500' },
    { label: 'CO₂-Reduktion', value: '-28%', icon: Leaf, color: 'text-emerald-500' },
    { label: 'Verfügbarkeit', value: '99.8%', icon: CheckCircle, color: 'text-cyan-500' }
  ];

  return (
    <section id="fazit" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Badge */}
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base px-4 py-2 border-0">
            a5.5 - Fazit & Ausblick
          </Badge>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Vom Zughersteller zum<br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Mobility-Intelligence-Provider
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Die digitale Transformation bei railTRACK AG: Ein erfolgreiches Zusammenspiel 
            von Data Lakes, Predictive Maintenance und datengetriebenen Services
          </p>
        </div>

        {/* Zusammenfassende Schlussfolgerung */}
        <div className="mb-20">
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-400/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">
                    Bedeutung der datengetriebenen Transformation
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-4">
                    Die Semesterarbeit zeigt eindrucksvoll, wie railTRACK AG durch die systematische 
                    Integration von <span className="font-bold text-cyan-400">Data Lakes</span>, 
                    <span className="font-bold text-cyan-400"> Predictive Maintenance</span> und 
                    <span className="font-bold text-cyan-400"> datengetriebenen Services</span> eine 
                    fundamentale Transformation durchläuft.
                  </p>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Der Data Lake bildet dabei das <span className="font-bold text-cyan-400">strategische Rückgrat</span>, 
                    das die Entwicklung neuer Geschäftsmodelle erst ermöglicht. Predictive Maintenance 
                    wird so vom reinen Kostenfaktor zum <span className="font-bold text-cyan-400">Wertschöpfungstreiber</span>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Achievements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Zentrale Erfolge der Transformation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                    <p className="text-base text-blue-200">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8">
            Messbare Erfolge
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                  <CardContent className="p-6">
                    <IconComponent className={`h-8 w-8 ${metric.color} mx-auto mb-3`} />
                    <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-base text-blue-200">{metric.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Ausblick - Zukünftige Entwicklungen */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Ausblick: Der Weg zur Marktführerschaft
            </h3>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              railTRACK AG hat das Fundament für kontinuierliche Innovation gelegt
            </p>
          </div>

          <div className="space-y-8">
            {futureTimeline.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-4">{phase.period}</h4>
                        <ul className="space-y-3">
                          {phase.items.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                              <span className="text-blue-100">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* RailThinkNet Highlight */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="h-10 w-10 text-white" />
                    <h3 className="text-3xl font-bold text-white">
                      RailThinkNet: Die nächste Generation
                    </h3>
                  </div>
                  <p className="text-xl text-white/90 mb-4">
                    Die nächste Generation...
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Ein fortschrittlicher Deep Learning Ansatz, der verschiedene zeitliche, räumliche 
                    und multiquellenbezogene Daten integriert. Dies ermöglicht robuste Anomalieerkennung 
                    und bringt Predictive Maintenance auf die nächste Stufe der Automatisierung.
                  </p>
                </div>
                <div className="hidden lg:block ml-8">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Rocket className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schlusswort */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6">
                Eine erfolgreiche Transformation
              </h3>
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                railTRACK AG hat bewiesen, dass die Integration von Data Lakes, Predictive Maintenance 
                und datengetriebenen Services nicht nur technisch machbar ist, sondern auch erhebliche 
                <span className="font-bold"> wirtschaftliche und strategische Vorteile</span> bietet.
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Die Grundlage für eine führende Position in der Smart Rail Services Industrie ist gelegt.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Badge className="bg-white/20 text-white text-base px-4 py-2 border-0">
                  Technologieführerschaft
                </Badge>
                <Badge className="bg-white/20 text-white text-base px-4 py-2 border-0">
                  Kundenzufriedenheit
                </Badge>
                <Badge className="bg-white/20 text-white text-base px-4 py-2 border-0">
                  Nachhaltige Innovation
                </Badge>
                <Badge className="bg-white/20 text-white text-base px-4 py-2 border-0">
                  Wettbewerbsvorteil
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Abschlussinformationen */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-8 py-6 border border-white/20">
            <p className="text-blue-200 mb-2">📊 Abschlusspräsentation AIBI</p>
            <p className="text-white font-semibold text-lg">Philippe Bohny</p>
            <p className="text-blue-300 text-base mt-1">14. Dezember 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
