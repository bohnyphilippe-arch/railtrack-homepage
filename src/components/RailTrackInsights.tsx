import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  Zap, 
  TrendingDown, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Activity,
  Target,
  Award,
  ArrowRight,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, trend, icon, color }) => (
  <Card className="relative overflow-hidden">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'down' ? (
              <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <TrendingUp className="h-4 w-4 text-blue-500 mr-1" />
            )}
            <span className={cn(
              "text-sm font-medium",
              trend === 'down' ? "text-green-600" : "text-blue-600"
            )}>
              {change}
            </span>
          </div>
        </div>
        <div className={cn("p-3 rounded-full", color)}>
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

interface ChartData {
  month: string;
  co2: number;
  energy: number;
  efficiency: number;
}

const RailTrackInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sustainability' | 'performance'>('sustainability');
  const [animatedValues, setAnimatedValues] = useState({
    co2Reduction: 0,
    energySavings: 0,
    efficiency: 0
  });

  const chartData: ChartData[] = [
    { month: 'Jan', co2: 120, energy: 85, efficiency: 92 },
    { month: 'Feb', co2: 115, energy: 82, efficiency: 94 },
    { month: 'Mär', co2: 108, energy: 78, efficiency: 96 },
    { month: 'Apr', co2: 102, energy: 75, efficiency: 97 },
    { month: 'Mai', co2: 95, energy: 72, efficiency: 98 },
    { month: 'Jun', co2: 88, energy: 68, efficiency: 99 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        co2Reduction: 23.5,
        energySavings: 18.2,
        efficiency: 94.7
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const sustainabilityMetrics = [
    {
      title: 'CO₂-Reduktion',
      value: `${animatedValues.co2Reduction.toFixed(1)}%`,
      change: '-5.2% vs. Vormonat',
      trend: 'down' as const,
      icon: <Leaf className="h-6 w-6 text-white" />,
      color: 'bg-green-500'
    },
    {
      title: 'Energieeinsparung',
      value: `${animatedValues.energySavings.toFixed(1)}%`,
      change: '-3.8% vs. Vormonat',
      trend: 'down' as const,
      icon: <Zap className="h-6 w-6 text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Effizienzsteigerung',
      value: `${animatedValues.efficiency.toFixed(1)}%`,
      change: '+2.1% vs. Vormonat',
      trend: 'up' as const,
      icon: <Target className="h-6 w-6 text-white" />,
      color: 'bg-purple-500'
    }
  ];

  const performanceMetrics = [
    {
      title: 'Pünktlichkeit',
      value: '96.8%',
      change: '+1.2% vs. Vormonat',
      trend: 'up' as const,
      icon: <Clock className="h-6 w-6 text-white" />,
      color: 'bg-green-500'
    },
    {
      title: 'Auslastung',
      value: '87.3%',
      change: '+4.5% vs. Vormonat',
      trend: 'up' as const,
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      color: 'bg-blue-500'
    },
    {
      title: 'Verfügbarkeit',
      value: '99.2%',
      change: '+0.3% vs. Vormonat',
      trend: 'up' as const,
      icon: <Activity className="h-6 w-6 text-white" />,
      color: 'bg-purple-500'
    }
  ];

  const currentMetrics = activeTab === 'sustainability' ? sustainabilityMetrics : performanceMetrics;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="h-4 w-4 mr-2" />
            railTRACK Insights Portal
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Datengetriebene Einblicke für <br/>
            <span className="text-blue-600"> nachhaltige Mobilität</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser Insights Portal bietet  umfassende Analysen zu Nachhaltigkeit, 
            Performance und Effizienz der Bahninfrastruktur in Echtzeit.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-lg shadow-lg">
            <button
              onClick={() => setActiveTab('sustainability')}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all duration-300",
                activeTab === 'sustainability'
                  ? "bg-green-500 text-white shadow-md"
                  : "text-gray-600 hover:text-green-600"
              )}
            >
              <Leaf className="h-5 w-5 inline mr-2" />
              Nachhaltigkeit
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all duration-300",
                activeTab === 'performance'
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              )}
            >
              <Activity className="h-5 w-5 inline mr-2" />
              Performance
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentMetrics.map((metric, index) => (
            <div
              key={metric.title}
              className="transform transition-all duration-500"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <MetricCard {...metric} />
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <Card className="mb-12 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  {activeTab === 'sustainability' ? 'Nachhaltigkeits-Dashboard' : 'Performance-Dashboard'}
                </h3>
                <p className="text-blue-100 mt-1">
                  Echtzeit-Monitoring und Analyse
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Letzte Aktualisierung: vor 2 Min</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            {/* Chart Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Trend Chart mit Ziellinie */}
              <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  {activeTab === 'sustainability' ? 'CO₂-Emissionstrend' : 'Performance-Trend'}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {activeTab === 'sustainability' 
                    ? '🎯 Ziel: Unter 100 CO₂-Einheiten (Rot = Ziellinie)'
                    : '🎯 Ziel: Über 95% Performance (Grün = Ziellinie)'}
                </p>
                
                <div className="relative h-64 bg-gray-50 rounded p-4">
                  {/* Y-Achse Labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-600 font-mono">
                    <span>{activeTab === 'sustainability' ? '120' : '100'}</span>
                    <span>{activeTab === 'sustainability' ? '100' : '95'}</span>
                    <span>{activeTab === 'sustainability' ? '80' : '90'}</span>
                    <span>{activeTab === 'sustainability' ? '60' : '85'}</span>
                    <span>{activeTab === 'sustainability' ? '40' : '80'}</span>
                  </div>

                  {/* Chart Bereich */}
                  <div className="ml-10 h-full relative">
                    {/* Rasterlinien */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 border-t border-gray-200"
                        style={{ top: `${i * 25}%` }}
                      />
                    ))}

                    {/* ZIELLINIE */}
                    <div
                      className={cn(
                        "absolute left-0 right-0 border-t-4 border-dashed z-10",
                        activeTab === 'sustainability' ? 'border-red-500' : 'border-green-500'
                      )}
                      style={{ 
                        top: activeTab === 'sustainability' ? '16.67%' : '50%'  // 100/120 = 83.33% von unten = 16.67% von oben | 95/100 = 5% von oben = 50% in der Skala
                      }}
                    >
                      <span className={cn(
                        "absolute right-0 -top-6 text-xs font-bold px-2 py-1 rounded",
                        activeTab === 'sustainability' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-green-500 text-white'
                      )}>
                        Ziel: {activeTab === 'sustainability' ? '100' : '95%'}
                      </span>
                    </div>

                    {/* Balken */}
                    <div className="absolute inset-0 flex items-end justify-around px-2 gap-1">
                      {chartData.map((data, index) => {
                        const value = activeTab === 'sustainability' ? data.co2 : data.efficiency;
                        const maxValue = activeTab === 'sustainability' ? 120 : 100;
                        const targetValue = activeTab === 'sustainability' ? 100 : 95;
                        const height = (value / maxValue) * 100;
                        
                        // Farblogik: Grün = Ziel erreicht, Orange = nah dran, Rot = weit weg
                        let barColor = '';
                        if (activeTab === 'sustainability') {
                          // Für CO₂: niedriger ist besser
                          barColor = value <= targetValue ? 'bg-green-500' : value <= targetValue * 1.1 ? 'bg-orange-500' : 'bg-red-500';
                        } else {
                          // Für Performance: höher ist besser
                          barColor = value >= targetValue ? 'bg-green-500' : value >= targetValue * 0.9 ? 'bg-orange-500' : 'bg-red-500';
                        }
                        
                        return (
                          <div key={data.month} className="flex flex-col items-center flex-1 max-w-[60px]">
                            {/* Spacer für Wert-Position */}
                            <div className="flex-1 flex items-start justify-center pt-2" style={{ height: `${100 - height}%` }}>
                              <span className="text-sm font-bold text-gray-800">
                                {value}
                              </span>
                            </div>
                            
                            {/* Balken - breiter und dicker */}
                            <div
                              className={cn(
                                "w-full rounded-t-md transition-all duration-1000 shadow-lg",
                                barColor
                              )}
                              style={{ 
                                height: `${height}%`,
                                minHeight: '8px'
                              }}
                            />
                            
                            {/* Monat */}
                            <span className="text-xs font-medium text-gray-700 mt-2 whitespace-nowrap">{data.month}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Legende */}
                <div className="mt-4 flex items-center justify-center space-x-6 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Ziel erreicht</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                    <span>Nahe am Ziel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    <span>Ziel verfehlt</span>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-green-600" />
                  Wichtige Erkenntnisse
                </h4>
                
                {activeTab === 'sustainability' ? (
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Award className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-green-900">Ziel erreicht</p>
                        <p className="text-sm text-green-700">CO₂-Reduktion um 20% übertroffen</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Zap className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium text-blue-900">Energieoptimierung</p>
                        <p className="text-sm text-blue-700">18% weniger Energieverbrauch</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Target className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <p className="font-medium text-purple-900">Effizienzsteigerung</p>
                        <p className="text-sm text-purple-700">Betriebseffizienz um 15% gestiegen</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-green-50 rounded-lg">
                      <Clock className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium text-green-900">Pünktlichkeit</p>
                        <p className="text-sm text-green-700">96.8% aller Züge fahren pünktlich</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <BarChart3 className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium text-blue-900">Kapazitätsauslastung</p>
                        <p className="text-sm text-blue-700">87% optimale Streckenauslastung</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <Activity className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <p className="font-medium text-purple-900">Systemverfügbarkeit</p>
                        <p className="text-sm text-purple-700">99.2% Betriebsbereitschaft</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <MapPin className="h-5 w-5 mr-2" />
                Detailanalyse anzeigen
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Bericht exportieren
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Leaf className="h-8 w-8 text-green-600" />,
              title: 'CO₂-Tracking',
              description: 'Kontinuierliche Überwachung der Emissionswerte'
            },
            {
              icon: <Zap className="h-8 w-8 text-blue-600" />,
              title: 'Energieeffizienz',
              description: 'Optimierung des Energieverbrauchs in Echtzeit'
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
              title: 'Performance Analytics',
              description: 'Umfassende Leistungsanalysen und KPIs'
            },
            {
              icon: <Target className="h-8 w-8 text-orange-600" />,
              title: 'Zielverfolgung',
              description: 'Monitoring von Nachhaltigkeitszielen'
            }
          ].map((feature, index) => (
            <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RailTrackInsights;
