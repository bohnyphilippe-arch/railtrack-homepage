import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Database, ArrowRight, Zap, BarChart3, Cog, Train, Wifi, Cloud, Filter, Target, TrendingUp } from "lucide-react";

interface DataFlowAnimation {
  id: string;
  startZone: string;
  endZone: string;
  progress: number;
  type: 'sensor' | 'processed' | 'insight';
}

interface ZoneData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  dataTypes: string[];
  processes: string[];
}

const DataLakeVisualization: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [dataFlows, setDataFlows] = useState<DataFlowAnimation[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const zones: ZoneData[] = [
    {
      id: 'raw',
      title: 'Raw Zone',
      description: 'Rohdaten aus verschiedenen Quellen werden in ihrer ursprünglichen Form gespeichert',
      icon: <Database className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      dataTypes: ['Sensordaten', 'IoT-Signale', 'Wartungsprotokolle', 'Betriebsdaten'],
      processes: ['Datenerfassung', 'Validierung', 'Speicherung']
    },
    {
      id: 'curated',
      title: 'Curated Zone',
      description: 'Bereinigte und strukturierte Daten für weitere Analysen',
      icon: <Filter className="w-8 h-8" />,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      dataTypes: ['Normalisierte Daten', 'Qualitätskontrolle', 'Metadaten', 'Referenzdaten'],
      processes: ['Datenbereinigung', 'Transformation', 'Qualitätssicherung']
    },
    {
      id: 'consumption',
      title: 'Consumption Zone',
      description: 'Analysierte Daten und Erkenntnisse für Geschäftsentscheidungen',
      icon: <Target className="w-8 h-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      dataTypes: ['KPIs', 'Prognosen', 'Dashboards', 'Berichte'],
      processes: ['Analyse', 'Visualisierung', 'Reporting']
    }
  ];

  const dataSources = [
    { name: 'Gleissensoren', icon: <Wifi className="w-4 h-4" />, type: 'sensor' },
    { name: 'Zugdaten', icon: <Train className="w-4 h-4" />, type: 'sensor' },
    { name: 'Wartungssysteme', icon: <Cog className="w-4 h-4" />, type: 'sensor' },
    { name: 'Wetterdaten', icon: <Cloud className="w-4 h-4" />, type: 'sensor' }
  ];

  const insights = [
    { name: 'Predictive Maintenance', icon: <Zap className="w-4 h-4" /> },
    { name: 'Performance Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Trend Analysis', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        const newFlow: DataFlowAnimation = {
          id: Math.random().toString(36).substr(2, 9),
          startZone: 'raw',
          endZone: Math.random() > 0.5 ? 'curated' : 'consumption',
          progress: 0,
          type: Math.random() > 0.7 ? 'insight' : Math.random() > 0.5 ? 'processed' : 'sensor'
        };

        setDataFlows(prev => [...prev, newFlow]);

        setTimeout(() => {
          setDataFlows(prev => prev.filter(flow => flow.id !== newFlow.id));
        }, 3000);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setDataFlows(prev => 
        prev.map(flow => ({
          ...flow,
          progress: Math.min(flow.progress + 2, 100)
        }))
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  const startAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Data Lake Architektur
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Intelligente Datenverarbeitung für moderne Bahninfrastruktur - 
            Von Rohdaten zu wertvollen Erkenntnissen
          </p>
          <Button 
            onClick={startAnimation}
            className={cn(
              "px-6 py-3 text-lg font-semibold transition-all duration-300",
              isAnimating 
                ? "bg-red-600 hover:bg-red-700" 
                : "bg-blue-600 hover:bg-blue-700"
            )}
          >
            {isAnimating ? 'Animation stoppen' : 'Datenfluss starten'}
          </Button>
        </div>

        {/* Data Sources */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Datenquellen</h3>
          <div className="flex justify-center space-x-6">
            {dataSources.map((source, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border">
                <span className="text-blue-600">{source.icon}</span>
                <span className="text-base font-medium text-gray-700">{source.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Visualization */}
        <div className="relative">
          {/* Data Flow Animations */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ height: '400px' }}>
            {dataFlows.map((flow) => {
              const startX = flow.startZone === 'raw' ? '16.66%' : flow.startZone === 'curated' ? '50%' : '83.33%';
              const endX = flow.endZone === 'raw' ? '16.66%' : flow.endZone === 'curated' ? '50%' : '83.33%';
              const currentX = parseFloat(startX) + (parseFloat(endX) - parseFloat(startX)) * (flow.progress / 100);
              
              return (
                <circle
                  key={flow.id}
                  cx={`${currentX}%`}
                  cy="50%"
                  r="4"
                  className={cn(
                    "transition-all duration-100",
                    flow.type === 'sensor' && "fill-blue-500",
                    flow.type === 'processed' && "fill-emerald-500",
                    flow.type === 'insight' && "fill-purple-500"
                  )}
                  opacity={0.8}
                />
              );
            })}
            
            {/* Connection Lines */}
            <line x1="25%" y1="50%" x2="41.66%" y2="50%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="58.33%" y1="50%" x2="75%" y2="50%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
          </svg>

          {/* Zones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
            {zones.map((zone) => (
              <Card
                key={zone.id}
                className={cn(
                  "cursor-pointer transition-all duration-300 transform hover:scale-105",
                  zone.borderColor,
                  "border-2",
                  activeZone === zone.id && "ring-4 ring-blue-200 shadow-xl"
                )}
                onMouseEnter={() => setActiveZone(zone.id)}
                onMouseLeave={() => setActiveZone(null)}
              >
                <CardHeader className={cn("text-center", zone.bgColor)}>
                  <div className={cn("mx-auto mb-2", zone.color)}>
                    {zone.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{zone.title}</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    {zone.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-base">Datentypen:</h4>
                      <div className="space-y-1">
                        {zone.dataTypes.map((type, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className={cn("w-2 h-2 rounded-full", zone.color.replace('text-', 'bg-'))} />
                            <span className="text-sm text-gray-600">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-base">Prozesse:</h4>
                      <div className="space-y-1">
                        {zone.processes.map((process, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <ArrowRight className="w-3 h-3 text-gray-400" />
                            <span className="text-sm text-gray-600">{process}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Output Insights */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Generierte Erkenntnisse</h3>
          <div className="flex justify-center space-x-6">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-purple-200">
                <span className="text-purple-600">{insight.icon}</span>
                <span className="text-base font-medium text-gray-700">{insight.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Datenfluss-Legende</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span className="text-base text-gray-600">Sensordaten (Rohdaten)</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
              <span className="text-base text-gray-600">Verarbeitete Daten</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
              <span className="text-base text-gray-600">Analyseergebnisse</span>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-800">Technische Spezifikationen</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-base text-gray-600">
                <li>• Skalierbare Cloud-Architektur</li>
                <li>• Real-time Datenverarbeitung</li>
                <li>• Automatische Qualitätskontrolle</li>
                <li>• Machine Learning Integration</li>
                <li>• API-basierte Datenbereitstellung</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-800">Geschäftsvorteile</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-base text-gray-600">
                <li>• 40% Reduktion der Ausfallzeiten</li>
                <li>• Proaktive Wartungsplanung</li>
                <li>• Optimierte Ressourcennutzung</li>
                <li>• Verbesserte Sicherheit</li>
                <li>• Datengetriebene Entscheidungen</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataLakeVisualization;
