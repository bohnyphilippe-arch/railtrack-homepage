import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { AlertCircle, Database, TrendingDown, X } from "lucide-react";

const ProblemStatementSection: React.FC = () => {
  const dataSilos = [
    {
      name: 'SAP PM',
      description: 'Instandhaltungsdaten isoliert von Betriebsdaten',
      icon: Database,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'IoT-Sensordaten',
      description: 'Temperatur- und Vibrationsdaten in separaten DBs',
      icon: Database,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Produktionsdaten',
      description: '16 Produktionswerke in unterschiedlichen Formaten',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Externe Daten',
      description: 'Wetterdaten, Fahrpläne über separate Schnittstellen',
      icon: Database,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const challenges = [
    {
      title: 'Eingeschränkte Sicht auf Flotte',
      description: 'Fehlende Gesamtübersicht durch isolierte Datenquellen',
      icon: TrendingDown
    },
    {
      title: 'Hemmung von Innovationen',
      description: 'Datensilos verhindern KI-gestützte Lösungen',
      icon: X
    },
    {
      title: 'Verzögerungen bei Entscheidungen',
      description: 'Manuelle Datenexporte kosten Zeit und Qualität',
      icon: AlertCircle
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Die Herausforderung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fragmentierte Datensysteme blockieren Innovation und verhindern datengetriebene Entscheidungen
          </p>
        </div>

        {/* Data Silos Visualization - Kernproblem */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Fragmentierte Datensysteme
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSilos.map((silo, index) => {
              const IconComponent = silo.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className={`${silo.bgColor} pb-4`}>
                    <div className="flex items-center justify-center mb-3">
                      <div className={`p-3 rounded-lg bg-white shadow-md`}>
                        <IconComponent className={`h-8 w-8 ${silo.color}`} />
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 text-center">
                      {silo.name}
                    </h4>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-base text-gray-600 text-center">
                      {silo.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2 text-red-600">
              <X className="h-6 w-6" />
              <span className="font-semibold">Keine Integration</span>
              <X className="h-6 w-6" />
              <span className="font-semibold">Keine gemeinsame Datenbasis</span>
              
            </div>
          </div>
        </div>

        {/* Consequences */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Folgen für die Innovation
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                        <IconComponent className="h-8 w-8 text-red-600" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {challenge.title}
                      </h4>
                      <p className="text-base text-gray-600">
                        {challenge.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Die Lösung: Ein zentraler Data Lake als "Single Source of Truth"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;
