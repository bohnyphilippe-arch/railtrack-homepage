import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Package, 
  Wrench, 
  Radio,
  TrendingUp,
  RefreshCw,
  Lock,
  DollarSign,
  Users
} from "lucide-react";

const ValueChainTransformation: React.FC = () => {
  const segments = [
    {
      name: 'Rolling Stock',
      percentage: 85,
      icon: Package,
      color: 'from-blue-500 to-cyan-500',
      beforeText: 'Produktverkauf',
      afterText: 'Datengetriebene Produktdifferenzierung',
      improvements: [
        'Digital Twins für jeden Zug',
        'Predictive Quality Control',
        'Neue Vertriebsmöglichkeiten'
      ]
    },
    {
      name: 'Service & Components',
      percentage: 13,
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      beforeText: 'Reaktiver Service',
      afterText: 'Strategisches Wachstumsfeld',
      improvements: [
        'Subscription-Modelle',
        'Performance-basierte Verträge',
        'Proaktive Wartung'
      ]
    },
    {
      name: 'Signalling',
      percentage: 2,
      icon: Radio,
      color: 'from-purple-500 to-pink-500',
      beforeText: 'Traditionelle Systeme',
      afterText: 'Intelligente Steuerung',
      improvements: [
        'Digital Twins Integration',
        'Datenbasierte Sicherheit',
        'Predictive Analytics'
      ]
    }
  ];

  const transformationEffects = [
    {
      title: 'Neue Erlösmodelle',
      description: 'Data-as-a-Service und Subscription-basierte Angebote',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Strategischer Lock-in',
      description: 'Wechsel zur Konkurrenz wird durch Datenintegration erschwert',
      icon: Lock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Kontinuierliches Feedback',
      description: 'Datenanalyse fliesst zurück in Entwicklung und Design',
      icon: RefreshCw,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Innovationsökosystem',
      description: 'Erweiterte Kooperationen entlang der Datenkette',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600">
            Geschäftsmodell-Transformation
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Auswirkungen auf die Wertschöpfungskette
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Von linearer zu zirkulärer, datenbasierter Wertschöpfung:  <br/>
            railTRACK transformiert sich vom Produzenten zum Plattform- und Serviceanbieter
          </p>
        </div>

        {/* Transformation Visual - Detailed Flow */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* VORHER - Linear */}
            <Card className="border-2 border-red-200 shadow-xl">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 border-b-2 border-red-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Package className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Vorher</h3>
                    <p className="text-lg text-gray-600">Lineare Wertschöpfungskette</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Linear Flow */}
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <div className="px-3 py-2 bg-gray-100 rounded text-base font-medium">Design</div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="px-3 py-2 bg-gray-100 rounded text-base font-medium">Produktion</div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="px-3 py-2 bg-gray-100 rounded text-base font-medium">Verkauf</div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="px-3 py-2 bg-gray-100 rounded text-base font-medium">Service</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Traditioneller Zughersteller
                    </h4>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-gray-600">• Produktfokus: 85% Umsatz aus Rolling Stock</li>
                      <li className="text-sm text-gray-600">• Reaktiver After-Sales-Service</li>
                      <li className="text-sm text-gray-600">• Einmalige Verkaufserlöse</li>
                      <li className="text-sm text-gray-600">• Hoher Margendruck durch Konkurrenz</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 mb-2">Limitierungen:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-gray-600">• Fragmentierte Datensysteme</li>
                      <li className="text-sm text-gray-600">• Begrenzte Kundenbindung</li>
                      <li className="text-sm text-gray-600">• Keine wiederkehrenden Erlöse</li>
                      <li className="text-sm text-gray-600">• Reaktives statt proaktives Handeln</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NACHHER - Zirkulär */}
            <Card className="border-2 border-green-200 shadow-xl">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 border-b-2 border-green-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Nachher</h3>
                    <p className="text-lg text-gray-600">Zirkuläres Datenökosystem</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Circular Flow with Data Lake */}
                <div className="mb-6">
                  <div className="relative">
                    <div className="flex items-center justify-center mb-4">
                      <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold shadow-lg">
                        Data Lake
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="px-2 py-2 bg-blue-50 rounded text-xs font-medium border border-blue-200">
                        Produktion
                        <ArrowRight className="h-3 w-3 mx-auto mt-1 text-blue-500" />
                      </div>
                      <div className="px-2 py-2 bg-green-50 rounded text-xs font-medium border border-green-200">
                        Service
                        <ArrowRight className="h-3 w-3 mx-auto mt-1 text-green-500" />
                      </div>
                      <div className="px-2 py-2 bg-purple-50 rounded text-xs font-medium border border-purple-200">
                        Innovation
                        <RefreshCw className="h-3 w-3 mx-auto mt-1 text-purple-500" />
                      </div>
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-2">↑ Kontinuierlicher Datenfluss ↑</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Mobility-Intelligence-Provider
                    </h4>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-gray-600">• Plattformfokus: Daten als Kernasset</li>
                      <li className="text-sm text-gray-600">• Proaktive Service-Plattform</li>
                      <li className="text-sm text-gray-600">• Subscriptions</li>
                      <li className="text-sm text-gray-600">• Verkauf von Zuverlässigkeit</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 mb-2">Neue Möglichkeiten:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="text-sm text-gray-600">• NeuroRail Orchestrator & Green Ledger</li>
                      <li className="text-sm text-gray-600">• Strategischer Lock-in-Effekt</li>
                      <li className="text-sm text-gray-600">• Data-as-a-Service Erlöse</li>
                      <li className="text-sm text-gray-600">• Kontinuierliches Feedback Loop</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Arrow */}
          <div className="flex justify-center -my-8 relative z-10">
            <div className="bg-white rounded-full p-4 shadow-xl border-4 border-blue-200">
              <ArrowRight className="h-12 w-12 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Business Segments Impact */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Primäre Auswirkungen auf Geschäftsbereiche
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className={`bg-gradient-to-r ${segment.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold mb-1">{segment.name}</h4>
                        <div className="text-3xl font-bold">{segment.percentage}%</div>
                        <div className="text-sm opacity-90">des Umsatzes</div>
                      </div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Before/After */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full flex-shrink-0"></div>
                        <div>
                          <div className="text-xs text-gray-500">Vorher</div>
                          <div className="text-sm font-medium text-gray-700">{segment.beforeText}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center my-2">
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                        <div>
                          <div className="text-xs text-gray-500">Nachher</div>
                          <div className="text-sm font-bold text-gray-900">{segment.afterText}</div>
                        </div>
                      </div>
                    </div>

                    {/* Improvements */}
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-3">Verbesserungen:</div>
                      <ul className="space-y-2">
                        {segment.improvements.map((improvement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Secondary Effects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sekundäre Effekte
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationEffects.map((effect, index) => {
              const IconComponent = effect.icon;
              return (
                <Card key={index} className={`${effect.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-md">
                      <IconComponent className={`h-8 w-8 ${effect.color}`} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {effect.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {effect.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Value Shift */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Strategischer Paradigmenwechsel
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Der Data Lake wird zum <span className="font-bold">strategischen Rückgrat</span> einer 
                neuen Service-Ära bei railTRACK AG.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Von physischen Produkten zu digitalen Dienstleistungen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Von inkrementeller zu radikaler Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Von Produkt- zu Plattformstrategien</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-sm opacity-90">Implementierte Projekte</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl font-bold mb-2">-40%</div>
                <div className="text-sm opacity-90">Wartungskosten reduziert</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl font-bold mb-2">+35%</div>
                <div className="text-sm opacity-90">Betriebseffizienz</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-4xl font-bold mb-2">99.8%</div>
                <div className="text-sm opacity-90">Systemverfügbarkeit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <Card className="bg-white/60 backdrop-blur-sm border-2 border-blue-200">
            <CardContent className="p-8">
              <p className="text-xl text-gray-700 italic mb-4">
                "Indem railTRACK die Betriebssysteme der Züge kontrolliert und audit-sichere 
                ESG-Nachweise liefert, wird ein Wechsel zur Konkurrenz für die Kunden erheblich erschwert."
              </p>
              <p className="text-sm text-gray-500">- Schmitz (2025)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueChainTransformation;
