import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  ArrowRight,
  Train,
  Database,
  Leaf,
  Target
} from "lucide-react";

const IntroductionSection: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('predictive-maintenance');
    if (nextSection) {
      const yOffset = -80;
      const y = nextSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const keyTopics = [
    {
      icon: Database,
      title: 'Predictive Maintenance',
      description: 'KI-gestützte Vorhersage von Wartungsbedarf',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Data Lakes',
      description: 'Zentrale Dateninfrastruktur als Fundament',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Datengetriebene Services',
      description: 'Neue Geschäftsmodelle und Wertschöpfung',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const presentationStructure = [
    { number: 'a5.2', title: 'Predictive Maintenance & Data Lake', icon: Database },
    { number: 'a5.3', title: 'Datengetriebene Services', icon: Zap },
    { number: 'a5.4', title: 'Herausforderungen & Chancen', icon: Target },
    { number: 'a5.5', title: 'Fazit & Ausblick', icon: TrendingUp }
  ];

  return (
    <section id="einleitung" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Badge */}
        <div className="text-center mb-8">
          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base px-4 py-2 border-0">
            a5.1 - Einleitung
          </Badge>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Von Zügen zu<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Mobility Intelligence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Datengetriebene Unternehmensentwicklung bei railTRACK AG:<br /> 
            Predictive Maintenance, Data Lakes und innovativer Service
          </p>
        </div>

        {/* Bedeutung der digitalen Transformation */}
        <div className="mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-cyan-400/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-white">
                    Bedeutung der digitalen Transformation & KI
                  </h2>
                  <p className="text-blue-100 leading-relaxed mb-4">
                    Die <span className="font-bold text-cyan-400">Vision der railTRACK AG</span> ist die proaktive Transformation vom 
                  traditionellen Zughersteller zum Mobility-Intelligence-Provider. <br /> <br /> 
                    Die <span className="font-bold text-cyan-400">digitale Transformation</span> und 
                    <span className="font-bold text-cyan-400"> künstliche Intelligenz</span> revolutionieren 
                    die Schienenverkehrsindustrie fundamental. Unternehmen, die diese Technologien erfolgreich 
                    einsetzen, verschaffen sich entscheidende Wettbewerbsvorteile durch:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-cyan-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-cyan-400" />
                        <span className="font-semibold text-white">Effizienzsteigerung</span>
                      </div>
                      <p className="text-base text-blue-200">
                        Optimierte Prozesse und reduzierte Ausfallzeiten durch z.B. proaktiver Wartung
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-emerald-400/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Leaf className="h-5 w-5 text-emerald-400" />
                        <span className="font-semibold text-white">Nachhaltigkeit</span>
                      </div>
                      <p className="text-base text-blue-200">
                        Reduktion von CO₂-Emissionen und Ressourcenverbrauch durch datenbasierte Optimierung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* railTRACK AG als Fallbeispiel */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-blue-900/95 to-cyan-900/95 border-blue-400/30 shadow-2xl relative z-10">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Train className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-white">
                    railTRACK AG als Fallbeispiel
                  </h2>
                  <p className="text-white leading-relaxed mb-6">
                    railTRACK AG steht exemplarisch für die Herausforderungen und Chancen der digitalen 
                    Transformation in der Bahnindustrie. Das Unternehmen transformiert sich proaktiv vom 
                    <span className="font-bold text-cyan-300"> traditionellen Zughersteller</span> zum 
                    <span className="font-bold text-cyan-300"> Mobility-Intelligence-Provider</span>.
                  </p>
                  
                  {/* Key Facts */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-950/70 rounded-lg p-4 text-center border border-cyan-400/20">
                      <div className="text-3xl font-bold text-cyan-300 mb-1">85%</div>
                      <div className="text-base text-white">Umsatz aus Rolling Stock</div>
                      <div className="text-sm text-blue-100 mt-1">Hoher Margendruck</div>
                    </div>
                    <div className="bg-blue-950/70 rounded-lg p-4 text-center border border-emerald-400/20">
                      <div className="text-3xl font-bold text-emerald-300 mb-1">16</div>
                      <div className="text-base text-white">Produktionswerke</div>
                      <div className="text-sm text-blue-100 mt-1">Global verteilt</div>
                    </div>
                    <div className="bg-blue-950/70 rounded-lg p-4 text-center border border-orange-400/20">
                      <div className="text-3xl font-bold text-orange-300 mb-1">80+</div>
                      <div className="text-base text-white">Servicestandorte</div>
                      <div className="text-sm text-blue-100 mt-1">In 22 Ländern</div>
                    </div>
                  </div>

                  <div className="bg-blue-950/50 rounded-lg p-4 border-l-4 border-cyan-400">
                    <p className="text-base text-white">
                      <span className="font-bold text-cyan-300">Strategische Initiative:</span> Die neue Fabrik 
                      in Detroit, USA, ist der Kern dieser Transformation – ein Vorreiter für digitale 
                      Technologien nach Industrie 4.0-Prinzipien.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Zentrale Themen der Präsentation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Zentrale Themen der Präsentation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {keyTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${topic.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
                    <p className="text-base text-blue-200">{topic.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Struktur der Präsentation */}
        <div className="mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-8 text-white">
                Struktur der Präsentation
              </h2>
              <div className="space-y-4">
                {presentationStructure.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-blue-800/50 text-blue-200 border-0 text-xs">
                            {item.number}
                          </Badge>
                          <span className="font-semibold text-white">{item.title}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-cyan-400" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA - Weiter zur Präsentation */}

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default IntroductionSection;
