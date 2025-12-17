import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cog, TrendingUp, Users, Zap, Target } from "lucide-react";

const BusinessModelSection: React.FC = () => {
  const businessModels = [
    {
      id: 'data-as-service',
      title: 'Data-as-a-Service',
      description: 'Bereitstellung von aufbereiteten Gleisdaten und Analyseergebnissen über sichere APIs',
      icon: Database,
      features: [
        'Real-time Datenstreams',
        'Historische Datenanalysen',
        'Maßgeschneiderte Dashboards',
        'API-Integration'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'predictive-maintenance',
      title: 'Predictive Maintenance Services',
      description: 'KI-gestützte Vorhersage von Wartungsbedarfen zur Optimierung der Instandhaltung',
      icon: Cog,
      features: [
        'Frühwarnsysteme',
        'Wartungsplanung',
        'Kostenoptimierung',
        'Ausfallprävention'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'consulting-optimization',
      title: 'Beratung & Optimierung',
      description: 'Strategische Beratung zur Digitalisierung und Effizienzsteigerung der Schieneninfrastruktur',
      icon: TrendingUp,
      features: [
        'Digitalisierungsstrategien',
        'Prozessoptimierung',
        'ROI-Analysen',
        'Change Management'
      ],
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const valueChain = [
    {
      step: 1,
      title: 'Datenerfassung',
      description: 'Sammlung von Sensordaten entlang der Schieneninfrastruktur',
      icon: Database
    },
    {
      step: 2,
      title: 'Datenverarbeitung',
      description: 'KI-gestützte Analyse und Aufbereitung der Rohdaten',
      icon: Zap
    },
    {
      step: 3,
      title: 'Erkenntnisgewinnung',
      description: 'Generierung von verwertbaren Insights und Handlungsempfehlungen',
      icon: Target
    },
    {
      step: 4,
      title: 'Servicebereitstellung',
      description: 'Lieferung maßgeschneiderter Lösungen an Kunden',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Neue Geschäftsmodelle für die Zukunft
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von traditioneller Gleisinspektion zu datengetriebenen Services - 
            Entdecken Sie unsere innovativen Geschäftsmodelle und die digitale Wertschöpfungskette
          </p>
        </div>

        {/* Business Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {businessModels.map((model) => {
            const IconComponent = model.icon;
            return (
              <Card key={model.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${model.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {model.title}
                  </h3>
                  <p className="text-gray-600">
                    {model.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-blue-50 transition-colors">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Value Chain */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Digitale Wertschöpfungskette
            </h3>
            <p className="text-lg text-gray-600">
              Von der Datenerfassung bis zur Servicebereitstellung - 
              Unser durchgängiger Ansatz für maximalen Kundennutzen
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {valueChain.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Arrow connector */}
                  {index < valueChain.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-3 z-10">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die digitale Transformation?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Lassen Sie uns gemeinsam Ihre Schieneninfrastruktur in die Zukunft führen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Beratungstermin vereinbaren
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Geschäftsmodelle erkunden
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;